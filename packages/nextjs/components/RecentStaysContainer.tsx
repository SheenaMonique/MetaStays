import { FunctionComponent } from "react";
import "./RecentStaysContainer.css";

const RecentStaysContainer: FunctionComponent = () => {
  return (
    <div className="rectangle-container">
      <div className="frame-child1" />
      <div className="oct-18th-parent">
        <div className="oct-18th">Oct 18th</div>
        <img className="image-18-icon1" alt="" src="/image-18@2x.png" />
      </div>
      <div className="nov-7th-parent">
        <div className="nov-7th">Nov 7th</div>
        <img className="image-19-icon" alt="" src="/image-19@2x.png" />
      </div>
      <div className="sep-22nd-parent">
        <div className="nov-7th">Sep 22nd</div>
        <img className="image-19-icon" alt="" src="/image-17@2x.png" />
      </div>
      <div className="aug-18th-parent">
        <div className="nov-7th">Aug 18th</div>
        <img className="image-19-icon" alt="" src="/image-16@2x.png" />
      </div>
    </div>
  );
};

export default RecentStaysContainer;
