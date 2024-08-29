import React from 'react';

const Popup = ({ algo, onClose }) => {
    return (
      <div className="popup">
        <div className="popup-content">
          <h2>{algo.name}</h2>
          <p>{algo.description}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };

export default Popup;