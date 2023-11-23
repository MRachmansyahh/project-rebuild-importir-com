import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../service/firebaseApp";
import React, { useEffect, useState } from "react";
import SeminarNonMemberCards from "../card/SeminarNonMemberCards";
import SeminarMemberCards from "../card/SeminarMemberCards ";

const AuthSeminar = () => {
  const [isLogin, setIsLogin] = useState(null);

  useEffect(() => {
    const user = auth.currentUser
      if (user) {
        setIsLogin(user);
      } else {
        setIsLogin(null);
      }
    }, []);

  console.log("isLogin", isLogin);

  return (
    <>
      {isLogin === null ? <SeminarNonMemberCards /> : <SeminarMemberCards />}
    </>
  );
};

export default AuthSeminar;
