import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : 'app' ,
    initialState : {
      showLogoutPopup: false,
       showDeleteEventPopup: false,
    } ,
    reducers : {
          setShowLogoutPopup: (state, action) => {
      state.showLogoutPopup = action.payload;
    },
      setShowDeleteEventPopup: (state, action) => {
          state.showDeleteEventPopup = action.payload;

    },
    }
});

export const { setShowLogoutPopup,setShowDeleteEventPopup } = appSlice.actions;
export default appSlice.reducer;