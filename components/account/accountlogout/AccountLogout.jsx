import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowLogoutPopup } from '@/redux/reducers/appSlice';
import PopupLayout from '@/components/layout/popup';
import { useRouter } from 'next/navigation';


const AccountLogout = () => {
 

  const router = useRouter();
  const dispatch = useDispatch();




  const handleLogout = () => {

    dispatch(setShowLogoutPopup(false));
    router.push("/auth/login")
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
            onClick={handleCancel}
            className="px-4 py-2 bg-lightmist cursor-pointer text-primary rounded-[6px] text-sm"
          >
            Cancel
          </button>
            <button
            onClick={handleLogout}
            className="px-4 py-2 z-10 bg-red-600 cursor-pointer text-white rounded-[6px] text-sm flex items-center justify-center gap-2 min-w-[120px]"
          >
          
              Yes, Log Out

          </button>

        </div>
      </div>
    </PopupLayout>
  );
};

export default AccountLogout;
