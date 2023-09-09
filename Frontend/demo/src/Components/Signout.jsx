import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignOutPage = () => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSignOut = () => {
    // Perform sign-out logic here
    // For example, clear session, cookies, or access tokens

    // After sign-out logic, navigate to a different page (e.g., home)
    navigate('/');
  };

  return (
    <div className="signout-page">
      <h1>Sign Out</h1>
      {!showConfirmation ? (
        <>
          <p>Are you sure you want to sign out?</p>
          <button onClick={() => setShowConfirmation(true)}>Yes</button>
          <button onClick={() => navigate('/')}>No</button>
        </>
      ) : (
        <>
          <p>Are you really sure you want to sign out?</p>
          <button onClick={handleSignOut}>Confirm Sign Out</button>
          <button onClick={() => setShowConfirmation(false)}>Cancel</button>
        </>
      )}
    </div>
  );
};

export default SignOutPage;
