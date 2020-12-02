import React from 'react';
import {
  View, Text, TouchableHighlight, TextInput,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { contactsArray ,writeContactToFile } from '../../services/contactServices';
// import { NavigationEvents } from 'react-navigation';
// import Toolbar from '../../components/Toolbar';
import styles from './styles';

function onAdd(n, p, write, nextid) {

  write({
    id: nextid,
    name: n,
    phoneNumber: p,
    Image: '',
  });
}


class NewContact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phoneNumber: '',
      write: writeContactToFile,
      nextid: this.props.navigation.state.params.nextid,
    };
  }

  genericInputHandler(name, value) {
    this.setState({ [name]: value });
  }

  render() {
    const { name, phoneNumber, write, nextid } = this.state;
    console.log(nextid)
    return (

      <View>

        <TouchableHighlight
          onPress={() => {}}
          style={styles.cameraButton}
        >
          <AntDesign name="camera" style={styles.cameraIcon} />
        </TouchableHighlight>

        <TextInput
          style={styles.inputfield}
          placeholder="Name"
          value={name}
          onChangeText={(text) => this.genericInputHandler('name', text)}
        />

        <TextInput
          style={styles.inputfield}
          keyboardType="phone-pad"
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={(text) => this.genericInputHandler('phoneNumber', text)}
        />

        <TouchableHighlight
          onPress={() => onAdd(
            name,
            phoneNumber,
            write,
            nextid,
          )}
          style={styles.saveButton}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default NewContact;
