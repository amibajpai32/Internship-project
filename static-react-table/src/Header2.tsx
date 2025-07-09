import React from 'react';
import './Header2.css';

const Header2: React.FC = () => {
  return (
    <div className="header2-container">
      <div className="header2-left">
        <button className="header2-button active">Tool Bar</button>
        <button className="header2-button inactive">Hide fields</button>
        <button className="header2-button inactive">Sort</button>
        <button className="header2-button inactive">Filter</button>
        <button className="header2-button inactive">Cell View</button>
      </div>

      <div className="header2-right"> 
        <button className="header2-button inactive">Import</button>
        <button className="header2-button inactive">Export</button>
        <button className="header2-button inactive">Share</button>
        <button className="header2-button inactive">New Action</button>
      </div>
    </div>
  );
};

export default Header2;
