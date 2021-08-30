import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Text from '../Text';
import {useTheme} from '../../../../util/Theme/ThemeContext';

export default function index({
  title = '',
  color,
  onPress,
  buttonStyle,
  titleStyle,
  ...props
}) {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    buttonStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: '10%',
      padding: '2%',
      width: '100%',
      height: 50,
      borderRadius: 20,
      backgroundColor: color ? color : colors.primary,
      shadowColor: color ? color : colors.primary,
      elevation: 5,
    },
  });

  return (
    <TouchableOpacity
      style={buttonStyle ? buttonStyle : styles.buttonStyle}
      onPress={onPress}
      {...props}>
      <Text style={titleStyle ? titleStyle : {color: colors.onPrimary}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
