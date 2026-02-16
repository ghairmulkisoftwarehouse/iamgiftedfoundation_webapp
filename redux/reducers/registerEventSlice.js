import { createSlice } from '@reduxjs/toolkit';

const registerEventSlice = createSlice({
  name: 'register Event',
  initialState: {
      docs: [],
      page: 1,
      pages: 1,
      docsCount: 0,
       error: null,
           deleteLoading: false,

  },

  reducers: {
  setStats(state , action) {
            const { docs , docsCount , page , pages } = action.payload;
                  state.docs = docs;

            state.docsCount = docsCount;
            state.page = page;
            state.pages = pages;
      
        } ,
        setError(state, action) {
      state.error = action.payload;
    },
    
    setDeleteLoading(state, action) {
      state.deleteLoading = action.payload;
    },

  },
});

export const {  setStats ,setError,setDeleteLoading
} = registerEventSlice.actions;
export default registerEventSlice.reducer;