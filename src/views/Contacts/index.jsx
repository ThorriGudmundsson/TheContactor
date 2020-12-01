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
    });
  }

  render() {
    const { nav, contacts } = this.state;
    return (
      <View style={{ flex: 1 }}>

        <TouchableHighlight
          onPress={() => nav.navigate('NewContact')}
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
