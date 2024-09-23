import { configureStore } from '@reduxjs/toolkit';
import stagesReducer from './stagesSlice';
import progressReducer from './progressSlice'; 


const store = configureStore({
  reducer: {
    stages: stagesReducer,
    progress: progressReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
