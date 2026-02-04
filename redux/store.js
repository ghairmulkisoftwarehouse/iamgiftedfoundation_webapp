// store.js
import { configureStore } from '@reduxjs/toolkit';

import appSlice from "./reducers/appSlice";
import authSlice from './reducers/authSlice';
import  profileSlice   from './reducers/profileSlice';
import  pillarSlice   from './reducers/pillarSlice';
import programSlice   from './reducers/programSlice';
import impactSlice   from './reducers/impactSlice';
import eventSlice   from './reducers/eventSlice';
import categorySlice   from './reducers/categorySlice';


export const store = configureStore({
  reducer: {
        app : appSlice ,
            auth : authSlice,
            profile:profileSlice,
            pillar:pillarSlice,
            program:programSlice,
            impact:impactSlice,
            event:eventSlice,
            category:categorySlice,
            
  },
});
