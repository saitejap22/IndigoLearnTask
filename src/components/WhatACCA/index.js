import {
  BsFillJournalBookmarkFill,
  BsLaptop,
  BsCalendarDate,
} from "react-icons/bs";
import { MdTimer } from "react-icons/md";

import "./index.css";

const WhatACCA = () => {
  return (
    <div className="what-bg">
      <h1 className="what-head">What is ACCA?</h1>
      <hr className="what-hr" />
      <div className="what-div">
        <ul className="what-ul">
          <li className="what-li">
            ACCA (Association of Charterted Certified Accountants) is globally
            recognized accounting qualification offered by ACCA Global, UK
          </li>
          <li className="what-li">
            It provides unlimited career opportunities with MNCs and Big4s
          </li>
          <li className="what-li">
            A course which you can complete along with your graduation
          </li>
          <li className="what-li">
            It has 2 lakh + members & 5 lakh + students across 180+ countries
          </li>
        </ul>
        <ul className="ul-two">
          <li className="li-two">
            <p className="li-text">
              Levels
              <p className="span-li">
                <BsFillJournalBookmarkFill /> Three (13 Papers)
              </p>
            </p>
          </li>
          <li className="li-two">
            <p className="li-text">
              Duration
              <p className="span-li">
                <MdTimer /> 6-30 months
              </p>
            </p>
          </li>
          <li className="li-two">
            <p className="li-text">
              Exams
              <p className="span-li">
                <BsLaptop /> Quarterly(online)
              </p>
            </p>
          </li>
          <li className="li-two">
            <p className="li-text">
              Exemptions
              <p className="span-li">
                <BsCalendarDate /> Available
              </p>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default WhatACCA;
