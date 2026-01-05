import Forgotpassword from './Forgotpassword';

export const metadata = {
  title: "Forgot Password | Gifted Foundation",
  description:
    "Forgot your password? Enter your registered email address to receive a secure verification code and reset your Gifted Foundation account password.",
};

export default function Page() {
  return (
    <div
      className="w-full min-h-screen h-full 
                 bg-gradient-to-b from-[#E3F1F2] to-transparent
                 lg:flex lg:items-center lg:justify-center"
    >
      <Forgotpassword />
    </div>
  );
}
