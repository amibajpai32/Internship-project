import React from 'react';
import './Header3.css';

const Header3: React.FC = () => {
  return (
    <div className="header3-container">
      <div className="header3-left">
        <button className="tab-button active-tab">Q3 Financial Overview</button>
      </div>

      <div className="header3-right">
        <button className="tab-button">Answer a question</button>
        <button className="tab-button">Extract</button>
        <button className="tab-button add-button">+</button>
      </div>
    </div>
  );
};

export default Header3;
