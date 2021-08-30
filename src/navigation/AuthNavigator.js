import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, SignUp, ForgotPassword} from '../components/pages';
import {Switch} from '../components/UI/atoms';
import {useTheme} from '../util/Theme/ThemeContext';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  const {colors, setScheme, isDark} = useTheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    isDark ? setScheme('light') : setScheme('dark');
    setIsEnabled(previousState => !previousState);
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.surface},
        headerTintColor: colors.onSurface,
        headerRight: () => (
          <Switch onValueChange={toggleSwitch} value={isEnabled} />
        ),
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Forgot Password" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
