// redux/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    doc: null,
    loading: false,
    error: null,
  },
  reducers: {
    setDoc(state, action) {
      state.doc = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setDoc, setLoading, setError } = profileSlice.actions;
export default profileSlice.reducer;