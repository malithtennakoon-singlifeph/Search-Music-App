import {createSlice} from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: {},
  },
  reducers: {
    add: (state, action) => {
      state.value = action.payload;
    },
  },
});

// export const fetchSearch = text => {
//   return async (dispatch, getState) => {
//     try {
//       const result = await fetch(
//         `https://itunes.apple.com/search?term=${text.replace(
//           ' ',
//           '+',
//         )}&limit=15&media=music&entity=song`,
//       );
//       dispatch(add(result));
//     } catch (err) {
//       console.error('fetchSearch Error:', err);
//     }
//   };
// };

// export const increaseAsync = dispatch => {
//   setTimeout(() => {
//     dispatch(increment());
//   }, 3000);
// };

export const {add} = searchSlice.actions;

export default searchSlice.reducer;

export const selectSearch = state => state.search.value;
