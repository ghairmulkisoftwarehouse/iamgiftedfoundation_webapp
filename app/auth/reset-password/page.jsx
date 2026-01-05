import ResetPassword from './ResetPassword';

export const metadata = {
  title: "Reset Password | Gifted Foundation",
  description:
    "Securely reset your Gifted Foundation account password. Create a new password to regain access to your account quickly and safely.",
};

export default function Page() {
  return (
    <div
      className="w-full min-h-screen h-full 
                 bg-gradient-to-b from-[#E3F1F2] to-transparent
                 lg:flex lg:items-center lg:justify-center"
    >
      <ResetPassword />
    </div>
  );
}
