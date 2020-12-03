import { StyleSheet } from 'react-native';
import fieldsStyles from '../../styles/fields';

export default StyleSheet.create({
  ...fieldsStyles,
  cameraButtonZone: {
    textAlign: 'center',
    backgroundColor: '#ccc',
    marginLeft: 0,
    marginBottom: 60,
  },
  cameraButton: {
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 28,
    width: 120,
    height: 120,
    borderWidth: 10,
    borderColor: '#6db051',
    borderRadius: 60,
  },
  cameraIcon: {
    fontSize: 40,
    color: '#6db051',
    textAlign: 'center',
    marginTop: 28,
  },
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
});
