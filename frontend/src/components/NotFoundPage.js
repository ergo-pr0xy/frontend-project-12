import React from 'react';
import { useSelector } from 'react-redux';

const NotFoundPage = () => {
  const currentState = useSelector((state) => state.auth);

  console.log(currentState);

  return (
    <div className="container">
      <div className="vertical-center form-width">
        <div>
          <h1>Упс...</h1>
          <p>Похоже, такой страницы не существует</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
