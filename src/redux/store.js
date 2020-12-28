import { configureStore } from '@reduxjs/toolkit';
import { reducer as headerReducer } from '../components/header/headerSlice';
import { reducer as profileReducer } from '../components/profile/profileSlice';

export default configureStore({
  reducer: {
    header: headerReducer,
    profile: profileReducer,
  },
});
