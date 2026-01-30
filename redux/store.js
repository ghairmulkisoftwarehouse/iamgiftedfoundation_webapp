// store.js
import { configureStore } from '@reduxjs/toolkit';

import appSlice from "./reducers/appSlice";
import authSlice from './reducers/authSlice';
import  profileSlice   from './reducers/profileSlice';
import  pillarSlice   from './reducers/pillarSlice';
import programSlice   from './reducers/programSlice';


export const store = configureStore({
  reducer: {
        app : appSlice ,
            auth : authSlice,
            profile:profileSlice,
            pillar:pillarSlice,
            program:programSlice,
            
  },
});
