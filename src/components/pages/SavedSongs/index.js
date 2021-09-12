import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {useTheme} from '../../../util/Theme/ThemeContext';
import {AppSearchItem} from '../../UI/molecules';
import {Text, Button, Icon} from '../../UI/atoms';
import Realm from 'realm';
import {selectedMusic} from '../../../schema';

export default function index({navigation}) {
  const {colors} = useTheme();
  const [data, setData] = useState([]);
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
      marginTop: '5%',
    },
  });

  useEffect(async () => {
    try {
      const realm = await Realm.open({
        path: 'selectedSongs',
        schema: [selectedMusic],
      });
      const songs = realm.objects('Data');
      setData(songs);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const onClickItem = item => {
    navigation.navigate('Song', {Data: item});
  };

  const renderItem = ({item}) => (
    <AppSearchItem key={index} Data={item} onPress={() => onClickItem(item)} />
  );

  const NoRenderItems = () => {
    return (
      <Text textStyles={{textAlign: 'center', color: colors.onBackground}}>
        No selected music
      </Text>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        renderItem={renderItem}
        data={data}
        keyExtractor={(item, key) => key}
        style={styles.scrollViewContainer}
        ListEmptyComponent={<NoRenderItems />}
      />
    </View>
  );
}
