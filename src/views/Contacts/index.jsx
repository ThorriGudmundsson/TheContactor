import React from 'react';
import {
  View, TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
// import { NavigationEvents } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';
import ContactList from '../../components/Contacts/ContactList';
import { getAllContacts } from '../../services/contactServices';
import styles from './styles';
import Search from '../SearchBar';

function findNextId(contacts) {
  let nextid = 1;
  contacts.forEach((contact) => {
    const idcheck = Number(contact.id);
    if (idcheck >= nextid) {
      nextid = idcheck + 1;
    }
  });
  return nextid;
}

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      nav: props.navigation,
    };
    this.updateContactList = this.updateContactList.bind(this);
  }

  async componentDidMount() {
    const contacts = await getAllContacts();
    this.setState({
      contacts,
    });
  }

  updateContactList(newContact) {
    console.log(newContact);
    const newContactArray = this.state.contacts.concat(newContact);
    this.setState({ contacts: newContactArray });
  }

  render() {
    const { nav, contacts } = this.state;
    return (
      <View style={{ flex: 1 }}>

        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('NewContact', { nextId: findNextId(contacts), updateContactList: this.updateContactList })}
          style={styles.plusButton}
        >
          <AntDesign name="pluscircle" style={styles.plusIcon} />
        </TouchableHighlight>

        <View style={{ height: 50, justifyContent: 'center' }}>
          {/* <TextInput placeholder="Search" /> */}
          <Search />
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
