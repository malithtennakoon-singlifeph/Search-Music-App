import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useTheme} from '../../../../util/Theme/ThemeContext';

export default function index({textStyles = {padding: 0}, ...props}) {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    textStyle: {
      fontFamily: 'Helvetica-Light',
      color: colors.onBackground,
    },
  });

  return (
    <Text style={[textStyles, styles.textStyle]} {...props}>
      {props.children}
    </Text>
  );
}
