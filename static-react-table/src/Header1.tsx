
import React from 'react';
import './Header1.css';

const Header1: React.FC = () => {
  return (
    <div className="breadcrumb-container">
      <span>Workspace</span>
      <span className="breadcrumb-separator">{'>'}</span>
      <span>Folder 2</span>
      <span className="breadcrumb-separator">{'>'}</span>
      <span className="breadcrumb-current">Spreadsheet 3</span>
    </div>
  );
};

export default Header1;
