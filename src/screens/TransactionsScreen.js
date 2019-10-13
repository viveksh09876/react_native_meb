import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const TransactionsScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Transactions Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default TransactionsScreen;