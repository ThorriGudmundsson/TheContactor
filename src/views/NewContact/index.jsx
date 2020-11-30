import React from 'react';
import {
  View, Text, TouchableHighlight, TextInput,
} from 'react-native';
// import { NavigationEvents } from 'react-navigation';
// import Toolbar from '../../components/Toolbar';
import { AntDesign } from '@expo/vector-icons';
import styles from '../../styles/fields';
import ic_styles from './styles';

class NewContact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phoneNumber: '',
    };
  }

  genericInputHandler(name, value) {
    this.setState({ [name]: value });
  }

  render() {
    const { name, phoneNumber } = this.state;
    return (


      <View>
        
          <TouchableHighlight
            onPress={() =>{} }
            style={ic_styles.cameraButton}
          >
            <AntDesign name="camera" style={ic_styles.cameraIcon} />
          </TouchableHighlight>


        <TextInput
          style={styles.inputfield}
          placeholder="Name"
          value={name}
          onChangeText={(text) => this.genericInputHandler('name', text)}
        />

        <TextInput
          style={styles.inputfield}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={(text) => this.genericInputHandler('phoneNumber', text)}
        />


        <TouchableHighlight
          onPress={() =>{} }
        style={styles.saveButton}
      >
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableHighlight>
      </View>
    );
  }
}

export default NewContact;
