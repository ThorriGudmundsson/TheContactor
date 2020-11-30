import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
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
<<<<<<< HEAD
        <Button
          title="EditContact"
          onPress={() => nav.navigate('EditContact')}
        />
=======
        <View style={{height: 50, justifyContent: "center"}}>
          <TextInput placeholder="Search"></TextInput>
        </View>
>>>>>>> 35bdf63aec70ac97c5893c978f8489651c5ebb66
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
