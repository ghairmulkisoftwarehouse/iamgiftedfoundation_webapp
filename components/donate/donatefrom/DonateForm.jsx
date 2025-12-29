import { useState } from "react";
import { validateDonateForm } from "@/validations/donateValidation";
import DollarSvg from "@/assets/svg/DollarSvg";
import InputName from "@/components/global/form/InputName";
import InputEmail from "@/components/global/form/InputEmail";


const DonateForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [amount, setAmount] = useState(100);
  const [isCustom, setIsCustom] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handlePresetClick = (value) => {
    setAmount(value);
    setIsCustom(false);
    setErrors((prev) => ({ ...prev, donation: undefined }));
  };

  const handleCustomClick = () => {
    setAmount("");
    setIsCustom(true);
  };

  const handleSubmit = () => {
    const validationErrors = validateDonateForm({
      ...formData,
      donation: amount,
      paymentMethod,
    });

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    const payload = {
      donation: amount,
      paymentMethod,
      ...formData,
    };

    console.log("Form submitted:", payload);

    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
    });
    setAmount(100);
    setPaymentMethod("");
    setIsCustom(false);
    setErrors({});
  };

  return (
    <div className="w-full bg-[#F4F7F7] grid grid-cols-1 md:grid-cols-2 gap-6 border border-black/10 rounded-[22px] px-6 py-9">

      {/* Donation */}
      <div className="md:col-span-2 flex flex-col gap-2.5">
        <h2 className="font-medium text-xl">Your Donation:</h2>

        <div className="relative h-[50px]">
          <div className="bg-black w-[40px] h-[40px] flex items-center justify-center rounded-full absolute top-[5px] left-2">
            <DollarSvg />
          </div>

          <input
            type="number"
            value={amount}
            readOnly={!isCustom}
            onChange={(e) => isCustom && setAmount(e.target.value)}
            className="outline-none w-full rounded-full pl-14 pr-3 h-full bg-light-cyan"
          />
        </div>

        {errors.donation && (
          <p className="text-xs text-red-500">{errors.donation}</p>
        )}

        <div className="flex flex-wrap gap-2.5">
          {[20, 50, 100, 200].map((value) => (
            <button
              key={value}
              onClick={() => handlePresetClick(value)}
              className={`border px-7 py-1 rounded-full transition-colors duration-500
                ${amount === value && !isCustom
                  ? "bg-black text-white"
                  : "border-black text-black"
                }`}
            >
              {value}
            </button>
          ))}

          <button
            onClick={handleCustomClick}
            className={`border px-7 py-1 rounded-full transition-colors duration-500
              ${isCustom ? "bg-black text-white" : "border-black text-black"}`}
          >
            Custom
          </button>
        </div>
      </div>

      {/* Payment Method */}
      <div className="md:col-span-2 flex flex-col gap-2.5">
        <h2 className="font-medium text-xl">Select Payment Method</h2>

        <div className="flex flex-wrap gap-4">
          {["paypal", "card", "wire"].map((method) => (
            <label key={method} className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value={method}
                checked={paymentMethod === method}
                onChange={(e) => {
                  setPaymentMethod(e.target.value);
                  setErrors((prev) => ({ ...prev, paymentMethod: undefined }));
                }}
                className="accent-black"
              />
              {method === "paypal" && "PayPal"}
              {method === "card" && "Debit/Credit Card"}
              {method === "wire" && "Wire Transfer"}
            </label>
          ))}
        </div>

        {errors.paymentMethod && (
          <p className="text-xs text-red-500">{errors.paymentMethod}</p>
        )}
      </div>

      {/* Personal Info */}
      <div className="md:col-span-2 flex flex-col gap-5">
        <h2 className="font-medium text-xl">Personal Details</h2>

        <div className="grid md:grid-cols-2 gap-5">
          <InputName label="First Name" value={formData.firstName} onChange={handleChange("firstName")} error={errors.firstName} />
          <InputName label="Last Name" value={formData.lastName} onChange={handleChange("lastName")} error={errors.lastName} />
          <InputEmail label="Email" value={formData.email} onChange={handleChange("email")} error={errors.email} />
          <InputName label="Phone Number" value={formData.phoneNumber} onChange={handleChange("phoneNumber")} error={errors.phoneNumber} />

          <div className="md:col-span-2">
            <InputName label="Address" value={formData.address} onChange={handleChange("address")} error={errors.address} />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="md:col-span-2 flex justify-end gap-3 pt-6">
        <button
          className="bg-black/40 px-7 py-1.5 rounded-full text-white"
          onClick={() => {
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              address: "",
            });
            setErrors({});
          }}
        >
          Cancel
        </button>

        <button
          className="bg-black px-7 py-1.5 rounded-full text-white"
          onClick={handleSubmit}
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default DonateForm;
