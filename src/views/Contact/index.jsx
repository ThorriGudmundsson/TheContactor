import React from 'react';
import {
  View, Text, Image, TouchableOpacity, TouchableHighlight
} from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import styles from './styles';
// import ContactProfile from '../../components/Contacts/ContactProfile';
import CallContact from '../../components/makePhoneCall/phoneCall';
//import { getAllContacts } from '../../services/contactServices';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      phoneNumber: '',
      image: '',
    };
    this.onEditedContact = this.onEditedContact.bind(this);
  }

  componentDidMount() {
    const contactInfo = this.props.navigation.state.params;
    this.setState({
      id: contactInfo.contactId,
      name: contactInfo.contactName,
      phoneNumber: contactInfo.contactPhoneNumber,
      image: contactInfo.contactImage,
    });
  }

  async onEditedContact(newContact) {
    this.setState({
      id: newContact.id,
      name: newContact.name,
      phoneNumber: newContact.phoneNumber,
      image: newContact.image,
    });
    console.log(newContact);
    return newContact;
  }

  render() {
    const {
      id, name, phoneNumber, image,
    } = this.state;
    const { onEditedContact } = this.props.navigation.state.params;
    console.log(phoneNumber);
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.topSaveButton}>
          <MaterialCommunityIcons
            name="square-edit-outline"
            style={styles.editButton}
            size={30}
            color="black"
            onPress={() => this.props.navigation.navigate('EditContact', {
              onEditedContact: this.onEditedContact,
              id,
              name,
              phoneNumber,
              image,
            })}
      />
      </View>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: image }}
        />
        <Text style={styles.nameStyle}>{name}</Text>

        <TouchableOpacity
          style={styles.phoneNumberStyle}
          onPress={() => CallContact(phoneNumber)}>

          <AntDesign name="phone" style={styles.mobileTextStyle} />

          <Text style={styles.numberTextStyle}>
            {phoneNumber}
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

export default Contact;
