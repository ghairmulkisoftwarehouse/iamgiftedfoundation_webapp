import { createSlice } from '@reduxjs/toolkit';

const badgeSlice = createSlice({
  name: 'badge',
  initialState: {
      publicBadge: [],
  
  },

  reducers: {

       setPublicBadge(state, action) {
      state.publicBadge = action.payload;
    },
 


  },
});

export const {  setPublicBadge 
} = badgeSlice.actions;
export default badgeSlice.reducer;