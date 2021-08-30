import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Icon, TextInput} from '../../atoms';
import {useTheme} from '../../../../util/Theme/ThemeContext';

export default function index({
  passwordField = false,
  frontIconName = 'help',
  themeColor,
  label = '',
  placeholder = '',
  style = {
    paddingTop: '5%',
  },
}) {
  const [show, setShow] = React.useState(false);
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
      <Text
        style={{
          padding: '2%',
          color: themeColor ? themeColor : colors.onSurface,
        }}>
        {label}
      </Text>
      <View style={styles.textInputContainer}>
        <Icon
          name={frontIconName}
          size={25}
          color={themeColor ? themeColor : colors.onSurface}
        />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={themeColor ? themeColor : colors.onSurface}
          secureTextEntry={show ? false : true}
        />
        {passwordField && (
          <Icon
            name={show ? 'eye-outline' : 'eye'}
            size={25}
            color={themeColor ? themeColor : colors.onSurface}
            onPress={() => setShow(prev => !prev)}
          />
        )}
      </View>
    </View>
  );
}
