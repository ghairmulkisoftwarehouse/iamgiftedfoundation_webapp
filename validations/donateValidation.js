export const validateDonateForm = (data) => {
  const errors = {};

  // Donation
  if (!data.donation || Number(data.donation) <= 0) {
    errors.donation = "Please enter a valid donation amount";
  }

  // Payment Method
  if (!data.paymentMethod) {
    errors.paymentMethod = "Please select a payment method";
  }

  // First Name
  if (!data.firstName.trim()) {
    errors.firstName = "First name is required";
  }

  // Last Name
  if (!data.lastName.trim()) {
    errors.lastName = "Last name is required";
  }

  // Email
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Invalid email address";
  }

  // Phone
  if (!data.phoneNumber.trim()) {
    errors.phoneNumber = "Phone number is required";
  } else if (!/^\+?\d{7,15}$/.test(data.phoneNumber)) {
    errors.phoneNumber = "Invalid phone number";
  }

  // Address
  if (!data.address.trim()) {
    errors.address = "Address is required";
  }

  return errors;
};
