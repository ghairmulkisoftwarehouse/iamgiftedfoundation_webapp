'use client'
import { useEffect,useState} from 'react';
import {ContactItems} from '@/constants/ContactConstants';
import { validateContactForm } from "@/validations/contactValidation";
import  InputName  from '@/components/global/form/InputName';
import  InputEmail  from '@/components/global/form/InputEmail';
import InputPassword from '@/components/global/form/InputPassword';
// import InputTextArea   from '@/components/global/form/InputextArea';
import GoogleSvg from '@/assets/svg/GoogleSvg';
import ImageUpload   from '@/components/global/form/ImageUpload';
import Profileimg from '@/assets/images/kevintaran.png';
  

const EditProfilefrom = () => {

    const [imagePreview, setImagePreview] = useState(Profileimg); 


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone :'',
    password:"",
   
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
    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // Payload to send
    const payload = { ...formData };
    console.log("Submitting:", payload);

    // Reset form (optional)
    setFormData({ name: "", email: "", phone: "", password: "" });
    setImagePreview(Profileimg); // reset image if needed
  };

  const handleCancel = () => {
    setFormData({ name: "", email: "", phone: "", password: "" });
    setImagePreview(null);
    setErrors({});
  };
  return (
      <div className="  w-full relative bg-white  pb-5  pt-4      py-3.5  px-3.5 rounded-[15px]">
       
             <p className="text-sm   text-black font-semibold md:text-base  lg:text-lg pt-3.5">
    Update your profile information
  </p>


          <div className="grid  grid-cols-1 md:grid-cols-2  w-full  gap-3 relative z-5  ">
         <div className=' md:col-span-2'>
           <ImageUpload
               label="Profile Image"

               imagePreview={imagePreview} 
               setImagePreview={setImagePreview}
            />

         </div>
        
      <InputName
        label="Name"
        value={formData.name}
        onChange={handleChange("name")}
        error={errors.name}
      />
      <InputEmail
        label="Email"
        value={formData.email}
        onChange={handleChange("email")}
        error={errors.email}
      />

                <InputName label="Phone Number" value={formData.phoneNumber} onChange={handleChange("phoneNumber")} error={errors.phoneNumber} />
                <InputPassword  label="Password" value={formData.password} onChange={handleChange("password")} error={errors.password} />


                

    

    
    </div>
      <div className="flex flex-row gap-2 items-center justify-end w-full pt-4 ">
        <button
          type="button"
          className="bg-black/40 w-[140px] rounded-full text-white py-2 cursor-pointer
           text-sm sm:text-base 
          "
        

          onClick={() => handleCancel()}
        >

        
          Cancel
        </button>



   <button
     onClick={handleSubmit}
    className="btn-submit bg-black hover:bg-gray-200  w-[149px] group cursor-pointer relative overflow-hidden">
    {/* Expanding circle */}
    <span className="btn-submit-hover bg-gray-200 group-hover:w-40 group-hover:h-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></span>

    {/* Button text */}
    <span className="btn-submit-text text-white group-hover:text-black relative z-10  font-medium">
      Update
    </span>
  </button>

      
      </div>



     
      
    
    </div>
  )
}

export default EditProfilefrom