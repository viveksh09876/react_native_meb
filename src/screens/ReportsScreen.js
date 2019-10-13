import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const ReportsScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Reports Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ReportsScreen;