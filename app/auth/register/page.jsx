
import SignUp   from '../register/SignUp';
export const metadata = {
  title: "Register | Gifted Foundation",
  description: "Create your Gifted Foundation account to manage donations, join programs, and stay connected with our community. Safe, easy, and secure registration for all users.",
};

export default function Page() {
  return (
      <div className="w-full min-h-screen h-full 
                bg-gradient-to-b from-[#E3F1F2] to-transparent

            lg:flex lg:items-center lg:justify-center">
  <SignUp />
</div>

  );
}
