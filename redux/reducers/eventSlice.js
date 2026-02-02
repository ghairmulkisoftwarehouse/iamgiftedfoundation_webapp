import { createSlice } from '@reduxjs/toolkit';

const eventSlice = createSlice({
  name: 'event',
  initialState: {
      docs: [],
      page: 1,
      pages: 1,
      docsCount: 0,
  },

  reducers: {
  setStats(state , action) {
            const { docs , docsCount , page , pages } = action.payload;
                if (page === 1) {
                  state.docs = docs;
                } else {
                  state.docs = [...state.docs, ...docs];
                }
            state.docsCount = docsCount;
            state.page = page;
            state.pages = pages;

      
        } ,


  },
});

export const {  setStats 
} = eventSlice.actions;
export default eventSlice.reducer;