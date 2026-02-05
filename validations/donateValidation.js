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
if (data.paymentMethod === "STRIPE") {
    errors.paymentMethod = "Stripe is not available yet. Coming soon!";
  }


  return errors;
};
