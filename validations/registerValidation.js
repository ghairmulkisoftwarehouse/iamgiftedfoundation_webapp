export const validateRegisterForm = (data) => {
  const errors = {};

  // Username validation
  if (!data.name?.trim()) {
    errors.name = "Username is required";
  } else if (data.name.trim().length < 3) {
    errors.name = "Username must be at least 3 characters";
  }

  // Email validation
  if (!data.email?.trim()) {
    errors.email = "Email is required";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.email = "Please enter a valid email address";
    }
  }

  // Password validation
  const password = data.password || "";
  if (!password.trim()) {
    errors.password = "Password is required";
  } else if (password.length < 6) {
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

  // Confirm Password validation
  if (!data.confirmPassword) {
    errors.confirmPassword = "Confirm your password";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "Passwords do not match";
  }

  // User type validation
  if (!data.userType) {
    errors.userType = "Please select a user type";
  }

  // Accept terms validation
  if (!data.acceptTerms) {
    errors.acceptTerms =
      "You must accept the Terms of Service and Privacy Policy";
  }

  return errors;
};
