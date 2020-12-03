import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  inputfield: {
    fontSize: 16,
    padding: 20,
    margin: 10,
    height: 60,
    color: '#996633',
    backgroundColor: '#E6E6D1',
    borderRadius: 16,
  },
  saveButton: {
    padding: 20,
    margin: 10,
    height: 66,
    backgroundColor: 'green',
    borderRadius: 30,
  },
  saveButtonText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#fff',
    textAlign: 'center',

  },
  topSaveButton: {
    paddingTop: 5,
    paddingRight: 20,
    height: 40,
    backgroundColor: '#A1B078',


  },
  topSaveButtonText: {
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'right',
    color: '#303F07',
  },
  helpText: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: '#996633',
  },
  isFinishedButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  isFinishedText: {
    margin: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
