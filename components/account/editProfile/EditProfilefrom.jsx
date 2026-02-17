'use client'
import { useEffect, useState } from 'react';
import { validateEditProfileForm } from "@/validations/editProfileValidation";
import InputName from '@/components/global/form/InputName';
import InputEmail from '@/components/global/form/InputEmail';
import InputPassword from '@/components/global/form/InputPassword';
import ImageUpload from '@/components/global/form/ImageUpload';
import Profileimg from '@/assets/images/img2.jpg';
import {useDispatch, useSelector } from 'react-redux';
import devLog from '@/utils/logsHelper';
import {updateProfile,updateImageProfile} from '@/redux/actions/profileActions';
import ButtonClipLoader from '@/components/global/buttonClipLoader/ButtonClipLoader';
import { useQueryClient } from 'react-query';
import toast from "react-hot-toast";
import { convertImageUrlToBase64 } from '@/utils/convertImageUrlToBase64';
import { baseURL } from '@/config/api';
import { getTokenCookie } from "@/utils/authCookies";



const EditProfilefrom = () => {
   const { user } = useSelector((state) => state.auth);
   
  const { loading } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  

const [imagePreview, setImagePreview] = useState(Profileimg);
const [initialImage, setInitialImage] = useState(null);

  

  
useEffect(() => {
  const initializeImage = async () => {
    const imageUrl = user?.doc?.image?.relativeAddress;
    if (!imageUrl) return;

    const fullImageUrl = imageUrl.startsWith("http")
      ? imageUrl
      : `${baseURL}/${imageUrl}`;

    const base64Image = await convertImageUrlToBase64(fullImageUrl);

    if (base64Image) {
      setImagePreview(base64Image);
      setInitialImage(base64Image); 
    }
  };

  initializeImage();
}, [user]);


  // devLog('imagePreview',imagePreview?.blurDataURL);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  // Sync formData when user data loads
  useEffect(() => {
    if (user) {
      setFormData({
        name:user?.profile?.fullName || user?.doc?.username  || '' ,
        email: user?.doc?.email || '',
        phone: user?.doc?.phone || '',
        password: '',
      });
  
    }
  }, [user]);

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

 const handleSubmit = async () => {
  const validationErrors = validateEditProfileForm(formData);
  setErrors(validationErrors);
  if (Object.keys(validationErrors).length > 0) return;

  const payload = {};
  if (formData.name?.trim()) payload.fullName = formData.name.trim();
  if (formData.phone?.trim()) payload.phone = formData.phone.trim();

  // devLog('Payload to send:', payload);

  try {
    if (Object.keys(payload).length > 0) {
      await dispatch(updateProfile(payload));
    }

  

const isImageChanged =
  imagePreview &&
  imagePreview !== Profileimg &&
  imagePreview !== initialImage;

if (isImageChanged) {
  const imagePayload = {
    imageDataURI: imagePreview,
  };

  await dispatch(updateImageProfile(imagePayload));
}

    queryClient.invalidateQueries(['my-user-profile']);

    // Reset only password
    setFormData((prev) => ({ ...prev, password: '' }));
  } catch (err) {
    toast.error('Failed to update profile');
  }
};


  const handleCancel = () => {
    setFormData({
      name:  user?.profile?.fullName || user?.doc?.username || '',
      email: user?.email || '',
      phone: user?.phone || '',
      password: '',
    });
    setImagePreview(Profileimg);
    setErrors({});
  };
  return (
    <div className="w-full relative bg-white pb-5 pt-4 py-3.5 px-3.5 rounded-[15px]">
      <p className="text-sm text-black font-semibold md:text-base lg:text-lg pt-3.5">
        Update your profile information
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 relative z-5">
        {/* Profile Image */}
        <div className="md:col-span-2">
          <ImageUpload
            label="Profile Image"
            imagePreview={imagePreview}
            setImagePreview={setImagePreview}
          />
        </div>

        {/* Name */}
        <InputName
          label="Name"
          value={formData.name}
          onChange={handleChange("name")}
          error={errors.name}
        />

        {/* Email (readonly) */}
        <InputEmail
          label="Email"
          value={formData.email}
          onChange={handleChange("email")}
          error={errors.email}
          readonly={true}
        />

        {/* Phone */}
        <InputName
          label="Phone Number"
          value={formData.phone}
          onChange={handleChange("phone")}
          error={errors.phone}
        />

        {/* Password */}
        <InputPassword
          label="Password"
          value={formData.password}
          onChange={handleChange("password")}
          error={errors.password}
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-row gap-2 items-center justify-end w-full pt-4">
        <button
          type="button"
          className="bg-black/40 w-[140px] rounded-full text-white py-2 cursor-pointer text-sm sm:text-base"
          onClick={handleCancel}
        >
          Cancel
        </button>


   <button
          onClick={handleSubmit}
            disabled={loading} 
className={`btn-submit bg-black hover:bg-gray-200  w-[149px] group py-2 text-sm sm:text-base relative overflow-hidden ${
    loading ? "cursor-not-allowed bg-gray-200 " : "cursor-pointer"
  }`}        >
          <span className="btn-submit-hover bg-gray-200 group-hover:w-40 group-hover:h-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></span>
            <span className={`btn-submit-text  ${loading ? ' text-black font-semibold' :'text-white'}  group-hover:text-black relative z-10 font-medium flex items-center justify-center gap-2`}>
    {loading ? (
      <>
          Updating.. <ButtonClipLoader size={10} color="#000000" />
      </>
    ) : (
      "Update"
    )}
  </span>
        </button>
      </div>
    </div>
  );
};

export default EditProfilefrom;
