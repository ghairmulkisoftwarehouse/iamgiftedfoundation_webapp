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
import { Toaster } from 'react-hot-toast';




const siteTitle = "Gifted Foundation";
const siteDescription =
  "Gifted Foundation empowers individuals and communities through education, personal growth, and meaningful social initiatives that create lasting positive impact.";


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
      <body className={` ${graphik.className}   bg-polar-mist relative  `}>
           <Providers>
      <PannelContextProvider>


           <Toaster
              position="top-center"
              reverseOrder={false}
              className='z-[9999]'
            />
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
