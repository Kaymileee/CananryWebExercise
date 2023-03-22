import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig/fbConfig";

const AuthContext = createContext();
function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState();
  const values = { userInfo, setUserInfo };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserInfo(user);
    });
  }, []);
  return <AuthContext.Provider {...props}></AuthContext.Provider>;
}
function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === undefined) {
    throw new Error("ERROR For me");
  }
  return context;
}

export { AuthProvider, useAuth };
