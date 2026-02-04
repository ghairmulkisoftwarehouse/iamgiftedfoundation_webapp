import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
      docs: [],
      page: 1,
      pages: 1,
      docsCount: 0,
  },

  reducers: {
  setStats(state , action) {
            const { docs , docsCount , page , pages } = action.payload;
         state.docs = docs;
            state.docsCount = docsCount;
            state.page = page;
            state.pages = pages;

      
        } ,


  },
});

export const {  setStats 
} = categorySlice.actions;
export default categorySlice.reducer;