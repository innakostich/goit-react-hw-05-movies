
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundView() {
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate('/');
  };

  return (
    <>
      <h2>404 Not Found</h2>
      <button type="button" onClick={onGoBack}>
        Go home
      </button>
    </>
  );
}
