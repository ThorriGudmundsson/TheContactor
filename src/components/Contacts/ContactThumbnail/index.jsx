import React from 'react';
import {
  Image, Text, View, TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from './styles';

const ContactThumbnail = ({
  id, name, phoneNumber, image, navigation: { navigate },
}) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={() => navigate('Contact', {
      contactId: id,
      contactName: name,
      contactImage: image,
    })}
  >
    <View style={styles.contactThumbnailContainer}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: image }}
      />

      <View>
        <Text style={styles.thumbnailName}>{name}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

ContactThumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(ContactThumbnail);
