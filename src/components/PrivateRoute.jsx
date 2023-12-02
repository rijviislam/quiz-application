// import { Route, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// export default function PrivateRoute({ element: Component, ...rest }) {
//   const { currentUser } = useAuth();
//   const navigate = useNavigate();
//   return currentUser ? (
//     <Route {...rest}>{(props) => <Component {...props} />}</Route>
//   ) : (
//     navigate("/login")
//   );
// }

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ element: Component, ...rest }) {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}
