import { createSlice } from '@reduxjs/toolkit';

const badgeSlice = createSlice({
  name: 'badge',
  initialState: {
      publicBadge: [],
      userBadge:[], 
  
  },

  reducers: {

       setPublicBadge(state, action) {
      state.publicBadge = action.payload;
    },
      setUserBadge(state, action) {
      state.userBadge = action.payload;
    },
 


  },
});

export const {  setPublicBadge ,setUserBadge
} = badgeSlice.actions;
export default badgeSlice.reducer;