import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from "../../context/authcontext";
import LoadingSpinners from "./LoadingSpinners";

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <LoadingSpinners />;
  }

  if (!user) {
    // Not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    // Wrong role, redirect to appropriate dashboard or login
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;