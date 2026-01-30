// redux/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    docs: null,
    loading: false,
    error: null,
  },
  reducers: {
    setDocs(state, action) {
      state.docs = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setDocs, setLoading, setError } = profileSlice.actions;
export default profileSlice.reducer;