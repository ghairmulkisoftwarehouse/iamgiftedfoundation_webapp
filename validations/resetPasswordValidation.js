export const validateResetPasswordForm = (data) => {
  const errors = {};



  // Password validation
  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  // Confirm Password validation
  if (!data.confirmPassword) {
    errors.confirmPassword = "Confirm your password";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "Passwords do not match";
  }



  return errors;
};
