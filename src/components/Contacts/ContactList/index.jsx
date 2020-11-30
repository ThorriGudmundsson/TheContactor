import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import ContactThumbnail from '../ContactThumbnail';

const ContactList = ({ contacts }) => (
  <View style={styles.listContainer}>
    <FlatList
      numColumns={1}
      data={contacts}
      renderItems={({
        item: {
          id, name, phoneNumber, image,
        },
      }) => (
        <ContactThumbnail
          id={id}
          name={name}
          phoneNumber={phoneNumber}
          image={image}
        />
      )}
      keyExtractor={(contact) => contact.id.toString()}
    />
  </View>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};

export default ContactList;
