'use client'
import { useEffect,useState} from 'react';
import {ContactItems} from '@/constants/ContactConstants';
import { validateContactForm } from "@/validations/contactValidation";
import  InputName  from '@/components/global/form/InputName';
import  InputEmail  from '@/components/global/form/InputEmail';
import InputTextArea   from '@/components/global/form/InputextArea';


const Contactfrom = () => {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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

  




 const [numBoxes, setNumBoxes] = useState(25);
       useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 640) {
      setNumBoxes(10); 
    } else if (window.innerWidth < 1024) {
      setNumBoxes(20); 
    } else {
      setNumBoxes(25); 
    }
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

       
         const boxes = Array.from({ length: numBoxes });




const handleSubmit = async () => {
  const validationErrors = validateContactForm(formData);
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) return;

 
  const payload = {
    name: formData.name,
    email: formData.email,
    message: formData.message,
  };

  
  console.log("Form submitted:", payload);

  
  setFormData({ name: "", email: "", message: "" });
};
  return (
      <div className=" mt-16 w-full relative bg-[#F4F7F7]">
         <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 absolute left-0 top-[-90px] z-0 w-full">
          {boxes.map((_, index) => {
      

            return (
              <div
                key={index}
                className={`h-[85px] flex items-center justify-center border-r border-b border-black/7`}
              >
              
              </div>
            );
          })}
        </div>


          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-5 w-full  gap-5 relative z-5  pb-5  lg:pb-20  container mx-auto  px-3.5">
            <div className="  lg:col-span-2">
    

   
      <div className="  grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-6  md:flex md:flex-col md:items-center  md:items-start   md:gap-8 xl:gap-10 w-full rounded-[22px] bg-thistle px-4 py-9  xl:px-9 xl:py-9 ">
  {ContactItems.map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={index} 
        className="  flex items-center gap-4  w-full"
      >
               <div className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] bg-[#B7A6B7] rounded-full flex justify-center items-center
                cursor-pointer
                        transform transition-transform duration-300 ease-in-out
                        hover:scale-110">
          <Icon className="w-[30px] md:w-[38px]" />
        </div>
        <div className="flex flex-col gap-0.5">
          <h2 className=" text-lg sm:text-[20px]   xl:text-[22px]  text-black  font-medium">
            {item.title}
          </h2>
          <p className="  text-sm sm:text-sm md:text-base  text-[#030F0CCC]">
            {item.description}
          </p>
        </div>
      </div>
    );
  })}
</div>

     
         </div>
               <div className="lg:col-span-3 bg-[#F4F7F7] flex flex-col gap-3 border border-black/10 rounded-[22px]  px-6  pt-6 pb-4  xl:pb-1">
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
      <InputTextArea
        label="Message"
        value={formData.message}
        onChange={handleChange("message")}
       rows={4}
        error={errors.message}
      />

      <div className="flex flex-row gap-2 items-center justify-end w-full pt-4 ">
        <button
          type="button"
          className="bg-black/40 w-[140px] rounded-full text-white py-2 cursor-pointer
           text-sm sm:text-base 
          "
        

          onClick={() => setFormData({ name: "", email: "", message: "" })}
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
      Send
    </span>
  </button>

      
      </div>
    </div>



          </div>
      
    
    </div>
  )
}

export default Contactfrom