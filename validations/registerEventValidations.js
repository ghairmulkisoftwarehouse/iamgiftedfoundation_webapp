export const validateRegisterEventForm = (formData) => {
  const errors = {};

  // Name validation (required)
  if (!formData.name.trim()) {
    errors.name = "Parent Name is required";
  }

  // Email validation (optional)
  if (formData.email.trim()) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = "Invalid email address";
    }
  }

  // Phone number validation (optional)
  if (formData.number.trim()) {
    if (!/^\+?\d{7,15}$/.test(formData.number)) {
      errors.number = "Invalid phone number";
    }
  }

  return errors;
};
