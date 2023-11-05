import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../api/firebase";
import React, { useEffect, useState } from "react";
import HeaderLogout from "../navbar/Header/HeaderLogout";
import HeaderLogin from "../navbar/Header/HeaderLogin";

const Authentication = () => {
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

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <>{isLogin === null ? <HeaderLogout /> : <HeaderLogin />}</>;
};

export default Authentication;
