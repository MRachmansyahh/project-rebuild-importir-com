import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../service/firebaseApp";
import React, { useEffect, useState } from "react";
import HeaderLogout from "../navbar/Header/HeaderLogout";
import HeaderLogin from "../navbar/Header/HeaderLogin";

const AuthHeader = () => {
  const [isLogin, setIsLogin] = useState(null);

  useEffect(() => {
    const listenAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(user);
      } else {
        setIsLogin(null);
      }
    });
    return () => {
      listenAuth();
    };
  }, []);

  return (
    <>
      {isLogin === null ? <HeaderLogout /> : <HeaderLogin />}
    </>
  );
};

export default AuthHeader;
