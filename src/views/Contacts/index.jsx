import React from 'react';
import {
  View, Text, Button, TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
// import { NavigationEvents } from 'react-navigation';
import ContactList from '../../components/Contacts/ContactList';
import { getAllContacts } from '../../services/contactServices';

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      nav: props.navigation,
    };
  }

  async componentDidMount() {
    const contacts = await getAllContacts();
    this.setState({
      contacts,
    }, () => { console.log(this.state.contacts); });
  }

  render() {
    const { nav, contacts } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Button
          title="New Contact"
          onPress={() => nav.navigate('NewContact')}
        />
        <View style={{ height: 50, justifyContent: 'center' }}>
          <TextInput placeholder="Search" />
        </View>
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
