// InputName.jsx
const InputName = ({ label, placeholder, value, onChange, name, error }) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="font-medium  text-sm sm:text-[15px] px-1 text-[#252C62]"
      >
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`outline-none  bg-[#E5E7E7] w-full rounded-full px-3 h-[50px] text-sm 
     
          ${error ?  "  border border-red-500" : ""}`}
      />
      {error && <p className="text-xs xs:text-[13px] text-red-500">{error}</p>}
    </div>
  );
};

export default InputName;
