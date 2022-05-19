import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "./firebase.init";
import Loading from "./Loading";

function RequireAuth({ children }) {
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();
  if (loading) {
    return <Loading></Loading>
  }
  if (error) {
    toast(error.message)
  }

  if (!user) {

    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
export default RequireAuth;