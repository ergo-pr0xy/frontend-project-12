import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ChatPage = () => {
  const token = useSelector((state) => state.auth.token);
  const error = useSelector((state) => state.auth.errorMessage);

  if (!token && !error) {
    return <Navigate to="/login" />;
  }
  return (
    <div id="chat">
      <div>
        <h1>Чат будет здесь, но позже...</h1>
      </div>
    </div>
  );
};

export default ChatPage;
