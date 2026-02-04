export const validateResetPasswordForm = (data) => {
  const errors = {};

  const password = data.password?.trim();

  // Password validation
  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  } else if (password.length > 72) {
    errors.password = "Password must be at most 72 characters";
  } else if (!/[a-z]/.test(password)) {
    errors.password = "Password must include at least one lowercase letter";
  } else if (!/[A-Z]/.test(password)) {
    errors.password = "Password must include at least one uppercase letter";
  } else if (!/[0-9]/.test(password)) {
    errors.password = "Password must include at least one number";
  } else if (!/[!@#$%^&*(),.?":{}|<>~`+\-=[\]\\';\/]/.test(password)) {
    errors.password = "Password must include at least one special character";
  }

  // Confirm Password validation
  if (!data.confirmPassword) {
    errors.confirmPassword = "Confirm your password";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};
