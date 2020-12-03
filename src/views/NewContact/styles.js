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
    marginTop: -120,
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
    opacity: 0.7,
    textAlign: 'center',
    marginTop: 28,
  },
  image: {
    alignSelf: 'center',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 20,
  }

});
