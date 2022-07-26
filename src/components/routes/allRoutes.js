import LoginSignup from "../../pages/authentication/LoginSignup";
import Home from "../../pages/authenticated/Home";
import { HOME, SIGN_IN } from "../services/constants";

const authenticationRoutes = [
  {
    path: SIGN_IN,
    component: LoginSignup,
  },
];

const authenticatedRoutes = [
  {
    path: HOME,
    component: Home,
  },
];

// const unAuthenticatedRoutes = [
//   {
//     path: HOME,
//     component: Home,
//     exact: true,
//   },
// ];

export { authenticationRoutes, authenticatedRoutes };
