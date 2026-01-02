'use client';

import { useState } from "react";
import EyeSeenSvg from "@/assets/svg/EyeSeenSvg";
import EyeUnseenSvg from "@/assets/svg/EyeUnseenSvg";

const InputPassword = ({
  label,
  placeholder,
  value,
  onChange,
  name,
  error,
  icon, 
  background = "bg-[#E5E7E7]",
  border = "border-transparent",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={name}
          className="font-medium text-sm sm:text-[15px] px-1 text-[#252C62]"
        >
          {label}
        </label>
      )}

      <div
        className={`
          w-full h-[50px] rounded-full relative flex items-center
          border ${error ? "border-red-500" : border}
        `}
      >
        {/* Left Icon */}
        {icon && (
          <span className="absolute left-4 text-gray-500">
            {icon}
          </span>
        )}

        {/* Eye Toggle */}
        <button
          type="button"
          onClick={() => setShowPassword(prev => !prev)}
          className="absolute right-4 text-gray-500  cursor-pointer"
        >
          {showPassword ? <EyeSeenSvg /> : <EyeUnseenSvg />}
        </button>

        <input
          type={showPassword ? "text" : "password"}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`
            outline-none w-full h-full rounded-full text-sm
            placeholder:text-[#B2BCC5]
            ${background}
            ${icon ? "pl-14 pr-12" : "px-4 pr-12"}
          `}
        />
      </div>

      {error && (
        <p className="text-xs xs:text-[13px] text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputPassword;
