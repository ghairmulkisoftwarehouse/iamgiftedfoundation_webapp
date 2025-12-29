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

  




 const [numBoxes, setNumBoxes] = useState(60);
       useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 640) {
      setNumBoxes(20); 
    } else if (window.innerWidth < 1024) {
      setNumBoxes(40); 
    } else {
      setNumBoxes(60); 
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
      <div className="px-5 xl:px-12 mt-16 w-full relative bg-[#F4F7F7]">
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


          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-5 w-full lg:px-10 gap-5 relative z-5">
            <div className="  lg:col-span-2">
    

   
      <div className="flex flex-col items-center  md:items-start   gap-8 w-full rounded-[22px] bg-thistle px-4 py-9  lg:px-9 lg:py-9 ">
  {ContactItems.map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={index} 
        className="flex items-center gap-3.5 w-full"
      >
        <div className=" w-[50px] h-[50px] lg:w-[71px] lg:h-[71px] bg-[#B7A6B7] rounded-full flex justify-center items-center">
          <Icon   className={'w-[30px] lg:w-auto'}/>
        </div>

        <div className="flex flex-col gap-0.5">
          <h2 className=" text-[20px] sm:text-[22px] md:text-2xl text-black  font-medium">
            {item.title}
          </h2>
          <p className="text-base md:text-lg text-[#030F0CCC]">
            {item.description}
          </p>
        </div>
      </div>
    );
  })}
</div>

     
         </div>
               <div className="lg:col-span-3 bg-[#F4F7F7] flex flex-col gap-3 border border-black/10 rounded-[22px] px-4 py-9  lg:px-9 lg:py-9">
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
        error={errors.message}
      />

      <div className="flex flex-row gap-2 items-center justify-end w-full pt-8">
        <button
          type="button"
          className="bg-black/40 px-7 rounded-full text-white py-1.5 cursor-pointer"
          onClick={() => setFormData({ name: "", email: "", message: "" })}
        >
          Cancel
        </button>

        <button
          type="button"
          className="bg-black px-7 rounded-full text-white py-1.5 cursor-pointer"
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>
    </div>



          </div>
      
    
    </div>
  )
}

export default Contactfrom