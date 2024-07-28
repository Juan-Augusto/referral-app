import React, { useEffect, useState } from "react";
import { Input, TextArea } from "../../components/inputs";
import { Button } from "../../components/buttons";
import { Popup } from "../../components/popup";
import { useSelector } from "react-redux";
import axios from "axios";
import { Layout } from "../../components/layout";

const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [referrals, setReferrals] = useState([]);
  const [referralEmail, setReferralEmail] = useState("");
  const [referralDescription, setReferralDescription] = useState("");
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/referrals", {
        email: referralEmail,
        description: referralDescription,
      });
      setShowPopup(true);
    } catch (error) {
      console.error("Error submitting referral", error);
    }
  };

  const handleConfirm = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.classList.add("text-white");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const fetchReferrals = async () => {
      try {
        const response = await axios.get("/api/referrals");
        setReferrals(response.data);
      } catch (error) {
        console.error("Error fetching referrals", error);
      }
    };
    fetchReferrals();
  }, []);

  return (
    <Layout>
      <div
        className={`min-h-screen flex items-center justify-center ${
          isDarkMode ? "bg-gray-900 " : "bg-gray-100"
        }`}
      >
        <div
          className={`p-8 rounded shadow-md w-full max-w-md ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
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
                isDarkMode
                  ? "bg-yellow-500 text-gray-800"
                  : "bg-blue-500 text-white"
              }`}
            >
              Submit Referral
            </Button>
          </form>

          <Popup
            showPopup={showPopup}
            setShowPopup={handleConfirm}
            description="I confirm I am not in the decision-making process in order for you to be eligible."
          />

          <div className="mt-8">
            <h2 className="text-lg font-semibold">Track Referral Status</h2>
            <ul className="mt-4 space-y-2">
              {referrals.map((referral) => (
                <li
                  key={referral.id}
                  className={`p-2 rounded ${
                    isDarkMode
                      ? "bg-gray-700 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {referral.email} - {referral.status}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
