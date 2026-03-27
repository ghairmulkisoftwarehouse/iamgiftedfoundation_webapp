'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validateBuyTicketForm } from "@/validations/buyTicketValidations";
import InputName from '@/components/global/form/InputName';
import InputEmail from '@/components/global/form/InputEmail';
import toast from "react-hot-toast";
import {initiateTicket} from '@/redux/actions/donateActions'
import {register_event} from '@/redux/actions/eventActions'
import ButtonClipLoader  from '@/components/global/buttonClipLoader/ButtonClipLoader'
import InputTextArea   from '@/components/global/form/InputextArea';
import { useRouter } from 'next/navigation';
import { webAppBaseURL } from "@/config/api";
import moment from 'moment';

const RegisterForm = ({eventId,selectedTicket,event }) => {
      const router=useRouter();
      // console.log(' this a event',event)

  const dispatch=useDispatch();
  const { user } = useSelector((state) => state.auth); 
  const { createLoading: donateLoading } = useSelector((state) => state.donate);
const { createLoading: eventLoading } = useSelector((state) => state.event);

const createLoading = donateLoading || eventLoading;


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
  quantity:'',
});
    const now = moment();

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

const isTicketSaleOpen =
  selectedTicket?.saleStartDate &&
  selectedTicket?.saleEndDate &&
  now.isBetween(
    moment(selectedTicket.saleStartDate),
    moment(selectedTicket.saleEndDate),
    null,
    "[]"
  );

const isTicketSaleClosed =
  selectedTicket?.saleEndDate &&
  now.isAfter(moment(selectedTicket.saleEndDate));

const isTicketSaleUpcoming =
  selectedTicket?.saleStartDate &&
  now.isBefore(moment(selectedTicket.saleStartDate));

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

  const isDisabled =
  createLoading ||
  isRegistrationClosed ||
  isRegistrationUpcoming ||
  (selectedTicket && !isTicketSaleOpen);


const isFreeTicket = selectedTicket && Number(selectedTicket.price) === 0;
const handleSubmit = async () => {
  const validationErrors = validateBuyTicketForm(formData);
  setErrors(validationErrors);
  if (Object.keys(validationErrors).length > 0) return;

  if (!user) {
    toast.error("You must be logged in to register for this event.");
    return;
  }

  const basePayload = {
    firstName: formData.firstName,

    ...(formData.lastName && { lastName: formData.lastName }),
    ...(formData.email && { email: formData.email }),
    ...(formData.phone && { phone: formData.phone }),
    ...(formData.notes && { notes: formData.notes }),

    ...(formData.parentName && { parentName: formData.parentName }),
    ...(formData.parentEmail && { parentEmail: formData.parentEmail }),
    ...(formData.parentPhone && { parentPhone: formData.parentPhone }),
    ...(formData.childName && { childName: formData.childName }),

    ...(formData.quantity && { quantity: formData.quantity }),

    ...(selectedTicket && { ticketId: selectedTicket._id }),
    ...(selectedTicket && { ticketTitle: selectedTicket.title }),
  };

  console.log("Base Payload:", basePayload);

  if (selectedTicket) {
    if (Number(selectedTicket.price) === 0) {
      dispatch(register_event(eventId, basePayload, router));
    } else {
      const paymentPayload = {
        ...basePayload,
        successURL: `${webAppBaseURL}/success`,
        cancelURL: `${webAppBaseURL}/cancel`,
      };

      dispatch(initiateTicket(eventId, paymentPayload, router));
    }
  } else {
    dispatch(register_event(eventId, basePayload, router));
  }
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


{selectedTicket && (
  <div className=" rounded-md mb-4  flex flex-col gap-1s  bg-transparent">
    <h4 className="font-semibold text-lg md:text-xl px-1 text-[#1C2229]">{selectedTicket.title}</h4>
   
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




{selectedTicket &&(
<InputName
  label="Quantity"
  value={formData.quantity}
  onChange={handleChange("quantity")}
  error={errors.quantity}
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
  email: "",
  phone: "",
  notes: "",
  parentName: "",
  parentEmail: "",
  parentPhone: "",
  childName: "",
  quantity:'',
  })
}
                        disabled={createLoading}

          >
            Cancel
          </button>

            <button
  onClick={handleSubmit}
  disabled={isDisabled}
  className={`btn-submit relative overflow-hidden w-fit px-7 rounded-full flex justify-center items-center
    ${
      isDisabled
        ? "cursor-not-allowed bg-gray-900"
        : "bg-black cursor-pointer hover:bg-gray-800"
    }
  `}
>
  {/* Hover effect */}
  <span className="btn-submit-hover bg-gray-200 absolute top-1/2 left-1/2 w-0 h-0 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out"></span>

  {/* Text / Loader */}
  <span
    className={`btn-submit-text relative z-10 flex items-center justify-center gap-2
      ${createLoading ? "text-black font-semibold" : "text-white font-medium"}
    `}
  >
    {createLoading ? (
      <ButtonClipLoader size={14} color="#ffffff" />
    ) : isRegistrationClosed ? (
      "Registration Closed"
    ) : isRegistrationUpcoming ? (
      "Registration Not Started"
    ) : selectedTicket && isTicketSaleClosed ? (
      "Ticket Sale Closed"
    ) : selectedTicket && isTicketSaleUpcoming ? (
      "Ticket Sale Not Started"
    ) : (
      event?.primaryCTA || "Register"
    )}
  </span>
</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
