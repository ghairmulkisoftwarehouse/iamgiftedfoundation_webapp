import VerifyOtp from './VerifyOtp';

export const metadata = {
  title: "Verify OTP | Gifted Foundation",
  description:
    "Enter the one-time password (OTP) sent to your email to verify your identity and continue resetting your Gifted Foundation account password securely.",
};

export default function Page() {
  return (
    <div
      className="w-full min-h-screen h-full 
                 bg-gradient-to-b from-[#E3F1F2] to-transparent
                 lg:flex lg:items-center lg:justify-center"
    >
      <VerifyOtp />
    </div>
  );
}
