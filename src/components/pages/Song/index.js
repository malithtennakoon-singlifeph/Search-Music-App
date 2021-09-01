import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import moment from 'moment';
import {useTheme} from '../../../util/Theme/ThemeContext';
import {Button, Icon, Text} from '../../UI/atoms';

export default function index({route, navigation}) {
  const {Data} = route.params;
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.surface,
    },
    textStyle: {
      color: colors.onBackground,
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.mainContainer}>
      <View style={{flex: 0.5, backgroundColor: colors.background}}>
        <Image
          source={{uri: Data.artworkUrl100.replace('100x100bb', '400x400bb')}}
          style={{flex: 1, margin: '5%', borderRadius: 5}}
        />
      </View>
      <View
        style={{
          flex: 0.25,
          backgroundColor: colors.surface,
          justifyContent: 'space-evenly',
        }}>
        <Text style={[styles.textStyle, {fontSize: 18}]}>{Data.trackName}</Text>
        <Text style={styles.textStyle}>{Data.artistName}</Text>
        <Text style={styles.textStyle}>
          {moment(Data.releaseDate).format('Do MMM YYYY')}
        </Text>
        <Text style={styles.textStyle}>{Data.primaryGenreName}</Text>
      </View>
      {/* Music Player */}
      <View
        style={{
          flex: 0.25,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button title={<Icon name="play" size={30} />} />
      </View>
    </View>
  );
}
