import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Contacts from '../views/Contacts';
import Contact from '../views/Contact';
import NewContact from '../views/NewContact';
import EditContact from '../views/EditContact';

const StackNavigator = createStackNavigator({
  Contacts: {
    screen: Contacts,
  },
  Contact: {
    screen: Contact,
  },
  NewContact,
  EditContact,
});

export default createAppContainer(StackNavigator);
