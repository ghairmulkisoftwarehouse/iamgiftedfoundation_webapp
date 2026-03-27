export const validateSponsorshipTileForm = (formData) => {
  const errors = {};

  // First Name (required)
  if (!formData.firstName?.trim()) {
    errors.firstName = "First name is required";
  }

  // Email validation (optional)
  if (formData.sponsorEmail?.trim()) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.sponsorEmail)) {
      errors.sponsorEmail = "Invalid email address";
    }
  }

  // Phone validation (optional)
  if (formData.phone?.trim()) {
    if (!/^\+?\d{7,15}$/.test(formData.phone)) {
      errors.phone = "Invalid phone number";
    }
  }

  // Amount validation (optional but must be a positive number if provided)
  if (formData.amount?.toString().trim()) {
    if (!/^\d+$/.test(formData.amount)) {
      errors.amount = "Amount must be a valid number";
    } else if (parseInt(formData.amount, 10) <= 0) {
      errors.amount = "Amount must be greater than 0";
    }
  }

  return errors;
};