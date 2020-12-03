import React from 'react';
import {
  View, Text, TouchableHighlight, TextInput, Image,
} from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
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

    this.props.navigation.state.params.onEditedContact(editedContact);
    this.props.navigation.goBack();
  }

  genericInputHandler(name, value) {
    this.setState({ [name]: value });
  }

  render() {
    const {
      id, name, phoneNumber, image, oldContact,
    } = this.state;
    return (
      <View>
        <View>
          <Image
            source={{ uri: this.state.image }}
            style={styles.profileImage}
          />
          <Icon
            name="edit"
            containerStyle={styles.icon}
          />
        </View>

        <TextInput
          style={styles.inputfield}
          placeholder="Name"
          value={this.state.name}
          onChangeText={(text) => this.genericInputHandler('name', text)}
        />

        <TextInput
          style={styles.inputfield}
          keyboardType="phone-pad"
          placeholder="Phone Number"
          value={this.state.phoneNumber}
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
      </View>
    );
  }
}

export default EditContact;
