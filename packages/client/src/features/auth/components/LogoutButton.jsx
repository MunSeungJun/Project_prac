import React from 'react';
import { useDispatch } from 'react-redux';
import { setLogout } from '../authApi';

const LogoutButton = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => setLogout(dispatch)}>logout</button>
    </>
  );
};

export default LogoutButton;
