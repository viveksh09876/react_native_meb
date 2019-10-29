import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

class NewEntryScreen extends Component {

    static navigationOptions =
    {
      title: 'New Entry',
    };

    state = {
      text: ''
    };

    render() {
        return(
          <TextInput
            label='Amount'
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
        );
    }
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default NewEntryScreen;