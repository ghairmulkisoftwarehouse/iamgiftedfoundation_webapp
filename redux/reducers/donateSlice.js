import { createSlice } from '@reduxjs/toolkit';

const donateSlice = createSlice({
  name: 'donate',
  initialState: {
      docs: [],
      page: 1,
      pages: 1,
      docsCount: 0,
      createLoading:false,
      error:false,
  },

  reducers: {
  setStats(state , action) {
            const { docs , docsCount , page , pages } = action.payload;
         state.docs = docs;
            state.docsCount = docsCount;
            state.page = page;
            state.pages = pages;

      
        } ,

    setCreateLoading(state, action) {
      state.createLoading = action.payload;
    },
     setError(state, action) {
      state.error = action.payload;
    },

  },
});

export const {  setStats ,setError,setCreateLoading
} = donateSlice.actions;
export default donateSlice.reducer;