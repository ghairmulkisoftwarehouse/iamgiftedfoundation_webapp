'use client'
import { useState } from "react";


import { bison } from "@/components/fonts/fonts";
import InputName from '@/components/global/form/InputName';
import InputEmail from "@/components/global/form/InputEmail";
import InputPassword from '@/components/global/form/InputPassword';
import UserSvg from '@/assets/svg/UserSvg';
import EnvolpeSvg from '@/assets/svg/EnvolpeSvg';
import LockSvg from '@/assets/svg/LockSvg';
import FoundationSvg from '@/assets/svg/FoundationSvg';
import { validateResetPasswordForm } from "@/validations/resetPasswordValidation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {reset_Password} from '@/redux/actions/authActions';
import { useDispatch,useSelector } from "react-redux";
import ButtonClipLoader  from '@/components/global/buttonClipLoader/ButtonClipLoader'


const ResetPasswordForm = () => {
    const router = useRouter();
  const dispatch = useDispatch();
  const { loading, registerEmail, resetOtp } = useSelector((state) => state.auth);
   console.log( ' this is a resetOtp',resetOtp)

  const email = registerEmail || (typeof window !== "undefined" ? localStorage.getItem("verify_email") : null);
  const otpReset = resetOtp || (typeof window !== "undefined" ? localStorage.getItem("reset_otp") : null);

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error for the field as user types
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const handleSubmit = () => {
    if (!otpReset || !email) {
      toast.error("Invalid request. Please try again.");
      return;
    }

    const validationErrors = validateResetPasswordForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;
    const payload = {
      newPassword: formData.password,
      confirmPassword: formData.confirmPassword,
      email,
      otp: otpReset,
    };

    console.log(' this is payload',payload)
    dispatch(reset_Password(payload, router));
    setFormData({ password: "", confirmPassword: "" });
  };

  return (
    
     <div className="flex flex-col justify-center gap-1.5 w-full md:h-screen  px-3.5 sm:px-0">
    <div className="
  w-full sm:w-[80%] md:w-[70%] lg:w-3/4 xl:w-[80%] mx-auto
  px-6 pt-6 pb-6 lg:px-0 lg:pt-0 lg:pb-0
  rounded-[22px]

  shadow-2xl lg:shadow-none
  sm:border border-black/10 lg:border-0
">
   <Link href={'/'}>

        <FoundationSvg 
          className="w-auto h-auto md:w-[230px] md:h-[60px] block lg:hidden mx-auto mb-10 sm:mb-3.5  cursor-pointer" 
        />
            </Link>
        <h2 className={`text-black text-4xl sm:text-[46px] lg:text-[55px] ${bison.className}`}>
          Create New Password
        </h2>

        <p className="text-[#030F0CCC] font-medium text-sm lg:text-base">
Create your new password to login      
  </p>

        <div className="flex flex-col gap-4 mt-5">
       
          <InputPassword
            placeholder="Enter your password"
            icon={<LockSvg />}
            background="bg-white "
            value={formData.password}
            onChange={handleChange("password")}
            error={errors.password}
            border="border-[#B2BCC5]"
          />

          <InputPassword
            placeholder="Confirm your password"
            icon={<LockSvg />}
            background="bg-white "
            value={formData.confirmPassword}
            onChange={handleChange("confirmPassword")}
            error={errors.confirmPassword}
            border="border-[#B2BCC5] "
          />

       



      <button
  onClick={handleSubmit}
  disabled={loading}
  className={`btn-submit bg-black hover:bg-gray-200 w-full h-[50px] text-sm sm:text-[17px] relative overflow-hidden ${
    loading ? "cursor-not-allowed bg-gray-200" : "cursor-pointer"
  }`}
>
  {/* Hover effect */}
  <span className="btn-submit-hover bg-gray-200 group-hover:w-40 group-hover:h-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></span>

  {/* Button text or loader */}
  <span
    className={`btn-submit-text ${
      loading ? "text-black font-semibold" : "text-white"
    } group-hover:text-black relative z-10 font-medium flex items-center justify-center gap-2`}
  >
    {loading ? (
      <>
        Resetting... <ButtonClipLoader size={14} color="#000000" />
      </>
    ) : (
      "Reset Password"
    )}
  </span>
</button>


       

        
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
