// redux/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {

    loading: false,
    error: null,
  
  },
  reducers: {
  
    setLoading(state, action) {
      state.loading = action.payload;
    },
   

    setError(state, action) {
      state.error = action.payload;
    },
    
  },
});

export const { setLoading, setError, } = profileSlice.actions;
export default profileSlice.reducer;