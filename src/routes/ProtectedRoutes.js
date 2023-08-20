import { Outlet, Navigate } from "react-router-dom";

import { useUser } from "../context";

export const ProtectedRoutes = () => {

  const { _id } = useUser();

  return (
    (JSON.parse(localStorage.getItem("userId")) === _id) ? <Outlet/> : <Navigate to="/login" />
  )
}
