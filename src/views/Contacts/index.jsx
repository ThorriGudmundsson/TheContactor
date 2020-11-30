import React from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import data from '../../resources/data.json';
// import { NavigationEvents } from 'react-navigation';
// import Toolbar from '../../components/Toolbar';
import ContactList from '../../components/Contacts/ContactList';

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: data.contacts,
      nav: props.navigation,
    };
    console.log(this.state.contacts);
  }

  render() {
    const { contacts, nav } = this.state;
    console.log(contacts);
    return (
      <View style={{ flex: 1 }}>
        <Text> This will be contacts (list) view </Text>
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

        <ContactList
          contacts={contacts}
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
