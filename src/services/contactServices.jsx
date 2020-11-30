import React, { useEffect } from 'react';
import * as Contacts from 'expo-contacts';
import * as FileSystem from 'expo-file-system';

const contactDirectory = `${FileSystem.documentDirectory}contacts`;

export const getAllContacts = async () => {
  const { status } = await Contacts.requestPermissionsAsync();
  if (status === 'granted') {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields],
    });

    if (data.length > 0) {
      const contact = data[0];
      return data;
      // console.log(contact);
      // console.log(data);
    }
  }
};

export const getContactById = async (contactId) => null;
