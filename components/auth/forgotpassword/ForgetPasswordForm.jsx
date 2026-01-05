'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { bison } from "@/components/fonts/fonts";
import InputEmail from '@/components/global/form/InputEmail';
// import InputPassword from '@/components/global/form/InputPassword';
import EnvolpeSvg from '@/assets/svg/EnvolpeSvg';
// import LockSvg from '@/assets/svg/LockSvg';
// import GoogleSvg from '@/assets/svg/GoogleSvg';
import FoundationSvg from '@/assets/svg/FoundationSvg';
import { validateForgetPasswordForm } from "@/validations/forgetPasswordValidation";
import Link from "next/link";

const ForgetPasswordForm = () => {
      const router = useRouter();

     const [formData, setFormData] = useState({
  
        email: "",
    
      
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
        const validationErrors = validateForgetPasswordForm(formData);
        setErrors(validationErrors);
      
        if (Object.keys(validationErrors).length > 0) return;
      
       
        const payload = {
          email: formData.email,
        };
      
        
        console.log("Form submitted:", payload);
      
          router.push("/auth/verify-otp");

        setFormData({ email: "",   });
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
         Forgot Your Password?
        </h2>

        <p className="text-[#030F0CCC] font-medium text-sm lg:text-base">
            Enter your email, we will send you  confirmation code.
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

       

      

          <button
            onClick={handleSubmit}
           className="btn-submit bg-black hover:bg-gray-200 w-full group cursor-pointer h-[50px] text-sm sm:text-[17px] relative overflow-hidden">
            <span className="btn-submit-hover bg-gray-200 group-hover:w-40 group-hover:h-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></span>
            <span className="btn-submit-text text-white group-hover:text-black relative z-10 font-medium">
              Reset Password
            </span>
          </button>

         
        </div>
      </div>

    </div>
  );
};

export default ForgetPasswordForm;
