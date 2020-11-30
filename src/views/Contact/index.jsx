import React from 'react';
import { View, Text } from 'react-native';
// import { NavigationEvents } from 'react-navigation';
// import Toolbar from '../../components/Toolbar';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text> This will be contact view </Text>
      </View>
    );
  }
}

export default Contact;
