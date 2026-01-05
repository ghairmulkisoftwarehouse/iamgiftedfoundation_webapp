export const validateForgetPasswordForm = (data) => {
  const errors = {};

  // Email validation
  if (!data.email?.trim()) {
    errors.email = "Email is required";
  } else {
    // Simple email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.email = "Please enter a valid email address";
    }
  }



  return errors;
};
