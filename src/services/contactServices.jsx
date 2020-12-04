import * as Contacts from 'expo-contacts';
import * as FileSystem from 'expo-file-system';

const contactDirectory = `${FileSystem.documentDirectory}contacts`;
const defaultImage = 'https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg';

// Exception function for when using FileSystem
const onException = (cb, errorHandler) => {
  try {
    return cb();
  } catch (err) {
    if (errorHandler) {
      return errorHandler(err);
    }
    console.log(err);
  }
};

// Creates directory if it does not exist
export const setupContactsDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(contactDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(contactDirectory);
  } else {
    return false;
  }
};

export const cleanDirectory = async () => {
  await FileSystem.deleteAsync(contactDirectory);
};

// Get all contacts from the contact directory
export const readContactsFromFile = async () => {
  await setupContactsDirectory();
  const result = await onException(() => FileSystem.readDirectoryAsync(contactDirectory, {
    encoding: FileSystem.EncodingType.UTF8,
  }));

  const contactsArray = [];
  for (let i = 0; i < result.length; i += 1) {
    const contact = await onException(() => FileSystem.readAsStringAsync(`${contactDirectory}/${result[i]}`, {
      encoding: FileSystem.EncodingType.UTF8,
    }));
    contactsArray.push(JSON.parse(contact));
  }
  return contactsArray;
};

// Write a new contact to the contact directory
export const writeContactToFile = async (contact) => {
  if (contact.image === '') { contact.image = defaultImage; }
  const fileName = (`${contact.name.replace(/\s+/g, '-').toLowerCase()}-${contact.phoneNumber.replace(/-/g, '')}-${contact.id}`);
  const fileUri = `${contactDirectory}/${fileName}.json`;
  await onException(() => FileSystem.writeAsStringAsync(fileUri, JSON.stringify(contact), {
    encoding: FileSystem.EncodingType.UTF8,
  }));
};

export const deleteContactFile = async (oldContact) => {
  const oldFileName = (`${oldContact.name.replace(/\s+/g, '-').toLowerCase()}-${oldContact.phoneNumber.replace(/-/g, '')}-${oldContact.id}`);
  const oldFileUri = `${contactDirectory}/${oldFileName}.json`;
  await onException(() => FileSystem.deleteAsync(oldFileUri));
};

export const editContactFile = async (newContact, oldContact) => {
  const oldFileName = (`${oldContact.name.replace(/\s+/g, '-').toLowerCase()}-${oldContact.phoneNumber.replace(/-/g, '')}-${oldContact.id}`);
  const oldFileUri = `${contactDirectory}/${oldFileName}.json`;
  await onException(() => FileSystem.deleteAsync(oldFileUri));

  const newFileName = (`${newContact.name.replace(/\s+/g, '-').toLowerCase()}-${newContact.phoneNumber.replace(/-/g, '')}-${newContact.id}`);
  const newFileUri = `${contactDirectory}/${newFileName}.json`;
  await onException(() => FileSystem.writeAsStringAsync(newFileUri, JSON.stringify(newContact), {
    encoding: FileSystem.EncodingType.UTF8,
  }));
};

export const getAllContacts = async () => {
  const { status } = await Contacts.requestPermissionsAsync();
  if (status === 'granted') {
    // If you need to setup directory
    if (await setupContactsDirectory() !== false) {
      const { data } = await Contacts.getContactsAsync({
        fields: [
          Contacts.Fields.Name,
          Contacts.Fields.PhoneNumbers,
          Contacts.Fields.Image,
        ],
        sort: Contacts.SortTypes.FirstName, // Sorts alphabetically
      });

      const contactsArray = [];
      // Writes all the contacts from phone into the contact directory
      for (let i = 0; i < data.length; i += 1) {
        contactsArray.push({
          id: data[i].id,
          name: data[i].name,
          phoneNumber: (data[i].phoneNumbers === undefined ? '( no number )' : data[i].phoneNumbers[0].number),
          image: (data[i].imageAvailable ? data[i].image.uri : defaultImage),
        });
        await writeContactToFile(contactsArray[i]);
      }
      // Return the contacts from the contact directory
      return readContactsFromFile();
    }
    return readContactsFromFile();
  }
  return [];
};

export const sortContacts = async (contacts) => {
  const sortedContacts = [...contacts];
  sortedContacts.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
    if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
    return 0;
  });
  return sortedContacts;
};
