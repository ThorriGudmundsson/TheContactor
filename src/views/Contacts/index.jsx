import React from 'react';
import {
  View, TouchableHighlight,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';
import ContactList from '../../components/Contacts/ContactList';
import { getAllContacts, sortContacts, cleanDirectory } from '../../services/contactServices';
import styles from './styles';

function findNextId(contacts) {
  // find the id with the higest number and return one higer
  let nextid = 0;
  contacts.forEach((contact) => {
    if (Number(contact.id) > nextid) {
      nextid = Number(contact.id);
    }
  });
  nextid += 1;
  return nextid.toString();
}

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      searchText: '',
      filteredContacts: null,
      dontAddNow: false, // used to disable plus buttom when refrache contacts

    };
    this.updateContactList = this.updateContactList.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.onEditedContact = this.onEditedContact.bind(this);
  }

  async componentDidMount() {
    console.log('Mounting');
    const contacts = await getAllContacts();
    const sortedContacts = await sortContacts(contacts);
    this.setState({
      contacts: sortedContacts,
    });
  }

  async forcingReload() {
    this.setState( {dontAddNow: true,})
    console.log('Force Reload');
    const contacts = await getAllContacts();
    const sortedContacts = await sortContacts(contacts);
    this.setState({
      contacts: sortedContacts,
      dontAddNow: false,
    });
  }

  async onEditedContact(newContact) {
    console.log('RUNNING onEditedContact');
    /* console.log('CONTACTS VIEW ONEDITEDCONTACT');
    console.log(newContact);
    const editContactArray = this.state.contacts;
    for (let i = 0; i < editContactArray.length; i += 1) {
      if (editContactArray[i].id === newContact.id) {
        editContactArray[i] = newContact;
        break;
      }
    }
    const sortedContacts = await sortContacts(editContactArray);
    //console.log(sortedContacts);
    this.setState({ contact: sortedContacts }); */
  }

  async updateContactList(newContact) {
    console.log('RUNNING updateContactList');
    /* const newContactArray = this.state.contacts.concat(newContact);
    const sortedContacts = await sortContacts(newContactArray);
    this.setState({ contacts: sortedContacts }); */
  }

  async updateSearch(text) {
    const filteredContacts = this.state.contacts.filter(
      (contact) => contact.name.toLowerCase().startsWith(text.toLowerCase()),
    );
    const sortedContacts = await sortContacts(filteredContacts);
    this.setState({
      filteredContacts: sortedContacts,
      searchText: text,
    });
  }

  render() {
    let contacts; let filteredContacts; let searchText;
    if (this.state.filteredContacts !== null) {
      contacts = this.state.filteredContacts;
      searchText = this.state.searchText;
    } else {
      contacts = this.state.contacts;
      searchText = this.state.searchText;
    }
    return (
      <View style={{ flex: 1 }}>
        <NavigationEvents
        // payload can give some info about where from
          onWillFocus={() => this.forcingReload()}
        />

        <View style={styles.listHead}>
          <View style={{ width: '75%' }}>
            <SearchBar
              placeholder="Search contact..."
              onChangeText={this.updateSearch}
              value={searchText}
              lightTheme
            />
          </View>
          <TouchableHighlight
            disabled={this.state.dontAddNow}
            onPress={() => this.props.navigation.navigate('NewContact', {
              nextId: findNextId(contacts), updateContactList: this.updateContactList,
            })}
            style={styles.plusButton}
          >
            <AntDesign name="pluscircle" style={styles.plusIcon} />
          </TouchableHighlight>
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
