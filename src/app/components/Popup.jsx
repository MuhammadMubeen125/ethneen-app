'use client';

import React from 'react';

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="popup">
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
