import { useContext } from "react";
import AuthContext from "../contexts/auth-context";

export default function useAuth() {
  const authCtx = useContext(AuthContext);
  const auth = authCtx.isLoggedIn;
  return auth;
}
