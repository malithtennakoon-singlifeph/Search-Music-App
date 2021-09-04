import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from '../../../util/Theme/ThemeContext';
import {AppSearchTextInput} from '../../UI/molecules';
import {AppSearchItem} from '../../UI/molecules';
import {Button, Text} from '../../UI/atoms';
import {increaseAsync, increment} from '../../../features/count/countSlice';
import {add} from '../../../features/search/searchSlice';

export default function index({navigation}) {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const data = useSelector(state => state.search.value);
  const [text, setText] = React.useState('');
  const [error, setError] = React.useState(false);

  React.useEffect(async () => {
    await fetch(
      `https://itunes.apple.com/search?term=${text.replace(
        ' ',
        '+',
      )}&limit=15&media=music&entity=song`,
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          setError(true);
        }
      })
      .then(data => (data ? dispatch(add(data.results)) : dispatch(add([]))))
      .catch(error => console.log(error));
    dispatch(increment());
  }, [text]);

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

  const renderItem = ({item}) => (
    <AppSearchItem
      key={index}
      Data={item}
      onPress={() => navigation.navigate('Song', {Data: item})}
    />
  );

  const NoRenderItems = () => {
    return (
      <Text textStyles={{textAlign: 'center', color: colors.onBackground}}>
        Search Apple Music Songs
      </Text>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <AppSearchTextInput
        frontIconName="magnify"
        placeholder="Artists, songs, albums..."
        themeColor={colors.onSurface}
        onChangeText={text => setText(text)}
      />
      <Button title="Add" onPress={() => dispatch(increaseAsync())} />
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
