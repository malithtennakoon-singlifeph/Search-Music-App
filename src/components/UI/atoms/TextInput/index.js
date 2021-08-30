import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {useTheme} from '../../../../util/Theme/ThemeContext';

export default function index({inputTextStyles, ...props}) {
  const {colors} = useTheme();
  return (
    <TextInput
      style={
        inputTextStyles ? inputTextStyles : {flex: 1, color: colors.onSurface}
      }
      {...props}
    />
  );
}

const styles = StyleSheet.create({});
