import React from 'react';
import { Linking, Platform } from 'react-native';

export const makeCall = (contactPhoneNumber) => {
  let phoneNumber = '';

  if (Platform.OS === 'android') {
    phoneNumber = `tel:${contactPhoneNumber}`;
  } else {
    phoneNumber = `telprompt:${contactPhoneNumber}`;
  }
  Linking.openURL(phoneNumber);
};

export default makeCall;
