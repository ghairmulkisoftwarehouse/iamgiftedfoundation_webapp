import   SignIn  from './SignIn'

export const metadata = {
  title: "Login | Gifted Foundation",
  description: "Access your Gifted Foundation account to manage donations, view programs, and stay connected with our community. Secure and easy login for all users.",
};
export default function Page() {
  return (
     <div className="w-full min-h-screen h-full bg-gradient-to-b from-[#E3F1F2] to-transparent">
         <SignIn/>
    </div> 

  );
}

