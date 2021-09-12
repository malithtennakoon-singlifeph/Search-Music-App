import React from 'react';
import {StyleSheet, FlatList, View, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from '../../../util/Theme/ThemeContext';
import {AppSearchTextInput} from '../../UI/molecules';
import {AppSearchItem} from '../../UI/molecules';
import {getSearch, save_data, search} from '../../../redux/rootActions';
import {Text, Button, Icon} from '../../UI/atoms';

export default function index({navigation}) {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const data = useSelector(state => state.search.data);
  //const [data, setData] = React.useState([]);
  const [text, setText] = React.useState('');
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    dispatch(search(text));
    // let payload = dispatch(getSearch(text));
    // console.log('Payload', payload);
    // //setData(dispatch(getSearch(text)));
    dispatch({type: 'COUNT'});
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

  const onClickItem = item => {
    dispatch(save_data(item));
    navigation.navigate('Song', {Data: item});
  };

  const renderItem = ({item}) => (
    <AppSearchItem key={index} Data={item} onPress={() => onClickItem(item)} />
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
      <FlatList
        renderItem={renderItem}
        data={data}
        keyExtractor={(item, key) => key}
        style={styles.scrollViewContainer}
        ListEmptyComponent={<NoRenderItems />}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 30,
          right: 30,
          backgroundColor: colors.primary,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('Saved Songs')}>
        <Icon
          name="music"
          size={25}
          color="black"
          iconStyles={{margin: '4%', alignSelf: 'center'}}
        />
      </TouchableOpacity>
    </View>
  );
}
