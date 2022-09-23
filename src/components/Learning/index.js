import { GoPrimitiveDot } from "react-icons/go";
import "./index.css";

const Learning = () => {
  return (
    <div className="le-div">
      <h1 className="le-head">What will you Learn in ACCA?</h1>
      <hr className="le-line" />
      <ul className="le-ul">
        <li className="le-li">
          <div className="le-top">
            <p className="le-top-text">Knowledge Level</p>
          </div>
          <div className="le-bottom">
            <p className="le-btm-text">
              <GoPrimitiveDot />
              Business and Technology (BT)
            </p>
            <p className="le-btm-text">
              <GoPrimitiveDot />
              Management Accounting (MA)
            </p>
            <p className="le-btm-text">
              <GoPrimitiveDot /> Financial Accounting (FA)
            </p>
            <button className="le-btn">Enroll Now</button>
          </div>
        </li>

        <li className="le-li">
          <div className="le-top">
            <p className="le-top-text">Skill Level</p>
          </div>
          <div className="le-bottom">
            <p className="le-btm-text">
              <GoPrimitiveDot /> Corporate and Business Law (LW)
            </p>
            <p className="le-btm-text">
              <GoPrimitiveDot />
              Performance Management (PM)
            </p>
            <p className="le-btm-text">
              <GoPrimitiveDot />
              Taxation (TX)
            </p>
            <p className="le-btm-text">
              <GoPrimitiveDot />
              Financial Reporting (FR)
            </p>
            <p className="le-btm-text">
              <GoPrimitiveDot />
              Audit and Assurance (AA)
            </p>
            <p className="le-btm-text">
              <GoPrimitiveDot />
              Financial Management (FM)
            </p>
            <button className="le-btn">Enroll Now</button>
          </div>
        </li>

        <li className="le-li">
          <div className="le-top">
            <p className="le-top-text">Professional Level</p>
          </div>
          <div className="le-bottom">
            <h1 className="le-caution"> Compulsory</h1>
            <p className="le-btm-text">
              <GoPrimitiveDot /> SBL - Strategic Business Leader
            </p>
            <p className="le-btm-text">
              <GoPrimitiveDot /> SBR - Strategic Business Reporting
            </p>
            <h1 className="le-caution">
              <GoPrimitiveDot /> Two out of the following
            </h1>
            <p className="le-btm-text">
              <GoPrimitiveDot />
              Advanced Financial Management (AFM)
            </p>
            <p className="le-btm-text">
              <GoPrimitiveDot />
              Advanced Performance Management (APM)
            </p>
            <p className="le-btm-text">
              <GoPrimitiveDot />
              Advanced Taxation (ATX)
            </p>
            <p className="le-btm-text">
              <GoPrimitiveDot />
              Advanced Audit and Assurance(AAA)
            </p>
            <button className="le-btn">Enroll Now</button>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Learning;
