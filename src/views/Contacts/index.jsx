import React from 'react';
import { View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import ContactList from '../../components/Contacts/ContactList';
// import { getAllContacts } from '../../services/contactServices';
import data from '../../resources/data.json';
import styles from './styles';

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    this.setState({
      contacts: data.contacts,
    });
  }

  render() {
    const { contacts } = this.state;
    console.log(contacts);
    return (
      <View style={styles.contacts}>
        <NavigationEvents
          onWillFocus={(payload) => this.setState({ contacts })}
        />

        <ContactList
          contacts={contacts}
        />
      </View>
    );
  }
}

export default Contacts;
