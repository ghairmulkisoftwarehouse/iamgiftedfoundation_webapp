import Image from "next/image";
import Link from "next/link";
import imgLogo from '@/assets/images/ImageLogo.png';
import AuthButterfullyLeftSvg   from '@/assets/svg/AuthButterfullyLeftSvg';
import AuthButterfullySvg   from '@/assets/svg/AuthButterfullySvg';
import LoginForm   from '@/components/auth/login/LoginForm';
import MainlogoSvg  from '@/assets/svg/MainlogoSvg'


export default function SignIn() {
  return (
    <div className="w-full h-full flex min-h-screen">
      {/* Left Side */}
      <div className="w-full  lg:w-[50%] xl:w-[45%] h-full flex flex-col ">
        <LoginForm/>
      </div>

      {/* Right Side */}
      <div className="hidden  lg:w-[50%] lg:flex xl:w-[55%] justify-center items-center h-screen relative overflow-hidden">
      <div className=" absolute   top-6    right-3">
               <AuthButterfullySvg/>
      </div>
     
      <Link href={'/'}>
         <MainlogoSvg className={'  w-[180px] h-[212px]   relative z-10'}/>
        </Link>

     <div className=" absolute    bottom-0    left-3">
               <AuthButterfullyLeftSvg/>
      </div>

      </div>
    </div>
  );
}
