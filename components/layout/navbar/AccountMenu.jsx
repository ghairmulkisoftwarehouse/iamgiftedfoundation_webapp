'use client';

import Link from "next/link";
import { MdLogin } from "react-icons/md";

import { CgProfile } from "react-icons/cg";

export default function AccountMenu() {
  return (
    <div className="flex justify-center">
      <Link
        href="/auth/login"
        className="   px-2  text-sm flex items-center gap-1 font-semibold"
      >
        
        <CgProfile size={25} />
      </Link>
    </div>
  );
}
