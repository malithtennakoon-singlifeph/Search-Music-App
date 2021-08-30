import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {useTheme} from '../../../util/Theme/ThemeContext';
import {AppSearchTextInput} from '../../UI/molecules';

export default function index() {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
      padding: '5%',
    },
    scrollViewContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      marginTop: '5%',
    },
  });

  return (
    <View style={styles.mainContainer}>
      <AppSearchTextInput
        frontIconName="magnify"
        placeholder="Artists, songs, albums..."
        themeColor={colors.onSurface}
      />
      <ScrollView style={styles.scrollViewContainer}></ScrollView>
    </View>
  );
}
