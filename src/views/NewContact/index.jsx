import React from 'react';
import {
  View, Text, TouchableHighlight, TextInput, Image,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AddModal from '../../components/AddModal';
import { takePhoto, selectFromCameraRoll } from '../../services/imageServices';
import { writeContactToFile } from '../../services/contactServices';
import styles from './styles';

class NewContact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phoneNumber: '',
      image: 'noimage', // to avoid emty uri statements
      nextId: '',
      isAddModalOpen: false,
    };
  }

  componentDidMount() {
    this.setState({
      nextId: this.props.navigation.state.params.nextId,
    });
  }

  onAdd(name, phoneNumber, image, nextId) {
    let img = image;
    if (img === 'noimage') { img = ''; }
    const newContact = {
      id: nextId,
      name,
      phoneNumber,
      image: img,
    };
    writeContactToFile(newContact);

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
      name, phoneNumber, image, nextId, isAddModalOpen,
    } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <TouchableHighlight
          disabled={name === '' && phoneNumber === ''}
          onPress={() => this.onAdd(
            name,
            phoneNumber,
            image,
            nextId,
          )}
          style={styles.topSaveButton}
        >
          <Text style={styles.topSaveButtonText}>Save</Text>
        </TouchableHighlight>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: image }}
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
          selectFromCameraRoll={() => this.selectFromCameraRoll()}
        />
      </View>
    );
  }
}

export default NewContact;
