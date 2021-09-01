import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Icon, TextInput} from '../../atoms';
import {useTheme} from '../../../../util/Theme/ThemeContext';

export default function index({
  frontIconName = 'help',
  themeColor,
  placeholder = '',
  style = {
    paddingTop: '0%',
  },
  ...props
}) {
  const {colors} = useTheme();
  const styles = StyleSheet.create({
    textInputContainer: {
      flexDirection: 'row',
      borderColor: themeColor ? themeColor : colors.onSurface,
      borderWidth: 2,
      borderRadius: 20,
      backgroundColor: colors.surface,
      shadowColor: themeColor ? themeColor : colors.onSurface,
      elevation: 5,
    },
  });

  return (
    <View style={[{width: '100%'}, style]}>
      <View style={styles.textInputContainer}>
        <Icon
          name={frontIconName}
          size={25}
          color={themeColor ? themeColor : colors.onSurface}
        />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={themeColor ? themeColor : colors.onSurface}
          {...props}
        />
      </View>
    </View>
  );
}
