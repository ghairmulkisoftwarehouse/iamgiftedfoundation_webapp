export const validateRegisterEventForm = (formData) => {
  const errors = {};

  // First Name (required)
  if (!formData.firstName?.trim()) {
    errors.firstName = "First name is required";
  }

  // Optional: Last Name (no validation needed unless you want)

  // Email validation (optional)
  if (formData.email?.trim()) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = "Invalid email address";
    }
  }

  // Phone validation (optional)
  if (formData.phone?.trim()) {
    if (!/^\+?\d{7,15}$/.test(formData.phone)) {
      errors.phone = "Invalid phone number";
    }
  }

  // Parent Email (optional)
  if (formData.parentEmail?.trim()) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.parentEmail)) {
      errors.parentEmail = "Invalid parent email";
    }
  }

  // Parent Phone (optional)
  if (formData.parentPhone?.trim()) {
    if (!/^\+?\d{7,15}$/.test(formData.parentPhone)) {
      errors.parentPhone = "Invalid parent phone";
    }
  }

  return errors;
};
