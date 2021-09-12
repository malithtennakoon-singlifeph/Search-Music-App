import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';
import moment from 'moment';
import {useTheme} from '../../../../util/Theme/ThemeContext';
import {Text} from '../../atoms';

export default function index({Data, onPress}) {
  const {colors} = useTheme();

  const utcConverter = date => {
    let tem = new Date(date);
    return moment(tem).format('Do MMM YYYY');
  };

  const styles = StyleSheet.create({
    textStyle: {
      color: colors.onBackground,
    },
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '100%',
        height: 110,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: colors.surface,
        borderBottomWidth: 2,
      }}>
      <View
        style={{
          justifyContent: 'center',
        }}>
        <Image
          source={{uri: Data.artworkUrl100}}
          style={{width: 100, height: 100}}
        />
      </View>
      <View
        style={{
          paddingLeft: '5%',
          height: '100%',
          justifyContent: 'space-evenly',
          paddingVertical: '1%',
        }}>
        <Text style={[styles.textStyle, {fontSize: 18}]}>{Data.trackName}</Text>
        <Text style={styles.textStyle}>{Data.artistName}</Text>
        <Text style={styles.textStyle}>{utcConverter(Data.releaseDate)}</Text>
        <Text style={styles.textStyle}>{Data.primaryGenreName}</Text>
      </View>
    </TouchableOpacity>
  );
}
