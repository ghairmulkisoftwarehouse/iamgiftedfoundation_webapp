// contactValidation.js

export const validateContactForm = (formData) => {
  const errors = {};

  // Name validation
  if (!formData.name.trim()) {
    errors.name = "Name is required";
  }

  // Email validation
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Invalid email";
  }

  // Message validation
  if (!formData.message.trim()) {
    errors.message = "Message is required";
  }

  return errors;
};
