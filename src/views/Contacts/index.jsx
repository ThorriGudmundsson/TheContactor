import React from 'react';
import { View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/Boards/BoardList';
import { getAllContacts } from '../../services/contactServices';
import data from '../../resources/data.json';

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
    };
  }

  componentDidMount {

  }

  render() {
    
  }
}
