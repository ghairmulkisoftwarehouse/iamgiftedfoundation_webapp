import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
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
} = postSlice.actions;
export default postSlice.reducer;