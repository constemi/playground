import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

const AuthMiddleware: React.FC = (props: any) => {
  const [needLoginPage, setNeedLoginPage] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem("authToken")) {
      setNeedLoginPage(true);
    } else {
      setNeedLoginPage(false);
    }
  }, []);

  return <>{needLoginPage ? <Redirect to="/login" /> : props.children}</>;
};

export default AuthMiddleware;
