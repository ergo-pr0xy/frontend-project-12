import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateOutlet = () => {
  const token = useSelector((state) => state.auth.token);

  if (token) {
    return (
      <Outlet />
    );
  }
  return <Navigate to="/login" />;
};

export default PrivateOutlet;
