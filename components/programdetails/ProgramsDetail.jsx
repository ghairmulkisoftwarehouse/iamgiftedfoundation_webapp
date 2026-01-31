import HeroSectionBanner from '@/components/global/HeroSectionBanner';
import ProgramInformation from '@/components/programdetails/ProgramInformation/ProgramInformation';
import Partner from '@/components/programdetails/partner/Partner';
import img from '@/assets/images/img2.jpg'
import { get } from "@/utils/api"; 
import { baseURL } from "@/config/api";



export async function generateMetadata({ params }) {
  try {
    const { id } = params;
    const response = await get(`/program/${id}`);

    if (response.statusCode === 400 || !response.responsePayload.success) {
      return { title: "Program not found | Gifted Foundation" };
    }

    const program = response.responsePayload.data.doc;

    // Fallbacks in case fields are missing
    const title = program?.title ?? "Program";
    const pillerTitle = program?.piller?.title ?? "Gifted Foundation";
    const description =
      program?.body ??
      "Join Gifted Foundation programs to empower individuals, support communities, and make a lasting positive impact.";

    const imageUrl = program?.featuredImage
      ? `${baseURL}/${program.featuredImage.relativeAddress}`
      : img; // fallback image

    return {
      title: `${title} | ${pillerTitle} | Gifted Foundation`,
      description: description,
      openGraph: {
        title: `${title} | ${pillerTitle} | Gifted Foundation`,
        description: description,
        url: `${baseURL}/program/${id}`,
        images: [
          {
            url: imageUrl,
            width: 800,
            height: 600,
          },
        ],
        type: "article",
        siteName: "Gifted Foundation",
      },
    };
  } catch (error) {
    console.error(error);
    return { title: "Program not found | Gifted Foundation" };
  }
}



export default async function ProgramsDetail({ params }) {
  const { id } = params; // matches the dynamic segment [id]

  return (
    <div className="flex flex-col w-full">
      <HeroSectionBanner
        title="PROGRAM DETAIL"
        height="h-[250px]"
        bannerSvgClass="w-[260px] lg:w-[290px] xl:w-[370px]"
      />

      <ProgramInformation />
      <Partner />
    </div>
  );
}
