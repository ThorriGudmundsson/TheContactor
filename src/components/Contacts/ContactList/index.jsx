import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
// import styles from './styles';
import ContactThumbnail from '../ContactThumbnail';

const ContactList = ({ contacts, onEditedContact }) => (
  <View style={{ flex: 1 }}>
    <FlatList
      numColumns={1}
      data={contacts}
      renderItem={({
        item: {
          id, name, phoneNumber, image,
        },
      }) => (
        <ContactThumbnail
          id={id}
          name={name}
          phoneNumber={phoneNumber}
          image={image}
          onEditedContact={onEditedContact}
        />
      )}
      keyExtractor={(contact) => contact.id.toString()}
    />
  </View>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
  onEditedContact: PropTypes.func.isRequired,
};

export default ContactList;
