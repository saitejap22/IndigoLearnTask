import "./index.css";

const Banner = () => {
  return (
    <div className="banner-bg">
      <div className="left-section">
        <h1 className="banner-head">Get Ready to be a Global CA</h1>
        <p className="banner-text">
          Acquire the ACCA qualification to join the league of Global Accounting
          & Finance Professionals
        </p>
        <div className="banner-btns">
          <button className="blue-btn">Download Brochure</button>
          <button className="red-btn">
            SILVER LEARNING PARTNER <span className="red-span">ACCA</span>
          </button>
        </div>
      </div>
      <div className="right-section">
        <form className="form">
          <h1 className="form-head">
            Aspiring to be CA ? Get in touch with us!
          </h1>
          <div className="input-div">
            <input type="email" placeholder="Email ID" className="input" />
          </div>
          <div className="input-div">
            <input type="tel" placeholder="Phone number" className="input" />
          </div>
          <button className="form-btn">Request Call Back</button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
