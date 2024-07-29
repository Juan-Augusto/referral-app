import React, { useState } from "react";
import { Input, TextArea } from "../../../components/inputs";
import { Button } from "../../../components/buttons";
import {
  updateReferral,
  cancelReferral,
} from "../../../services/referral-app-api";
import Tooltip from "../../../components/tooltip";
import { PencilIcon, TrashIcon } from "../../../icons";

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
                <PencilIcon />
              </Button>
            </Tooltip>
            <Tooltip content="Cancel referral">
              <Button
                onClick={handleCancel}
                styleDetails="bg-red-700 text-white p-2"
              >
                <TrashIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      )}
    </li>
  );
};
