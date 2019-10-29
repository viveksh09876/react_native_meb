import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import NewEntryButton from '../components/NewEntryButton';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screenView}>
      <Text style={styles.text}>Home Screen</Text>
      <NewEntryButton navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  screenView: {
      flex: 1
  }
});

export default HomeScreen;