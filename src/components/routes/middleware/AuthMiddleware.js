import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { HOME, SIGN_IN } from "../../services/constants";

const Authmiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => {
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthProtected && !localStorage.getItem("authUser")) {
          return <Redirect to={SIGN_IN} />;
        } else if (
          !isAuthProtected &&
          location.pathname === SIGN_IN &&
          localStorage.getItem("authUser")
        ) {
          return <Redirect to={HOME} />;
        }

        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

export default Authmiddleware;
