import React from 'react';
import {
  View, Text, TouchableHighlight, TextInput, Image,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AddModal from '../../components/AddModal';
import { takePhoto, selectFromCameraRoll } from '../../services/imageServices';
import { editContactFile } from '../../services/contactServices';
import styles from './styles';

class EditContact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      phoneNumber: '',
      image: '',
      oldContact: {},
      isAddModalOpen: false,
    };
  }

  componentDidMount() {
    this.setState({
      id: this.props.navigation.state.params.id,
      name: this.props.navigation.state.params.name,
      phoneNumber: this.props.navigation.state.params.phoneNumber,
      image: this.props.navigation.state.params.image,
      oldContact: {
        id: this.props.navigation.state.params.id,
        name: this.props.navigation.state.params.name,
        phoneNumber: this.props.navigation.state.params.phoneNumber,
        image: this.props.navigation.state.params.image,
      },
    });
  }

  onEdit(id, name, phoneNumber, image, oldContact) {
    const editedContact = {
      id,
      name,
      phoneNumber,
      image,
    };
    editContactFile(editedContact, oldContact);

    this.props.navigation.state.params.updateContact(editedContact);
    this.props.navigation.goBack();
  }

  genericInputHandler(name, value) {
    this.setState({ [name]: value });
  }

  async takePhoto() {
    this.image = await takePhoto();
    this.setState({ image: this.image });
    this.setState({ isAddModalOpen: false });
  }

  async selectFromCameraRoll() {
    this.image = await selectFromCameraRoll();
    this.setState({ image: this.image });
    this.setState({ isAddModalOpen: false });
  }

  render() {
    const {
      id, name, phoneNumber, image, oldContact, isAddModalOpen,
    } = this.state;
    return (
      <View>
        <TouchableHighlight
          disabled={name === '' && phoneNumber === ''}
          onPress={() => this.onEdit(
            id,
            name,
            phoneNumber,
            image,
            oldContact,
          )}
          style={styles.topSaveButton}
        >
          <Text style={styles.topSaveButtonText}>Save</Text>
        </TouchableHighlight>
        <Image
          source={{ uri: image }}
          style={styles.image}
        />

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
          onPress={() => this.onEdit(
            id,
            name,
            phoneNumber,
            image,
            oldContact,
          )}
          style={styles.saveButton}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableHighlight>
        <AddModal
          isOpen={isAddModalOpen}
          closeModal={() => this.setState({ isAddModalOpen: false })}
          takePhoto={() => this.takePhoto()}
          selectFromCameraRoll={() => this.selectFromCameraRoll()}
        />
      </View>
    );
  }
}

export default EditContact;
