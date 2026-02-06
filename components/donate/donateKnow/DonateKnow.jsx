'use client'
import { useEffect,useState} from 'react';
import Image from 'next/image';
import   img from '@/assets/images/donateimge.png'; 
import { bison } from '@/components/fonts/fonts';
import DonateForm   from '../donatefrom/DonateForm';
import RecentDonate  from '../recentdonate/RecentDonate';
import ProgramList   from '../programlist/ProgramList';
import { useSelector } from 'react-redux';
import ProgramShimmer   from '@/components/global/effect/ProgramShimmer'
import DetailShimmer from '@/components/global/effect/DetailShimmer';
import ItemNotFound from '@/components/global/ItemNotFound';
import DisplayError from '@/components/global/DisplayError';
import { baseURL } from '@/config/api';
import fallbackimg   from '@/assets/images/img2.jpg';
import DOMPurify from "dompurify";



const DonateKnow = ({
    isLoading,
           isError,
           error,
           singleProgramLoading,
     isErrorProgram,
  errorProgram,
  selectProgram,
  setSelectProgram,
}) => {

 const { docs,doc } = useSelector(state => state.program);

  console.log(' tis is a  doc',doc)

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

      
       <div className="grid grid-cols-1   lg:grid-cols-3 w-full px-5  md:px-3.5  md:container mx-auto   gap-6 relative z-5 pt-4">

           <div className='lg:col-span-1   '>

              <div className="lg:col-span-1">
      {/* Loading */}
      {isLoading && <ProgramShimmer />}

      {/* Error */}
      {!isLoading && isError && (
        <div className="text-red-500">
          {error?.message || "Something went wrong"}
        </div>
      )}

      {/* Data */}
      {!isLoading && !isError && docs?.length > 0 && (
        <ProgramList programs={docs}
        selectProgram={selectProgram}
        setSelectProgram={setSelectProgram}
         />
      )}

      {/* Empty */}
      {!isLoading && !isError && docs?.length === 0 && (
        <div>No programs found.</div>
      )}
    </div>
       </div>
       <div className='lg:col-span-2   flex flex-col gap-3.5   '>


         {singleProgramLoading ? (
    <DetailShimmer />
  ) : isErrorProgram ? (
    <DisplayError message={errorProgram?.message || "Something went wrong"} />
  ) : doc
  ? (
    <>
  <div className='  w-full h-[300px] lg:h-[451px] overflow-hidden   rounded-[22px]'>
   <Image
  src={
    doc?.featuredImage?.relativeAddress
      ? `${baseURL}/${doc.featuredImage.relativeAddress}`
      : fallbackimg
  }
  alt="img"
  width={794}
  height={451}
  className="w-full object-cover  h-full w-full"
/>

  </div>
 
      <div className=' flex flex-col gap-2'>
          <h3  className={`text-[28px] lg:text-[34px] ${bison.className}`}> 
          {doc?.title}
          </h3>


  <div
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(doc?.body) }}
      className="text-[#030F0CCC] text-sm lg:text-[15px] leading-[35px]"
    />
     

      </div>

    </>
     ) : (
    <ItemNotFound message="No Program found." />
  )}
     
 <div className=' pt-6'>
  <DonateForm/>
 </div>
      
  

       </div>


     


       </div>



         
    
    </div>
  )
}

export default DonateKnow
