import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function index({textStyles = {padding: 0}, ...props}) {
  return (
    <Text style={[textStyles, styles.textStyle]} {...props}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Helvetica-Light',
  },
});
