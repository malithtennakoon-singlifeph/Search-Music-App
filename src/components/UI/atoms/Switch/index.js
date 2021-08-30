import React from 'react';
import {Switch} from 'react-native';
import {useTheme} from '../../../../util/Theme/ThemeContext';

export default function index({
  trackColor,
  thumbColor,
  ios_backgroundColor,
  onValueChange,
  value,
}) {
  const {colors} = useTheme();

  return (
    <Switch
      trackColor={trackColor ? trackColor : colors.background}
      thumbColor={thumbColor ? thumbColor : colors.onBackground}
      ios_backgroundColor={
        ios_backgroundColor ? ios_backgroundColor : colors.surface
      }
      onValueChange={onValueChange}
      value={value}
    />
  );
}
