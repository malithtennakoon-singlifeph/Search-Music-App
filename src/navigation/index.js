import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import {AppearanceProvider} from 'react-native-appearance';
import {useSelector} from 'react-redux';
import {ThemeProvider} from '../util/Theme/ThemeContext';

const authenticated = false;

export default function navigation() {
  const authenticated = useSelector(state => state.auth.value);
  return (
    <AppearanceProvider>
      <ThemeProvider>
        <NavigationContainer>
          {authenticated ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </ThemeProvider>
    </AppearanceProvider>
  );
}
