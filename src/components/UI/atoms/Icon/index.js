import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function index({
  name = '',
  size = 20,
  iconStyles = {margin: '2%', alignSelf: 'center'},
  ...props
}) {
  return <Icon name={name} size={size} style={iconStyles} {...props} />;
}

const styles = StyleSheet.create({});
