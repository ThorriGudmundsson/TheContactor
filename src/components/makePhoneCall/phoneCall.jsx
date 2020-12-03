import React from 'react';
import { Linking, Platform } from 'react-native';
import { getAllContacts } from '../../services/contactServices';

export const makeCall = () => {
  let phoneNumber = '';
  const contacts = getAllContacts();

  if (Platform.OS === 'android') {

    phoneNumber = 'tel:${contacts.phoneNumber}';

  } else {
    phoneNumber = 'telprompt:${contacts.phoneNumber}';
  }

  Linking.openURL(phoneNumber);

};
