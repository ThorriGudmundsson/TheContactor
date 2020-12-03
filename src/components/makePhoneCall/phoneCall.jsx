import React from 'react';
import {  Linking, Platform } from 'react-native';

export const makeCall = () => {
  let phoneNumber = '';

  if (Platform.OS === 'android') {
    phoneNumber = 'tel:${1234567890}';
  } else {
    phoneNumber = 'telprompt:${1234567890}';
  }

  Linking.openURL(phoneNumber);
};
