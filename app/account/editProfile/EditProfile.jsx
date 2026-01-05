
'use client'
import HeroSection from "@/components/global/HeroSectionBanner";
import  Layout  from '@/components/global/AccountLayout';
import EditProfilefrom   from '@/components/account/editProfile/EditProfilefrom';
const EditProfile = () => {
  return (
        <div className="flex flex-col w-full ">
          <HeroSection
        title="Edit Profile"
        height="h-[250px]"
                bannerSvgClass = 'w-[190px]  lg:w-[230px]    xl:w-[280px]  ' 
      />
    <Layout>
<div className=" flex flex-col gap-3 w-full">
 <EditProfilefrom/>

</div>


</Layout>
</div>
  )
}

export default EditProfile