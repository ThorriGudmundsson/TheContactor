import React from 'react';
import {
  View, Text, TouchableHighlight, TextInput,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AddModal from '../../components/AddModal';
import { takePhoto } from '../../services/imageServices';
import { writeContactToFile } from '../../services/contactServices';


import styles from './styles';

class NewContact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phoneNumber: '',
      image: '',
      nextId: '',
      isAddModalOpen: false,
    };
  }

  componentDidMount() {
    this.setState({
      nextId: this.props.navigation.state.params.nextId.toString(),
    });
  }

  onAdd(name, phoneNumber, image, nextId) {
    const newContact = {
      id: nextId,
      name,
      phoneNumber,
      image,
    };
    writeContactToFile(newContact);

    this.props.navigation.state.params.updateContactList(newContact);
    this.props.navigation.goBack();
  }

  genericInputHandler(name, value) {
    this.setState({ [name]: value });
  }

  async takePhoto() {
    this.image = await takePhoto();
    console.log(this.image);
    this.setState({ image: this.image });
  }

  selectFromCamerRoll() {

  }

  render() {
    const { name, phoneNumber, image, nextId, isAddModalOpen } = this.state;
    return (
      <View>
        <TouchableHighlight
          onPress={() => this.setState({ isAddModalOpen: true })}
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
          disabled={name === '' && phoneNumber === ''}
          onPress={() => this.onAdd(
            name,
            phoneNumber,
            image,
            nextId,
          )}
          style={styles.saveButton}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableHighlight>
        <AddModal
          isOpen={isAddModalOpen}
          closeModal={() => this.setState({ isAddModalOpen: false })}
          takePhoto={() => this.takePhoto()}
          selectFromCamerRoll={() => this.selectFromCamerRoll()}
        />
      </View>
    );
  }
}

export default NewContact;
