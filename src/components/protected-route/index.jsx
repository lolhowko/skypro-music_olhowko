import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({  redirectPath = "/Auth" }) => {
  if (!localStorage.getItem('auth')) {
    return  <Navigate to={redirectPath} replace={true} />;
  }

  return  <Outlet />;
};