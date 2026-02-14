import { createSlice } from '@reduxjs/toolkit';

const eventSlice = createSlice({
  name: 'event',
  initialState: {
      docs: [],
      page: 1,
      pages: 1,
      docsCount: 0,
   createLoading:false,
       error: null,
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
          setCreateLoading(state, action) {
      state.createLoading = action.payload;
    },

        setError(state, action) {
      state.error = action.payload;
    },

  },
});

export const {  setStats ,setCreateLoading,setError
} = eventSlice.actions;
export default eventSlice.reducer;