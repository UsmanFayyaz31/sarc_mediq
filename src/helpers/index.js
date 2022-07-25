import { SIGN_IN } from "../components/services/constants";

export const sessionExpireChecker = (status, history) => {
  if (status === 401) {
    localStorage.removeItem("authUser");
    localStorage.removeItem("t");
    history.push(SIGN_IN);
  }
};
