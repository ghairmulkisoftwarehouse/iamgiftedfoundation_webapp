import HeroSection from "../global/HeroSectionBanner";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col w-full">
      
      {/* Hero Section */}
      <HeroSection
        title="Account"
        height="h-[250px]"
                bannerSvgClass = 'w-[150px]   lg:w-[160px]    xl:w-[200px] ' 
      />

      {/* Main Content */}
      <div className="mt-16">
        <div className="container mx-auto px-3.5">
          <div className="flex flex-col lg:flex-row gap-6">

            {/* Sidebar */}
            <div className="w-full lg:w-1/4 shadow-[0px_0px_5.6px_0px_#0000001F] bg-white border border-black/5 rounded-[16px] h-fit hidden lg:block">
              
              {/* User Info */}
              <div className="w-full flex flex-col items-center gap-2 mt-6">
                <h1 className="text-primary text-xl font-medium">
                  User Name
                </h1>
                <p className="text-primary/40 text-base">
                  User ID: 123456
                </p>
              </div>

              {/* Menu */}
              <div className="flex flex-col gap-2 px-5 py-6">

                <div className="text-primary text-sm lg:text-base font-medium px-3 py-2 rounded-md cursor-pointer">
                  Donation History
                </div>

                <div className="text-primary text-sm lg:text-base font-medium px-3 py-2 rounded-md cursor-pointer">
                  Badges Earned
                </div>

                <div className="text-primary text-sm lg:text-base font-medium px-3 py-2 rounded-md cursor-pointer">
                  Impact Report
                </div>

                <div className="text-primary text-sm lg:text-base font-medium px-3 py-2 rounded-md cursor-pointer">
                  Registered Programs
                </div>

                <div className="text-primary text-sm lg:text-base font-medium px-3 py-2 rounded-md cursor-pointer">
                  Upcoming Events
                </div>

                <div className="text-primary text-sm lg:text-base font-medium px-3 py-2 rounded-md cursor-pointer">
                  Check-in / Check-out
                </div>

                <div className="text-primary text-sm lg:text-base font-medium px-3 py-2 rounded-md cursor-pointer">
                  Recognition Certificates
                </div>

                <div className="text-primary text-sm lg:text-base font-medium px-3 py-2 rounded-md cursor-pointer">
                  Track Working Hours
                </div>

                {/* Divider */}
                <div className="h-px bg-black/10 my-2" />

                <div className="text-primary text-sm lg:text-base font-medium px-3 py-2 rounded-md cursor-pointer">
                  Logout
                </div>

              </div>
            </div>

            {/* Page Content */}
            <div className="w-full lg:w-3/4">
              {children}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
