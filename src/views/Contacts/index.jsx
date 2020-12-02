import React from 'react';
import {
  View, TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
// import { NavigationEvents } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';
import ContactList from '../../components/Contacts/ContactList';
import { getAllContacts, sortContacts } from '../../services/contactServices';
import styles from './styles';
// import Search from '../SearchBar';

function findNextId(contacts) {
  let nextid = 0;
  contacts.forEach((contact) => {
    const idcheck = Number(contact.id);
    nextid = idcheck + 1;
  });
  return nextid;
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
<<<<<<< HEAD
    const sortedContacts = await sortContacts(contacts);
    console.log('This is it!!!!!');
    console.log(sortedContacts);
=======
    // await sortContacts(contacts);
>>>>>>> d3a4173b56570c6827a707c1af979d46b19dc887
    this.setState({
      contacts,
    });
  }

  updateContactList(newContact) {
    const newContactArray = this.state.contacts.concat(newContact);
    this.setState({ contacts: newContactArray });
  }

  updateSearch(text) {
    const filteredContacts = this.state.contacts.filter(
      (contact) => sortContacts(contact.name.toLowerCase().startsWith(text)),
    );
<<<<<<< HEAD

    // console.log(this.state.contacts);
    // console.log(searchText);
    // console.log(filteredContacts);
=======
>>>>>>> d3a4173b56570c6827a707c1af979d46b19dc887
    this.setState({
      filteredContacts,
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
