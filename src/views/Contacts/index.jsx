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
  const nextid = contacts.length + 1;
  return toString(nextid);
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
    console.log(this.updateContactList);
    return (
      <View style={{ flex: 1 }}>
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
            onPress={() => this.props.navigation.navigate('NewContact', {
              nextId: findNextId(this.state.contacts), updateContactList: this.updateContactList,
            })}
            style={styles.plusButton}
          >
            <AntDesign name="pluscircle" style={styles.plusIcon} />
          </TouchableHighlight>
        </View>

        <ContactList
          contacts={contacts}
          updateContactList={this.updateContactList}
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
