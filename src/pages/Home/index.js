import React, { useState } from "react";
import { Input, TextArea } from "../../components/inputs";
import { Button } from "../../components/buttons";
import { Popup } from "../../components/popup";

const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleConfirm = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Which is the email of your referral?"
            id="referralEmail"
            name="referralEmail"
            type="email"
            required
            styleDetails="mt-1 p-2 rounded w-full"
          />
          <TextArea
            label="How do you know this person, for how long and why do you think
              they are a good fit?"
            id="referralDescription"
            name="referralDescription"
            type="text"
            required
            styleDetails="mt-1 p-2 rounded w-full"
          />
          <Button
            type="submit"
            styleDetails="bg-blue-500 text-white p-2 w-full"
          >
            Submit Referral
          </Button>
        </form>

        <Popup
          showPopup={showPopup}
          setShowPopup={handleConfirm}
          description="I confirm I am not in the decision-making process in order for you to be eligible."
        />
      </div>
    </div>
  );
};

export default LandingPage;
