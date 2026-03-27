'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validateSponsorshipTileForm } from "@/validations/sponsorshipTilesValidation";
import InputName from '@/components/global/form/InputName';
import InputEmail from '@/components/global/form/InputEmail';
import toast from "react-hot-toast";
import {initiateSponsorship} from '@/redux/actions/donateActions'
import ButtonClipLoader  from '@/components/global/buttonClipLoader/ButtonClipLoader'
import InputTextArea   from '@/components/global/form/InputextArea';
import { useRouter } from 'next/navigation';
import moment from "moment";

const RegisterForm = ({eventId,selectedSponsorship,event }) => {
      const router=useRouter();

      // console.log(' this is a selectedSponsorship',selectedSponsorship)

  const dispatch=useDispatch();
  const { user } = useSelector((state) => state.auth); 
    const { createLoading } = useSelector((state) => state.donate); 
const now = moment();

 const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  phone: "",
  notes: "",
  amount:'',
  sponsorEmail: "",
  companyName:'',
});




  const [errors, setErrors] = useState({});
 const isRegistrationOpen =
  event?.registrationStartDate &&
  event?.registrationEndDate &&
  now.isBetween(
    moment(event.registrationStartDate),
    moment(event.registrationEndDate),
    null,
    "[]"
  );

const isRegistrationClosed =
  event?.registrationEndDate &&
  now.isAfter(moment(event.registrationEndDate));

const isRegistrationUpcoming =
  event?.registrationStartDate &&
  now.isBefore(moment(event.registrationStartDate));


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

    const validationErrors = validateSponsorshipTileForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

      if (!user) {
      toast.error("You must be logged in to register for this event.");
      return;
    }

    const payload = {
    firstName: formData.firstName,
    eventId:eventId,
    ...(formData.lastName && { lastName: formData.lastName }),
    ...(formData.sponsorEmail && { sponsorEmail: formData.sponsorEmail }),
    ...(formData.phone && { phone: formData.phone }),
    ...(formData.notes && { notes: formData.notes }),
        ...(formData.amount !== undefined && formData.amount !== "" && {
  amount: Number(formData.amount),
}),
            ...(formData.companyName && { companyName: formData.companyName }),
    ...(selectedSponsorship && { sponsorshipTileId: selectedSponsorship?._id }),

  };

    console.log("Form submitted:", payload);
        dispatch(initiateSponsorship(payload, router));

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


{selectedSponsorship && (
  <div className=" rounded-md mb-4  flex flex-col gap-1s  bg-transparent">
    <h4 className="font-semibold text-lg md:text-xl px-1 text-[#1C2229]">{selectedSponsorship.title}</h4>
   
  </div>
)}

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
  label="Sponsor Email"
  value={formData.sponsorEmail}
  onChange={handleChange("sponsorEmail")}
  error={errors.sponsorEmail}
/>

<InputName
  label="Phone Number"
  value={formData.phone}
  onChange={handleChange("phone")}
  error={errors.phone}
/>

<InputName
  label="Company Name"
  value={formData.companyName}
  onChange={handleChange("companyName")}
  error={errors.companyName}
/>

<InputTextArea
  label="Notes"
  value={formData.notes}
  onChange={handleChange("notes")}
       rows={4}
  error={errors.notes}
/>




{selectedSponsorship &&(
<InputName
  label="Amount"
  value={formData.amount}
  onChange={handleChange("amount")}
  error={errors.amount}
/>
)}
        {/* Buttons */}
        <div className="flex flex-row gap-2 items-center justify-end w-full pt-4  pb-3.5">
          <button
            type="button"
            className="bg-black/40 w-[140px] rounded-full text-white py-2 cursor-pointer text-sm sm:text-base"
           onClick={() =>
  setFormData({
   firstName: "",
  lastName: "",
  phone: "",
  notes: "",
  amount:'',
  sponsorEmail: "",
  companyName:'',
  })
}
                        disabled={createLoading}

          >
            Cancel
          </button>

            <button
              onClick={handleSubmit}
              disabled={createLoading || isRegistrationClosed || isRegistrationUpcoming}
              className={`btn-submit relative overflow-hidden   w-fit px-7 rounded-full flex justify-center items-center
                ${
                  createLoading || isRegistrationClosed || isRegistrationUpcoming
                    ? "cursor-not-allowed bg-gray-900"
                    : "bg-black cursor-pointer hover:bg-gray-800"
                }
              `}
            >
              <span className="btn-submit-hover bg-gray-200 absolute top-1/2 left-1/2 w-0 h-0 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out"></span>
            
              <span className={`btn-submit-text relative z-10 flex items-center justify-center gap-2
                ${createLoading ? "text-black font-semibold" : "text-white font-medium"}
              `}>
                {createLoading ? (
                  <ButtonClipLoader size={14} color="#ffffff" />
                ) : isRegistrationClosed ? (
                  "Registration Closed"
                ) : isRegistrationUpcoming ? (
                  "Registration Not Started"
                ) : (
                  selectedSponsorship?.ctaLabel || event?.primaryCTA || "Register"
                )}
              </span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
