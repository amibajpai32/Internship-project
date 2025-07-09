
import React from 'react';
import './Header2Right.css';

const Header2Right: React.FC = () => {
  const buttons = [
    { label: 'Import', active: true },
    { label: 'Export', active: false },
    { label: 'Share', active: false },
    { label: 'New Action', active: false },
    
  ];

  return (
    <div className="container">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`button ${button.active ? 'active' : 'inactive'}`}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default Header2Right;
