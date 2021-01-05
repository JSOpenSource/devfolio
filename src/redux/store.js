import { configureStore } from '@reduxjs/toolkit';
import { reducer as headerReducer } from '../components/header/headerSlice';
import { reducer as profileReducer } from '../components/profile/profileSlice';
import { reducer as SkillsReducer } from '../components/skills/Skills';

export default configureStore({
  reducer: {
    header: headerReducer,
    profile: profileReducer,
    skills: SkillsReducer
  },
});
