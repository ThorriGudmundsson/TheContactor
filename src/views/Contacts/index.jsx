import React from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
// import { NavigationEvents } from 'react-navigation';
import ContactList from '../../components/Contacts/ContactList';
import data from '../../resources/data.json';

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: data.Contacts,
      nav: props.navigation,
    };
  }

  render() {
    const { nav, contacts } = this.state;
    return (
      <View style={{ flex: 1 }}>
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
