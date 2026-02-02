import { get } from "@/config/serverFetcher";
import { baseURL } from "@/config/api"; 
import HeroSectionBanner from '@/components/global/HeroSectionBanner';
import ProgramInformation from '@/components/programdetails/ProgramInformation/ProgramInformation';
import Partner from '@/components/programdetails/partner/Partner';
import DisplayError from "../global/DisplayError";
import ItemNotFound from "../global/ItemNotFound";




export async function generateMetadata({ params }) {
  const { id } = params;
    const programId=id;

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
      const programId =id;
  let loading = true;
  let error = null;
  let program = null;

  let allProgramLoading = true;
  let allProgramError = null;
  let allProgram = [];

  // Fetch all programs
  try {
    const response = await get(`/program`);
    if (!`${response.statusCode}`.startsWith("2")) {
      allProgramError =
        response?.responsePayload?.data?.message ||
        "Failed to load programs";
    } else {
      allProgram = response?.responsePayload?.data?.docs || [];
      if (allProgram.length === 0) {
        allProgramError = "Programs list not found";
      }
    }
  } catch (err) {
    allProgramError = "Something went wrong";
  } finally {
    allProgramLoading = false;
  }

  // Fetch single program
  try {
    const response = await get(`/program/${id}`);
    if (!`${response.statusCode}`.startsWith("2")) {
      error =
        response?.responsePayload?.data?.message ||
        "Failed to load program";
    } else {
      program = response?.responsePayload?.data?.doc;
      if (!program) {
        error = "Program not found";
      }
    }
  } catch (err) {
    error = "Something went wrong";
  } finally {
    loading = false;
  }


  return     <div className="flex flex-col w-full">
      <HeroSectionBanner
        title="PROGRAM DETAIL"
        height="h-[250px]"
        bannerSvgClass="w-[260px] lg:w-[290px] xl:w-[370px]"
      />

      <ProgramInformation 
            programId={programId}
            loading={loading}
        error={error}
        program={program}
        allProgram={allProgram}
        allProgramLoading={allProgramLoading}
        allProgramError={allProgramError}
      />
      <Partner />
    </div>;
};  

export default ProgramsDetail;

