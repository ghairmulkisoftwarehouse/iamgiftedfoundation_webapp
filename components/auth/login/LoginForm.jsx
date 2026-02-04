'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { bison } from "@/components/fonts/fonts";
import InputEmail from '@/components/global/form/InputEmail';
import InputPassword from '@/components/global/form/InputPassword';
import EnvolpeSvg from '@/assets/svg/EnvolpeSvg';
import LockSvg from '@/assets/svg/LockSvg';
import GoogleSvg from '@/assets/svg/GoogleSvg';
import FoundationSvg from '@/assets/svg/FoundationSvg';
import NewGiftedFoundationlogoSvg  from '@/assets/svg/NewGiftedFoundationlogoSvg';
import { useDispatch,useSelector } from "react-redux";

import { validateLoginForm } from "@/validations/loginValidation";
import  {login}  from '@/redux/actions/authActions';
import ButtonClipLoader   from '@/components/global/buttonClipLoader/ButtonClipLoader';

import Link from "next/link";

const LoginForm = () => {
      const router = useRouter();
      const dispatch=useDispatch();
 const { loading, error } = useSelector((state) => state.auth);

     const [formData, setFormData] = useState({
  
        email: "",
         password: "",
      
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


      const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateLoginForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    const payload = {
      identifier: formData.email,
      password: formData.password,
    };

    dispatch(login(payload, router));

    setFormData({ email: "", password: "" });
  };

  return (
    <div className="flex flex-col justify-center gap-1.5 w-full md:h-screen  px-3.5 sm:px-0">

      <div className="w-full sm:w-[80%] md:w-[70%] px-6 pt-6 pb-6 lg:pb-0 lg:px-0 lg:pt-0 border-0 sm:border border-black/10 lg:border-0 rounded-[22px] lg:w-3/4 xl:w-[80%] mx-auto">




            <Link href={'/'}>

        <FoundationSvg 
          className="w-auto h-auto md:w-[230px] md:h-[60px] block lg:hidden mx-auto mb-10 sm:mb-3.5  cursor-pointer" 
        />
            </Link>


        <h2 className={`text-black text-4xl sm:text-[46px] lg:text-[55px] ${bison.className}`}>
          Sign In
        </h2>

        <p className="text-[#030F0CCC] font-medium text-sm lg:text-base">
          Sign in to manage your donations and stay connected with Gifted Foundation.
        </p> 

        <div className="flex flex-col gap-4 mt-5">

          <InputEmail
            placeholder="Enter your email"
            background="bg-white  "
            border="border-[#B2BCC5]  "
            value={formData.email}
        onChange={handleChange("email")}
        error={errors.email}

            icon={<EnvolpeSvg />}
          />

          <InputPassword
            placeholder="Enter your password"
            icon={<LockSvg />}
            background="bg-white  "
                 value={formData.password}
        onChange={handleChange("password")}
        error={errors.password}

                border="border-[#B2BCC5]  l"
          />

          <div className="w-full flex justify-end">
           <Link href="/auth/forgotpassword">
            <p className="text-xs sm:text-sm text-[#030F0CCC] font-semibold cursor-pointer">
              Forgot Password?
            </p>
            </Link>
          </div>

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
        Logging in <ButtonClipLoader size={10} color="#000000" />
      </>
    ) : (
      "Login"
    )}
  </span>
</button>

          <div className="flex items-center w-full my-1">
            <div className="flex-grow border-t border-dashed border-[#A1A8B0]"></div>
            <span className="flex-shrink mx-4 text-[#A1A8B0] text-sm font-medium">OR</span>
            <div className="flex-grow border-t border-dashed border-[#A1A8B0]"></div>
          </div>

          <button className="w-full h-[50px] rounded-full bg-white flex items-center gap-4 justify-center border border-[#E5E7EB] text-sm sm:text-[17px] transition-all duration-300 ease-in-out hover:bg-gray-50 hover:shadow-md active:scale-[0.98] cursor-pointer">
            <GoogleSvg />
            <span className="text-[#1F2937] font-medium">Sign in with Google</span>
          </button>

                            <div className="flex justify-center text-xs sm:text-sm">
                    <p className="text-[#030F0CCC]">
                        Don’t have an account?{" "}
                        <Link href="/auth/register">
                        <span className="font-semibold cursor-pointer">Sign Up</span>
                        </Link>
                    </p>
                    </div>
        </div>
      </div>

    </div>
  );
};

export default LoginForm;
