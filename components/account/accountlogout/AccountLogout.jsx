import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowLogoutPopup } from '@/redux/reducers/appSlice';
import PopupLayout from '@/components/layout/popup';
import { useRouter } from 'next/navigation';
 import ButtonClipLoader   from '@/components/global/buttonClipLoader/ButtonClipLoader';

import { logout } from "@/redux/actions/authActions";
import toast from "react-hot-toast";

const AccountLogout = () => {
 

  const router = useRouter();
  const dispatch = useDispatch();


  const { loading } = useSelector((state) => state.auth);


 
 const handleLogout = async () => {
  try {
    await dispatch(logout(router));
       dispatch(setShowLogoutPopup(false));
  } catch (err) {
    console.error("Logout failed:", err);
     toast.error(err?.message || "Logout failed. Please try again.");
  }
};



  const handleCancel = () => {
    dispatch(setShowLogoutPopup(false));
  };

  return (
    <PopupLayout setShowPopup={setShowLogoutPopup} redux={true}>
      <div className="flex flex-col items-center gap-4 ">
        <h2 className="text-lg font-semibold text-primary">Log Out</h2>
        <p className="text-sm text-[#030F0CCC] text-center">
          Are you sure you want to log out? You’ll   need to sign in again to access your account.
        </p>
        <div className="flex gap-4">
        
         <button
          type="button"
              onClick={handleCancel}
          className="bg-black/40 w-[140px] rounded-full text-white py-2 cursor-pointer
           text-sm sm:text-base 
          "
         >
            Cancel
          </button>
            <button
            onClick={handleLogout}
                  disabled={loading} 

            className="px-4 py-2 z-10 bg-red-500  cursor-pointer text-white rounded-full text-sm flex items-center justify-center gap-2 min-w-[120px]"
          >
          
           {loading ? (
                <div className=" flex  items-center gap-1">
                  Logging Out <ButtonClipLoader size={12} color="#ffffff" />
                </div>
              ) : (
                " Yes, Log Out"
              )}
             

          </button>

        </div>
      </div>
    </PopupLayout>
  );
};

export default AccountLogout;
