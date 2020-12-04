import { StyleSheet } from 'react-native';
import fieldsStyles from '../../styles/fields';

export default StyleSheet.create({
  ...fieldsStyles,
  nameStyle: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '200',
    color: '#7BA112',
    marginTop: 50,
  },
  phoneNumberStyle: {
    flexDirection: 'row',
    padding: 20,
    marginTop: 50,
    marginHorizontal:10,
    borderRadius: 20,
    backgroundColor: '#dbebd1',
  },
  mobileTextStyle: {
    flexDirection: 'column',
    fontSize: 30,
  },
  numberTextStyle: {
    flexDirection: 'column',
    color: '#303F07',
    marginLeft: 30,
    fontSize: 22,
  },
  editButton: {
    alignSelf: 'flex-end',
    color: '#303F07',
  },
  image: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    marginTop: -20,
    borderRadius: 100,
  },
});
