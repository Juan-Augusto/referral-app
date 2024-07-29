import React, { useState } from "react";
import { Input, TextArea } from "../../../components/inputs";
import { Button } from "../../../components/buttons";
import {
  updateReferral,
  cancelReferral,
  getReferrals,
} from "../../../services/referral-app-api";
import Tooltip from "../../../components/tooltip";

export const ReferralItem = ({ referral }) => {
  const [editing, setEditing] = useState(false);
  const [email, setEmail] = useState(referral.referralEmail);
  const [description, setDescription] = useState(referral.referralDescription);

  const handleUpdate = async () => {
    await updateReferral(referral.id, email, description);
    setEditing(false);
  };

  const handleCancel = async () => {
    await cancelReferral(referral.id);
  };

  return (
    <li className="p-2 rounded bg-gray-200 text-slate-600 dark:bg-gray-700 dark:text-white">
      {editing ? (
        <div>
          <Input
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextArea
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            styleDetails="w-full"
          />
          <div className="flex justify-between">
            <Button
              onClick={handleUpdate}
              styleDetails="bg-green-700 text-white p-2"
            >
              Update
            </Button>
            <Button
              onClick={() => setEditing(false)}
              styleDetails="bg-red-700 text-white p-2"
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between">
          <div>
            <p>Email: {referral.referralEmail}</p>
            <p>Status: {referral.status}</p>
            {referral.code && (
              <p>
                Code: {referral.code} (${referral.amount})
              </p>
            )}
          </div>
          <div className="flex space-x-2">
            <Tooltip content="Edit referral">
              <Button
                onClick={() => setEditing(true)}
                styleDetails="bg-blue-700 text-white p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M12 20h9"></path>
                  <path d="M17 3l4 4-9 9H8v-3l9-9 3-3"></path>
                  <path d="M13 2l3 3"></path>
                </svg>
              </Button>
            </Tooltip>
            <Tooltip content="Cancel referral">
              <Button
                onClick={handleCancel}
                styleDetails="bg-red-700 text-white p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M3 6l3 0 1 14 10 0 1-14 3 0"></path>
                  <path d="M6 6l0 0l1-3h10l1 3l0 0"></path>
                  <path d="M9 6v14"></path>
                  <path d="M15 6v14"></path>
                </svg>
              </Button>
            </Tooltip>
          </div>
        </div>
      )}
    </li>
  );
};
