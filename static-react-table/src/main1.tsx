
import { FileSpreadsheet } from "lucide-react";
import Headermain from "./Headermain";
import './Index.css';
import Spreadsheet from './Spreadsheet';

const Index = () => {
  return (
    <div className="index-container">
      <Headermain />
      <div className="content-area">
        <div className="spreadsheet-container">
          {/* Main content area - spreadsheet would go here */}
          <div className="placeholder-content">
            <Spreadsheet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
