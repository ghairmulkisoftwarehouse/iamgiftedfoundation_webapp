import { bison } from '@/components/fonts/fonts';
import  img  from '@/assets/images/fundrasingimg.png' 
import { teamFundrasing } from '@/constants/ProgramConstants';
import  img1  from '@/assets/images/donateperson1.png' 
import  img2  from '@/assets/images/donateperson2.png' 
import  img3  from '@/assets/images/donateperson3.png'
import Link from 'next/link';
import Image from 'next/image';

const Fundrasing = () => {
  return (
    <div className="px-5 xl:px-12 mt-16">
         <div className="flex flex-col w-full items-center gap-10">
           <h2
             className={`title-heading md:leading-tight text-center  ${bison.className}`}
           >
            Peer-to-Peer Fundraising
           </h2>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:px-10  ">
                 {teamFundrasing.map((item, index) => (
        <div
          key={index}
          className="border border-black/20 rounded-[20px] p-3 flex flex-col gap-3"
        >
          <Image
            src={item.image}
            width={370}
            height={236}
            className="w-full"
            alt={item.title}
          />
          <h1 className="font-semibold text-[24px]">{item.title}</h1>
          <p className="text-base text-black/70">{item.paragraph}</p>

          {/* Progress Bar */}
          <div className="flex flex-col">
            <div className="w-full bg-[#B2BCC599] rounded-full h-2">
              <div
                className="bg-light-cyan h-2 rounded-full"
                style={{ width: `60%` }}
              ></div>
            </div>
            <div className="flex justify-between w-full">
              <p className="text-[10px] xs:text-xs md:text-sm text-black font-medium">
                Raised: $8,000
              </p>
              <p className="text-[10px] xs:text-xs md:text-sm text-black/70 font-normal">
                Goal: $18,000
              </p>
            </div>
          </div>

          <div className="border-b border-black/10 w-full"></div>

          {/* Donors and Donate Button */}
          <div className="flex justify-between w-full items-center">
            <div className="flex flex-row items-center">
              <div className="w-[30px] h-[30px] rounded-full">
                <Image
                  src={img1}
                  width={200}
                  height={300}
                  className="w-full h-full rounded-full object-cover"
                  alt="donor"
                />
              </div>
              <div className="w-[30px] h-[30px] rounded-full ml-[-5px]">
                <Image
                  src={img2}
                  width={200}
                  height={300}
                  className="w-full h-full rounded-full object-cover"
                  alt="donor"
                />
              </div>
              <div className="w-[30px] h-[30px] rounded-full ml-[-5px]">
                <Image
                  src={img3}
                  width={200}
                  height={300}
                  className="w-full h-full rounded-full object-cover"
                  alt="donor"
                />
              </div>
              <div className="w-[30px] h-[30px] rounded-full ml-[-5px] bg-black text-white text-[10px] flex justify-center font-semibold items-center">
                +124
              </div>
            </div>

            <button className="btn-secondary-donate">
             <Link href={'/donate'}>
                Donate Now
             </Link>
          
            </button>
          </div>
        </div>
      ))}

                
            
           </div>
   
  
   
   
           <button className="btn-seeMore border border-black/20">
             See More
           </button>
         </div>
       </div>
  )
}

export default Fundrasing