import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const ConfettiButton = () => {
  const [isConfettiActive, setConfettiActive] = useState(false);

  useEffect(() => {
    setConfettiActive(true);

    // Reset the confetti after a short delay (e.g., 2 seconds)
    setTimeout(() => {
      setConfettiActive(false);
    }, 3500);

    // Cleanup the effect
    return () => {
      setConfettiActive(false);
    };
  }, []);

  return (
    <div>
      {isConfettiActive && <Confetti />}
    </div>
  );
};

export default ConfettiButton;
