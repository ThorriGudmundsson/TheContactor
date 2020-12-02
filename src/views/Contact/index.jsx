import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { NavigationEvents } from 'react-navigation';
// import Toolbar from '../../components/Toolbar';
import styles from './styles';

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
    // console.log(this.props.navigation.state.params);
    const contactInfo = this.props.navigation.state.params;
    this.setState({
      contactId: contactInfo.contactId,
      contactName: contactInfo.contactName,
      contactPhoneNumber: contactInfo.contactPhoneNumber,
      contactImage: contactInfo.contactImage,
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/*<Text> This will be contact view </Text>*/}
        {/*<Text>{this.state.contactId}</Text>*/}
        <Text>{this.state.contactImage}</Text>
        <MaterialCommunityIcons name="square-edit-outline" size={24} color="black" />
        <Text style={styles.nameStyle}>{this.state.contactName}</Text>
        <View style={styles.phoneNumberStyle}>
          <Text style={styles.mobileTextStyle}>
            Phone:
          </Text>
          <Text style={styles.numberTextStyle}>
            {this.state.contactPhoneNumber}
          </Text>
        </View>
      </View>
    );
  }
}

export default Contact;
