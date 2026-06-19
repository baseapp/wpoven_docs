// src/components/privacyPolicy.js
import React, { useEffect, useState } from 'react';
import './privacyPolicy.css'; // Optional: For styling the modal

const PrivacyPolicy = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // Check if the user has already accepted the policy
    const hasAccepted = localStorage.getItem('privacyPolicyAccepted');
    if (!hasAccepted) {
      setShowPopup(true); // Show the popup if not accepted
    }
  }, []);

  const handleAccept = () => {
    //localStorage.setItem('privacyPolicyAccepted', 'true'); // Save acceptance in localStorage
    setShowPopup(false); // Hide the popup
  };

  if (!showPopup) {
    return null; // Don't render anything if the popup shouldn't be shown
  }

  return (
    <div className="privacy-popup-overlay">
      <div className="privacy-popup">
        <h2>Privacy & Policy</h2>
        <p>
          We use cookies and similar technologies to improve your experience on our site. By continuing to use our site, you agree to our{' '}
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          .
        </p>
        <button onClick={handleAccept}>Accept</button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;