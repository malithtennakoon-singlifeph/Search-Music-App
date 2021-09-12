import {SET_DATA} from './types';
import API from '../../middleware/API';
import Realm from 'realm';
import {selectedMusic} from '../../schema';

export const search = text => async dispatch => {
  try {
    const response = API.searchItems(text);
    console.log('response', (await response).data.results);
    dispatch({type: SET_DATA, payload: (await response).data.results});
  } catch (err) {
    console.log('error', err);
  }
};

// export const getSearch = text => async () => {
//   let response;
//   try {
//     response = (await API.searchItems(text)).data.results;
//   } catch (err) {
//     console.log('error', err);
//   }
//   return response;
// };

export const save_data = payload => async () => {
  try {
    let writeItem;
    const realm = await Realm.open({
      path: 'selectedSongs',
      schema: [selectedMusic],
    });
    realm.write(() => {
      writeItem = realm.create('Data', payload);
    });
    console.log('Saved data', writeItem.trackName);
  } catch (error) {
    console.log('error', error);
  }
};
