import React, { useEffect } from 'react';
import * as Contacts from 'expo-contacts';
import * as FileSystem from 'expo-file-system';

const contactDirectory = `${FileSystem.documentDirectory}contacts`;
const defaultImage = 'https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg';

export const setupContactsDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(contactDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(contactDirectory);
  }
};

export const getAllContacts = async () => {
  const { status } = await Contacts.requestPermissionsAsync();
  if (status === 'granted') {
    await setupContactsDirectory();

    const { data } = await Contacts.getContactsAsync({
      fields: [
        Contacts.Fields.Name,
        Contacts.Fields.PhoneNumbers,
        Contacts.Fields.Image,
      ],
      sort: Contacts.SortTypes.FirstName,
    });

    const contactsArray = [];
    for (let i = 0; i < data.length; i += 1) {
      contactsArray.push({
        id: data[i].id,
        name: data[i].name,
        phoneNumber: data[i].phoneNumbers[0].number,
        image: (data[i].imageAvailable ? data[i].image.uri : defaultImage),
      });
    }
    return contactsArray;
  }
  return [];
};
