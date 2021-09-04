import {createSlice} from '@reduxjs/toolkit';

export const countSlice = createSlice({
  name: 'count',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
  },
});

export const increaseAsync = dispatch => {
  setTimeout(() => {
    dispatch(increment());
  }, 3000);
};

export const {increment} = countSlice.actions;

export default countSlice.reducer;
