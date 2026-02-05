// editProfileValidation.js

export const validateEditProfileForm = (formData) => {
  const errors = {};

  // Name validation: optional but must be valid if provided
  if (formData.name?.trim()) {
    if (formData.name.trim().length < 3) {
      errors.name = "Username must be at least 3 characters";
    }
  }

  // Phone validation: optional but must be digits if provided
  if (formData.phone?.trim()) {
    const phoneRegex = /^[0-9]{7,15}$/; // simple phone validation
    if (!phoneRegex.test(formData.phone.trim())) {
      errors.phone = "Phone number must be 7-15 digits";
    }
  }

  // Password validation: optional but must meet criteria if provided
  const password = formData.password || "";
  if (password.trim()) {
    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    } else if (password.length > 72) {
      errors.password = "Password must be at most 72 characters long";
    } else if (!/[a-z]/.test(password)) {
      errors.password = "Password must include at least one lowercase letter";
    } else if (!/[A-Z]/.test(password)) {
      errors.password = "Password must include at least one uppercase letter";
    } else if (!/[0-9]/.test(password)) {
      errors.password = "Password must include at least one number";
    } else if (!/[!@#$%^&*(),.?":{}|<>~`+\-=\[\]\\';\/]/.test(password)) {
      errors.password = "Password must include at least one special character";
    }
  }

  return errors;
};
