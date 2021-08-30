import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '../../../features/auth/authSlice';
import {AppTextInput} from '../../UI/molecules';
import {Button} from '../../UI/atoms';
import {useTheme} from '../../../util/Theme/ThemeContext';

export default function index() {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
      padding: '5%',
    },
  });

  return (
    <View style={styles.mainContainer}>
      <AppTextInput
        frontIconName="account-outline"
        placeholder="Please enter your email"
        label="Email"
        themeColor={colors.onSurface}
      />
      <AppTextInput
        frontIconName="lock-outline"
        passwordField={true}
        placeholder="Please enter your password"
        label="Password"
        themeColor={colors.onSurface}
      />
      <Button title="Login" onPress={() => dispatch(login())} />
    </View>
  );
}
