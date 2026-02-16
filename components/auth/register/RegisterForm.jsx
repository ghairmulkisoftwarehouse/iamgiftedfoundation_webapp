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
import { validateRegisterForm } from "@/validations/registerValidation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch,useSelector } from "react-redux";

import  {registerUser}  from '@/redux/actions/authActions';
import ButtonClipLoader   from '@/components/global/buttonClipLoader/ButtonClipLoader';

const options = ["Donor", "Participants/Parents", "Volunteer"];

const RegisterForm = () => {
          const router = useRouter();
           const { loading,  } = useSelector((state) => state.auth);
      const dispatch=useDispatch();
    
  const [selected, setSelected] = useState("Donor"); 
  const [acceptTerms, setAcceptTerms] = useState(false);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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


  const mapUserType = (selected) => {
  switch (selected) {
    case "Donor":
      return "donor";
    case "Participants/Parents":
      return "participant";
    case "Volunteer":
      return "volunteer";
    default:
      return "";
  }
};

  const handleUserType = (value) => {
    setSelected(value);

    if (errors.userType) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated.userType;
        return updated;
      });
    }
  };

  // Handle accept terms checkbox
  const handleAcceptTerms = (checked) => {
    setAcceptTerms(checked);

    if (errors.acceptTerms) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated.acceptTerms;
        return updated;
      });
    }
  };

 const handleSubmit = () => {
  const dataToValidate = {
    ...formData,
    userType: selected,
    acceptTerms,
  };

  // Validate form
  const validationErrors = validateRegisterForm(dataToValidate);
  setErrors(validationErrors);
  if (Object.keys(validationErrors).length > 0) return;

  // Map selected to backend userType
  const userType = mapUserType(selected);

  // Prepare payload
  const payload = {
    username: formData.name,
    email: formData.email,
    password: formData.password,
    confirmPassword: formData.confirmPassword,
  };

  // console.log("Submitting payload:", payload, "userType:", userType);

  // Dispatch the registerUser action
  dispatch(registerUser(userType, payload, router));

  // Reset form
  // setFormData({ name: "", email: "", password: "", confirmPassword: "" });
  // setSelected("Donor");
  // setAcceptTerms(false);
};


  return (
    <div className="flex flex-col justify-center gap-1.5 w-full    pb-5 px-3.5 sm:px-0">
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
          Sign Up
        </h2>

        <p className="text-[#030F0CCC] font-medium text-sm lg:text-base">
          Sign up to create your account, manage your donations, and stay connected with Gifted Foundation.
        </p>

        <div className="flex flex-col gap-4 mt-5">
          <InputName
            placeholder="Enter your username"
            background="bg-white "
            border="border-[#B2BCC5] "
            value={formData.name}
            onChange={handleChange("name")}
            error={errors.name}
            icon={<UserSvg />}
          />

          <InputEmail
            placeholder="Enter your email"
            background="bg-white "
            border="border-[#B2BCC5] "
            value={formData.email}
            onChange={handleChange("email")}
            error={errors.email}
            icon={<EnvolpeSvg />}
          />

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

          <div className="flex flex-wrap gap-2.5">
            {options.map((value) => (
              <button
                key={value}
                onClick={() => handleUserType(value)}
                className={`border px-7 py-3 rounded-full text-sm sm:text-[15px] transition-colors duration-500 cursor-pointer
                
                border-black/20
                 ${
                  selected === value ? "bg-black text-white " : "bg-white text-black "
                }`}
              >
                {value}
              </button>
            ))}
          </div>
          {errors.userType && <p className="text-xs xs:text-[13px] text-red-500">{errors.userType}</p>}

          {/* Accept Terms */}
         {/* Accept Terms */}
<label className="flex items-center gap-2 cursor-pointer text-sm sm:text-[15px]">
  <input
    type="radio"
    checked={acceptTerms}
    onChange={(e) => handleAcceptTerms(e.target.checked)}
    className="accent-black w-5 h-5 rounded-full mt-1" 
  />
  <div className="text-[#030F0CCC] text-xs sm:text-sm font-medium">
    I agree to the IAMGIFTED FOUNDATION{" "}
    <span style={{ color: "#D8BFD8", fontWeight: "600" }}>Terms of Service</span> and{" "}
    <span style={{ color: "#D8BFD8", fontWeight: "600" }}>Privacy Policy</span>
  </div>
</label>

          {errors.acceptTerms && <p className="text-xs xs:text-[13px] text-red-500">{errors.acceptTerms}</p>}

          {/* Submit Button */}


                <button
            onClick={handleSubmit}
            disabled={loading} 
            className={`btn-submit bg-black hover:bg-gray-200 w-full group h-[50px] text-sm sm:text-[17px] relative overflow-hidden ${
              loading ? "cursor-not-allowed bg-gray-200 " : "cursor-pointer"
            }`}
          >
            {/* Hover effect */}
            <span className="btn-submit-hover bg-gray-200 group-hover:w-40 group-hover:h-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></span>
          
            {/* Button text or loader */}
            <span className={`btn-submit-text  ${loading ? ' text-black font-semibold' :'text-white'}  group-hover:text-black relative z-10 font-medium flex items-center justify-center gap-2`}>
             {loading ? (
      <>
        Signing Up <ButtonClipLoader size={14} color="#000000" />
      </>
    ) : (
      "Sign Up"
    )}
            </span>
          </button>
          
          {/* <button
            onClick={handleSubmit}
            className="btn-submit bg-black hover:bg-gray-200 w-full group cursor-pointer h-[50px] text-sm sm:text-[17px] relative overflow-hidden"
          >
            <span className="btn-submit-hover bg-gray-200 group-hover:w-40 group-hover:h-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></span>
            <span className="btn-submit-text text-white group-hover:text-black relative z-10 font-medium">
              
            </span>
          </button> */}

          <div className="flex justify-center text-xs sm:text-sm mt-2">
            <p className="text-[#030F0CCC]">
              Have an account?{" "}
              <Link href="/auth/login">
                <span className="font-semibold cursor-pointer">Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
