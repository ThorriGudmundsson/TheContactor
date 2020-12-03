import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { writeSomething, killit, testsomthing } from '../../services/testServices';
// import { NavigationEvents } from 'react-navigation';
// import Toolbar from '../../components/Toolbar';
import styles from '../../styles/fields';

class secrettests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      whatSOever: 'geyma bara ',
    };
  }

  async componentDidMount() {
/*    const whatSOever = await whatever;
    this.setState({
      whatSOever,
    }); */
  }

  render() {
    const { whatSOever } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Text> This will be contact view </Text>

        <TouchableHighlight
          onPress={writeSomething}
          style={styles.saveButton}
        >
          <Text style={styles.saveButtonText}>Write something</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={killit}
          style={styles.saveButton}
        >
          <Text style={styles.saveButtonText}>Kill directory</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={testsomthing}
          style={styles.saveButton}
        >
          <Text style={styles.saveButtonText}>Write something</Text>
        </TouchableHighlight>

      </View>

    );
  }
}

export default secrettests;
