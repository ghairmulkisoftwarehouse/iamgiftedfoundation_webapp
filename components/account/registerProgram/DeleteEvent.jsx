import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowDeleteEventPopup } from '@/redux/reducers/appSlice';
import PopupLayout from '@/components/layout/popup';
import ButtonClipLoader from '@/components/global/buttonClipLoader/ButtonClipLoader';
import { delete_Event } from "@/redux/actions/eventActions";
import toast from "react-hot-toast";
import { useQueryClient } from 'react-query';


const DeleteEvent = ({ eventId,setEventId }) => {
  const dispatch = useDispatch();
  const { deleteLoading } = useSelector((state) => state.registerEvent);
  const queryClient = useQueryClient();

  const handleCancel = () => {
    setEventId(null)
    dispatch(setShowDeleteEventPopup(false));
  };

  const handleDelete = async () => {
    if (!eventId) return;

    try {
      await dispatch(delete_Event(eventId)); 
          setEventId(null)
              queryClient.invalidateQueries(["my-register-event"]);
      dispatch(setShowDeleteEventPopup(false));
    } catch (err) {
      console.error("Delete failed:", err);
      toast.error(err?.message || "Failed to delete event. Please try again.");
    }
  };

  return (
    <PopupLayout setShowPopup={setShowDeleteEventPopup} redux={true}>
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold text-primary">Delete Event</h2>
        <p className="text-sm text-[#030F0CCC] text-center">
          Are you sure you want to delete this event? This action cannot be undone.
        </p>

        <div className="flex gap-4">
          {/* Cancel Button */}
          <button
            type="button"
            onClick={handleCancel}
            className="bg-black/40 w-[140px] rounded-full text-white py-2 cursor-pointer text-sm sm:text-base"
          >
            Cancel
          </button>

          {/* Delete Button */}
          <button
            type="button"
            onClick={handleDelete}
            disabled={deleteLoading}
            className="px-4 py-2 z-10 bg-red-500 cursor-pointer text-white rounded-full text-sm flex items-center justify-center gap-2 min-w-[120px]"
          >
            {deleteLoading ? (
              <div className="flex items-center gap-1">
                Deleting <ButtonClipLoader size={12} color="#ffffff" />
              </div>
            ) : (
              "Yes, Delete"
            )}
          </button>
        </div>
      </div>
    </PopupLayout>
  );
};

export default DeleteEvent;
