import React from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import data from '../../resources/data.json';
// import { NavigationEvents } from 'react-navigation';
import ContactList from '../../components/Contacts/ContactList';

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: data.contacts,
      nav: props.navigation,
    };
  }

  render() {
    const { contacts, nav } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Button
          title="New Contact"
          onPress={() => nav.navigate('NewContact')}
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
