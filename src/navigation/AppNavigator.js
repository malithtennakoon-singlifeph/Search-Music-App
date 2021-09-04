import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {View} from 'react-native';
import {Home, Song, Settings} from '../components/pages';
import {Switch, Text} from '../components/UI/atoms';
import {useTheme} from '../util/Theme/ThemeContext';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const {colors, setScheme, isDark} = useTheme();
  const [isEnabled, setIsEnabled] = useState(false);

  const count = useSelector(state => state.count.value);

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
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text textStyles={{padding: '1%', fontSize: 20}}>{count}</Text>
            <Switch onValueChange={toggleSwitch} value={isEnabled} />
          </View>
        ),
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Song" component={Song} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
