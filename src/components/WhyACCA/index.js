import { AiOutlineBulb, AiFillLike } from "react-icons/ai";
import {
  BsFillPersonFill,
  BsPerson,
  BsLaptop,
  BsNewspaper,
} from "react-icons/bs";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { HiBadgeCheck } from "react-icons/hi";
import "./index.css";

const WhyACCA = () => {
  return (
    <div className="why-div">
      <h1 className="why-head">Why ACCA @1FIN?</h1>
      <hr className="why-line" />
      <ul className="why-ul">
        <li className="why-li">
          <div className="why-top">
            <AiOutlineBulb size={35} color="#ffffff" />
            <p className="why-top-text">Conceptual</p>
          </div>
          <div className="why-bottom"></div>
          <p className="why-btm-text">
            <BsLaptop /> Regular Live Classes
          </p>
          <p className="why-btm-text">
            <BsFillPersonFill /> Expert Faculty
          </p>
          <p className="why-btm-text">
            <BsNewspaper /> Exam Oriented Content
          </p>
          <p className="why-btm-text">
            <MdOutlineScreenSearchDesktop /> Dedicated Dicussions Forms
          </p>
          <p className="why-btm-text">
            <BsPerson /> Continuous Support
          </p>
        </li>

        <li className="why-li">
          <div className="why-top">
            <BsFillPersonFill size={35} color="#ffffff" />
            <p className="why-top-text">Comprehensive</p>
          </div>
          <div className="why-bottom"></div>
          <p className="why-btm-text">
            <BsLaptop /> Exhaustive Q&A Bank
          </p>
          <p className="why-btm-text">
            <BsFillPersonFill /> 1000s of MCQs for practice
          </p>
          <p className="why-btm-text">
            <HiBadgeCheck /> Tests at regular intervals
          </p>
          <p className="why-btm-text">
            <BsNewspaper /> Mock exams
          </p>
          <p className="why-btm-text">
            <AiOutlineBulb /> Analysis of answer sheets
          </p>
        </li>

        <li className="why-li">
          <div className="why-top">
            <HiBadgeCheck size={35} color="#ffffff" />
            <p className="why-top-text">Career Oriented</p>
          </div>
          <div className="why-bottom"></div>
          <p className="why-btm-text">
            <BsLaptop /> Business Communication
          </p>
          <p className="why-btm-text">
            <BsFillPersonFill /> Resume Building
          </p>
          <p className="why-btm-text">
            <AiFillLike /> Negotiation Skills
          </p>
          <p className="why-btm-text">
            <BsNewspaper /> Mock Interviews
          </p>
          <p className="why-btm-text">
            <MdOutlineScreenSearchDesktop /> Placement Services
          </p>
        </li>
      </ul>
      <div className="note-link">
        <h1 className="why-note">
          Live Classes Starts from late September,2022.{" "}
        </h1>
        <a
          href="https://www.indigolearn.com/"
          target="__blank"
          className="link"
        >
          Click here to Enroll Now.
        </a>
      </div>
      <button className="why-btn">
        SILVER LEARNING PARTNER <span className="why-span">ACCA</span>
      </button>
    </div>
  );
};
export default WhyACCA;
