import { setReferrals } from "../reducers/referrals.reducer";
import { store } from "..";

export const setReferralsAction = (payload) => {
  store.dispatch(setReferrals(payload));
};
