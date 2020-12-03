import React from 'react';
// import { View, Text, Image } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import styles from './styles';
import ContactProfile from '../../components/Contacts/ContactProfile';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contactId: '',
      contactName: '',
      contactPhoneNumber: '',
      contactImage: '',
    };
  }

  componentDidMount() {
    const contactInfo = this.props.navigation.state.params;
    this.setState({
      contactId: contactInfo.contactId,
      contactName: contactInfo.contactName,
      contactPhoneNumber: contactInfo.contactPhoneNumber,
      contactImage: contactInfo.contactImage,
    });
  }

  render() {
    const {
      contactId, contactName, contactPhoneNumber, contactImage,
    } = this.state;
    return (
      <ContactProfile
        id={contactId}
        name={contactName}
        phoneNumber={contactPhoneNumber}
        image={contactImage}
      />
      // <View style={{ flex: 1 }}>
      //   <Image
      //     style={styles.image}
      //     resizeMode="cover"
      //     source={{ uri: contactImage }}
      //   />
      //   <MaterialCommunityIcons
      //     name="square-edit-outline"
      //     style={styles.editButton}
      //     size={30}
      //     color="black"
      //   />
      //   <Text style={styles.nameStyle}>{contactName}</Text>
      //   <View style={styles.phoneNumberStyle}>
      //     <Text style={styles.mobileTextStyle}>
      //       Phone:
      //     </Text>
      //     <Text style={styles.numberTextStyle}>
      //       {contactPhoneNumber}
      //     </Text>
      //   </View>
      // </View>
    );
  }
}

export default Contact;
