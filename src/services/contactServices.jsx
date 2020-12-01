import React, { useEffect } from 'react';
import * as Contacts from 'expo-contacts';
import * as FileSystem from 'expo-file-system';

const contactDirectory = `${FileSystem.documentDirectory}contacts`;

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
      fields: [Contacts.Fields],
    });

    const contact = data[0];
    // console.log(contact);
    // console.log(data);
    return data;
  }
};

export const getContactById = async (contactId) => null;
