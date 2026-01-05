import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : 'app' ,
    initialState : {
      showLogoutPopup: false,
    } ,
    reducers : {
          setShowLogoutPopup: (state, action) => {
      state.showLogoutPopup = action.payload;
    },
    }
});

export const { setShowLogoutPopup } = appSlice.actions;
export default appSlice.reducer;