import React, { useEffect, useState } from "react";
import { Input, TextArea } from "../../components/inputs";
import { Button } from "../../components/buttons";
import Popup from "../../components/popup";
import { useSelector } from "react-redux";
import { Layout } from "../../components/layout";
import { getReferrals } from "../../services/referral-app-api";
import { ReferralItem } from "./components";
import { useAuth0 } from "@auth0/auth0-react";
import { handleSubmit } from "./controllers";
import Alert from "../../components/alerts";

const LandingPage = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [showPopup, setShowPopup] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [referralEmail, setReferralEmail] = useState("");
  const [referralDescription, setReferralDescription] = useState("");

  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const referrals = useSelector((state) => state.referrals.referrals);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleAuthSaveCredentials = () => {
    if (isAuthenticated) {
      getAccessTokenSilently().then((token) => {
        localStorage.setItem("token", token);
      });
      localStorage.setItem("email", user.email);
    }
  };

  useEffect(() => {
    handleAuthSaveCredentials();
    const fetchReferrals = async () => {
      try {
        await getReferrals();
      } catch (error) {
        console.error("Error fetching referrals", error);
      }
    };
    fetchReferrals();
  }, []);

  const handleConfirm = () => {
    handleSubmit(referralEmail, referralDescription, setShowAlert);
    setReferralEmail("");
    setReferralDescription("");
    setShowPopup(false);
  };

  return (
    <Layout>
      <div className="flex justify-center">
        <h1 className="text-2xl text-slate-600 dark:text-gray-200">
          Welcome, {localStorage.getItem("email") || "Guest"}! Please submit
          your referral below.
        </h1>
      </div>
      <div
        className={`min-h-screen flex items-center justify-center ${
          isDarkMode ? "bg-gray-900 " : "bg-gray-100"
        }`}
      >
        <div
          className={`m-5 p-8 rounded shadow-md w-full max-w-md ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          {showAlert && (
            <Alert
              type="success"
              message="Referral submitted successfully"
              onClose={() => setShowAlert(false)}
            />
          )}
          <Form
            referralEmail={referralEmail}
            setReferralEmail={setReferralEmail}
            referralDescription={referralDescription}
            setReferralDescription={setReferralDescription}
            setShowPopup={setShowPopup}
          />
          {showPopup && (
            <Popup
              setShowPopup={setShowPopup}
              showPopup={showPopup}
              handleConfirm={handleConfirm}
              onCancel={() => setShowPopup(false)}
              description="I confirm I am not in the decision-making process in order for you to be eligible."
            />
          )}

          <div className="mt-8 flex justify-center flex-col">
            <h2
              className="text-lg font-semibold text-slate-600
              dark:text-white text-center
            "
            >
              Track Referral Status
            </h2>
            {referrals?.length === 0 ? (
              <p className="text-slate-600 dark:text-white text-center">
                -No referrals to display-
              </p>
            ) : (
              <ul className="mt-4 space-y-2">
                {referrals.map((referral) => (
                  <ReferralItem key={referral.id} referral={referral} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

const Form = ({
  referralEmail,
  setReferralEmail,
  referralDescription,
  setReferralDescription,
  setShowPopup,
}) => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setShowPopup(true);
      }}
      className="space-y-4"
    >
      <Input
        label="Which is the email of your referral?"
        id="referralEmail"
        name="referralEmail"
        type="email"
        value={referralEmail}
        onChange={(e) => setReferralEmail(e.target.value)}
        required
        styleDetails={`mt-1 p-2 rounded w-full ${
          isDarkMode
            ? "bg-gray-700 text-white border-gray-600"
            : "border-gray-300"
        }`}
      />
      <TextArea
        label="How do you know this person, for how long and why do you think they are a good fit?"
        id="referralDescription"
        name="referralDescription"
        value={referralDescription}
        onChange={(e) => setReferralDescription(e.target.value)}
        required
        styleDetails={`mt-1 p-2 rounded w-full ${
          isDarkMode
            ? "bg-gray-700 text-white border-gray-600"
            : "border-gray-300"
        }`}
      />
      <Button
        type="submit"
        styleDetails={`p-2 w-full ${
          isDarkMode ? "bg-yellow-500 text-gray-800" : "bg-blue-500 text-white"
        }`}
      >
        Submit Referral
      </Button>
    </form>
  );
};

export default LandingPage;
