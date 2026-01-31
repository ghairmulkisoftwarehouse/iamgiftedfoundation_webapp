import { get } from "@/config/serverFetcher";
import { baseURL } from "@/config/api"; 
import HeroSectionBanner from '@/components/global/HeroSectionBanner';
import ProgramInformation from '@/components/programdetails/ProgramInformation/ProgramInformation';
import Partner from '@/components/programdetails/partner/Partner';
import DisplayError from "../global/DisplayError";
import ItemNotFound from "../global/ItemNotFound";




export async function generateMetadata({ params }) {
  const { id } = params;

  try {
    const { responsePayload } = await get(`/program/${id}`);
    const program = responsePayload?.data?.doc;

    return {
      title: program?.title ?? "Program Detail",
      description: program?.body?.slice(0, 160) ?? "Program details page",
    };
  } catch (error) {
    return {
      title: "Program Detail",
      description: "Program details page",
    };
  }
}


const ProgramsDetail = async ({ params }) => {
  const { id } = await params;

    const { responsePayload } = await get(`/program/${id}`);
  const program = responsePayload?.data?.doc;


  return     <div className="flex flex-col w-full">
      <HeroSectionBanner
        title="PROGRAM DETAIL"
        height="h-[250px]"
        bannerSvgClass="w-[260px] lg:w-[290px] xl:w-[370px]"
      />

      <ProgramInformation />
      <Partner />
    </div>;
};  

export default ProgramsDetail;

