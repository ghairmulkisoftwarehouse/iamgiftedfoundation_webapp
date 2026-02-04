// redux/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    registeringEmail:'',
    resendingLoading:false,
    loading: false,
    error: null,
     type:'',
     resetOtp:'',
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
      setRegisterEmail(state, action) {
      state.registeringEmail = action.payload;
    },
     setResetOtp(state, action) {
      state.resetOtp = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
     setType(state, action) {
      state.type = action.payload;
    },
     setResendingLoading(state, action) {
      state.resendingLoading = action.payload;
    },
    

    setError(state, action) {
      state.error = action.payload;
    },
    
  },
});

export const { setUser, setLoading, setError,setRegisterEmail,setResendingLoading,setType,setResetOtp } = authSlice.actions;
export default authSlice.reducer;
