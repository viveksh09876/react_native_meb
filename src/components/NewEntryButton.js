import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';

class NewEntryButton extends Component {

    render() {
        return(
            <FAB
            style={styles.fab}
            small
            icon="plus"
            onPress={() => this.props.navigation.navigate('NewEntry')}
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

export default NewEntryButton;