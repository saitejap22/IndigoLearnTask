import { TiTick } from "react-icons/ti";
import "./index.css";

const Eligibility = () => {
  return (
    <div className="el-bg">
      <h1 className="el-head">ACCA - Eligibility</h1>
      <hr className="el-line" />
      <div className="el-content">
        <h1 className="el-note">
          To appear for the ACCA course examination a candidate should have
        </h1>
        <p className="el-text">
          <TiTick className="el-icon" /> Qualified the 10+2 exams
        </p>
        <p className="el-text">
          <TiTick className="el-icon" />
          An aggregate of 65% in Mathematics / Accounts and English and a
          minimum of 50% in other subjects
        </p>
      </div>
    </div>
  );
};
export default Eligibility;
