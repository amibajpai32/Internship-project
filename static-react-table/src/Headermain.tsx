
import React from "react";
import Header1 from './Header1';
import HeaderRight from './HeaderRight';
import Header2 from "./Header2";
import Header3 from "./Header3";
import './Headermain.css';
import Header2Right from "./Header2Right";

const Headermain: React.FC = () => {
    return(
        <div className="headermain-container">
            <div className="header-wrapper">
                <Header1 />
                <HeaderRight />
            </div>
            <div className="header-bar">
                <Header2 />
               
            </div>
            <div>
                <Header3 />
            </div>
        </div>
    )
}

export default Headermain;
