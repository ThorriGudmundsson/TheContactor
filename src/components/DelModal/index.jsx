import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, Text } from 'react-native';
import Modal from '../Modal';
import styles from './styles';

const DelModal = ({ isOpen, closeModal, onDel, contactName}) => (
  <Modal
    isOpen={isOpen}
    closeModal={closeModal}
  >
    <Text style={styles.txt}> Are You sure you want to delete</Text>
      <Text style={styles.txtbold}>{contactName}</Text>
    <TouchableOpacity onPress={onDel}
    style={styles.button}>
    <AntDesign name="delete" style={styles.icon} />

      <Text style={styles.txtinbutton}> Delete</Text>
    </TouchableOpacity>
    <Text>( swipe up/down to cancel )</Text>


  </Modal>
);

export default DelModal;
