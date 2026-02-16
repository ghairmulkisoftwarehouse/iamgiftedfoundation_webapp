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



  return errors;
};
