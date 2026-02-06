import { createSlice } from '@reduxjs/toolkit';

const impactSlice = createSlice({
  name: 'impact',
  initialState: {
      docs: [],
   
  },

  reducers: {
    setDocs(state, action) {
      state.docs = action.payload;
    },
  


  },
});

export const {  setDocs 
} = impactSlice.actions;
export default impactSlice.reducer;



