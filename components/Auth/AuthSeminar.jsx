import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../service/firebaseApp";
import React, { useEffect, useState } from "react";
import SeminarNonMemberCards from "../card/SeminarNonMemberCards";
import SeminarMemberCards from "../card/SeminarMemberCards ";

const AuthSeminar = () => {
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
      {isLogin === null ? <SeminarNonMemberCards /> : <SeminarMemberCards />}
    </>
  );
};

export default AuthSeminar;
