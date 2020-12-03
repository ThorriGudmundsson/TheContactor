import React from 'react';
import { View, Text, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from './styles';

const ContactProfile = ({
  id, name, phoneNumber, image, updateContactList, navigation: { navigate },
}) => (
  <View style={{ flex: 1 }}>
    <Image
      style={styles.image}
      resizeMode="cover"
      source={{ uri: image }}
    />
    <MaterialCommunityIcons
      name="square-edit-outline"
      style={styles.editButton}
      size={30}
      color="black"
      onPress={() => navigate('EditContact', {
        contactId: id,
        contactName: name,
        contactPhoneNumber: phoneNumber,
        contactImage: image,
        updateContactList,
      })}
    />
    <Text style={styles.nameStyle}>{name}</Text>
    <View style={styles.phoneNumberStyle}>
      <Text style={styles.mobileTextStyle}>
        Phone:
      </Text>
      <Text style={styles.numberTextStyle}>
        {phoneNumber}
      </Text>
    </View>
  </View>
);

ContactProfile.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  updateContactList: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(ContactProfile);
