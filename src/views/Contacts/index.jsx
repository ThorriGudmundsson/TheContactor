import React from 'react';
import {
  View, TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';
import ContactList from '../../components/Contacts/ContactList';
import { getAllContacts, sortContacts } from '../../services/contactServices';
import styles from './styles';

function findNextId(contacts) {
  // let nextid = 0;
  // contacts.forEach((contact) => {
  //   const idcheck = Number(contact.id);
  //   nextid += idcheck + 1;
  // });
  const nextid = Math.max(...contacts.map((contact) => contact.Number(contact.id)));
  console.log(nextid);
  // return nextid;
}

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      searchText: '',
      filteredContacts: null,
    };
    this.updateContactList = this.updateContactList.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  async componentDidMount() {
    const contacts = await getAllContacts();
    const sortedContacts = await sortContacts(contacts);
    console.log('This is it!!!!!');
    // console.log(sortedContacts);
    this.setState({
      contacts: sortedContacts,
    });
  }

  async updateContactList(newContact) {
    const newContactArray = this.state.contacts.concat(newContact);
    const sortedContacts = await sortContacts(newContactArray);
    this.setState({ contacts: sortedContacts });
  }

  async updateSearch(text) {
    const filteredContacts = this.state.contacts.filter(
      (contact) => contact.name.toLowerCase().startsWith(text),
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

        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('NewContact', {
            nextId: findNextId(this.state.contacts), updateContactList: this.updateContactList,
          })}
          style={styles.plusButton}
        >
          <AntDesign name="pluscircle" style={styles.plusIcon} />
        </TouchableHighlight>

        <View style={{ height: 50, justifyContent: 'center' }}>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={searchText}
            lightTheme
          />
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
