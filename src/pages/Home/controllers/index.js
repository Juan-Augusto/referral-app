import {
  getReferrals,
  submitReferral,
} from "../../../services/referral-app-api";

export const handleSubmit = async (
  referralEmail,
  referralDescription,
  setShowAlert
) => {
  try {
    await submitReferral(referralEmail, referralDescription);
    await getReferrals();
    setShowAlert(true);
  } catch (error) {
    console.error("Error submitting referral", error);
  }
};
