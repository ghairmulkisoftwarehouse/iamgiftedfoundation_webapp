import "../styles/globals.css";
import "../styles/utilities.css";
import "../styles/buttons.css"
import Providers from '@/redux/provider';

import Footer   from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar';
import Sidebar  from '@/components/layout/siderbar/siderbar';
import AccountSidebar   from '@/components/layout/accountSidebar/AccountSidebar';
import PannelContextProvider from '@/context/PannelContext';
import { webAppBaseURL } from '@/config/api.js';
import { graphik, bison } from "@/components/fonts/fonts";




const siteTitle = "Gifted Foundation";
const siteDescription =
  "Gifted Foundation empowers individuals and communities through education, development, and impactful social initiatives that create lasting positive change.";

export const metadata = {
  title: {
    default: siteTitle,
    template: "%s | Gifted Foundation",
  },
  description: siteDescription,

  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: `${webAppBaseURL}/`,
    siteName: "Gifted Foundation",
    type: "website",
    locale: "en_US",
  },


};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${graphik.className}   bg-[#F8F9F9] relative  `}>
           <Providers>
      <PannelContextProvider>
               <nav
        className="
          sticky top-0 z-50 w-full
           bg-transparent
          
          
        "
      >
        <Navbar />
      </nav>
      <AccountSidebar/>
        <Sidebar/>
        {children}
        <div className="   mt-16">
            <Footer/>
        </div>
       
         </PannelContextProvider>
         </Providers>
      </body>
     
    </html>
  );
}
