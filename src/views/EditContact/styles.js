import { StyleSheet } from 'react-native';
import fieldsStyles from '../../styles/fields';
import newContact from '../NewContact/styles';

export default StyleSheet.create({
  ...fieldsStyles,
  ...newContact,
  profileImage: {
    marginLeft: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  icon: {
    backgroundColor: '#ccc',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  trash: {
    fontSize: 22,
  },
});
