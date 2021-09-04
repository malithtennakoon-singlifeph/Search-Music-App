import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import countReducer from '../features/count/countSlice';
import searchReducer from '../features/search/searchSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    count: countReducer,
    search: searchReducer,
  },
});
