import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function index() {
  return (
    <View style={styles.mainContainer}>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
