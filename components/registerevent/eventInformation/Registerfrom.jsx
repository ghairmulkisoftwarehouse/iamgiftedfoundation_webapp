'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validateRegisterEventForm } from "@/validations/registerEventValidations";
import InputName from '@/components/global/form/InputName';
import InputEmail from '@/components/global/form/InputEmail';
import toast from "react-hot-toast";
import {register_event} from '@/redux/actions/eventActions'
import ButtonClipLoader  from '@/components/global/buttonClipLoader/ButtonClipLoader'
import InputTextArea   from '@/components/global/form/InputextArea';
import { useRouter } from 'next/navigation';
const RegisterForm = ({eventId}) => {
      const router=useRouter();

  const dispatch=useDispatch();
  const { user } = useSelector((state) => state.auth); 
    const { createLoading } = useSelector((state) => state.event); 

 const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  notes: "",
  parentName: "",
  parentEmail: "",
  parentPhone: "",
  childName: "",
});

  const [errors, setErrors] = useState({});

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

    const validationErrors = validateRegisterEventForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

      if (!user) {
      toast.error("You must be logged in to register for this event.");
      return;
    }

    const payload = {
    firstName: formData.firstName,

    ...(formData.lastName && { lastName: formData.lastName }),
    ...(formData.email && { email: formData.email }),
    ...(formData.phone && { phone: formData.phone }),
    ...(formData.notes && { notes: formData.notes }),

    ...(formData.parentName && { parentName: formData.parentName }),
    ...(formData.parentEmail && { parentEmail: formData.parentEmail }),
    ...(formData.parentPhone && { parentPhone: formData.parentPhone }),
    ...(formData.childName && { childName: formData.childName }),
  };

    console.log("Form submitted:", payload);
        dispatch(register_event(eventId, payload, router));

  };

  return (
    <div className="w-full relative bg-[#F4F7F7]">
      <div className="bg-[#F4F7F7] flex flex-col gap-3 border border-black/10 rounded-[22px] px-6 pt-6 pb-4 xl:pb-1">
        
        {/* Header */}
        <div className="flex flex-col gap-1.5 w-full">
          <h2 className="font-semibold text-lg md:text-xl px-1 text-[#1C2229]">
            Register Now & Make a Difference!
          </h2>
          <p className="text-[#00000080] text-[13px] md:text-sm">
            Your information is used only for registration and safety.
          </p>
        </div>
{/* Form Fields */}

<InputName
  label="First Name *"
  value={formData.firstName}
  onChange={handleChange("firstName")}
  error={errors.firstName}
/>

<InputName
  label="Last Name"
  value={formData.lastName}
  onChange={handleChange("lastName")}
  error={errors.lastName}
/>

<InputEmail
  label="Email"
  value={formData.email}
  onChange={handleChange("email")}
  error={errors.email}
/>

<InputName
  label="Phone Number"
  value={formData.phone}
  onChange={handleChange("phone")}
  error={errors.phone}
/>

<InputName
  label="Child Name"
  value={formData.childName}
  onChange={handleChange("childName")}
  error={errors.childName}
/>

<InputName
  label="Parent Name"
  value={formData.parentName}
  onChange={handleChange("parentName")}
  error={errors.parentName}
/>

<InputEmail
  label="Parent Email"
  value={formData.parentEmail}
  onChange={handleChange("parentEmail")}
  error={errors.parentEmail}
/>

<InputName
  label="Parent Phone"
  value={formData.parentPhone}
  onChange={handleChange("parentPhone")}
  error={errors.parentPhone}
/>

<InputTextArea
  label="Notes"
  value={formData.notes}
  onChange={handleChange("notes")}
       rows={4}
  error={errors.notes}
/>

        {/* Buttons */}
        <div className="flex flex-row gap-2 items-center justify-end w-full pt-4  pb-3.5">
          <button
            type="button"
            className="bg-black/40 w-[140px] rounded-full text-white py-2 cursor-pointer text-sm sm:text-base"
           onClick={() =>
  setFormData({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    childName: "",
  })
}
                        disabled={createLoading}

          >
            Cancel
          </button>

               <button
            onClick={handleSubmit}
            disabled={createLoading}
            className={`btn-submit relative overflow-hidden w-[149px] ${
              createLoading
                ? "cursor-not-allowed bg-gray-200"
                : "bg-black cursor-pointer hover:bg-gray-200"
            }`}
          >
            <span className="btn-submit-hover bg-gray-200 group-hover:w-40 group-hover:h-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></span>
            <span
              className={`btn-submit-text relative z-10  flex items-center group-hover:text-black ${
                createLoading ? "text-black font-semibold" : "text-white font-medium"
              }`}
            >
{createLoading 
  ? <>Registering... <ButtonClipLoader size={14} color="#000000" /></> 
  : "Register"}            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
