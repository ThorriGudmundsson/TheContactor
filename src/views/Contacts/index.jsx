import React from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
// import { NavigationEvents } from 'react-navigation';
// import Toolbar from '../../components/Toolbar';

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      nav: props.navigation,
    };
  }

  render() {
    const { nav } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Text> This will be contacs (list) view </Text>
        <Button
          title="contact"
          onPress={() => nav.navigate('Contact')}
        />
        <Button
          title="New Contact"
          onPress={() => nav.navigate('NewContact')}
        />
        <Button
          title="EditContact"
          onPress={() => nav.navigate('EditContact')}
        />
      </View>
    );
  }
}

Contacts.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default Contacts;
