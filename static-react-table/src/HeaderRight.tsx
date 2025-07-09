import React from 'react';
import { User } from 'lucide-react';
import "./HeaderRight.css";

const HeaderRight: React.FC = () => {
  return (
    <div className="header-right-container">
      <div className="user-info">
        <User className="user-icon" />
        <span className="user-name">Ami Bajpai</span>
      </div>
      <button className="new-action-button">New Action</button>
    </div>
  );
};

export default HeaderRight;
