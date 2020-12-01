import React from 'react';
import { View, Text } from 'react-native';
// import { NavigationEvents } from 'react-navigation';
// import Toolbar from '../../components/Toolbar';

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
    console.log(this.props.navigation.state.params);
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
        <Text> This will be contact view </Text>
        <Text>{this.state.contactId}</Text>
        <Text>{this.state.contactName}</Text>
        <Text>{this.state.contactPhoneNumber}</Text>
        <Text>{this.state.contactImage}</Text>
      </View>
    );
  }
}

export default Contact;
