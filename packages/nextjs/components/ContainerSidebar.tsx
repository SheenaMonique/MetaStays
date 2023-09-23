import { FunctionComponent } from "react";
import "./ContainerSidebar.css";

const ContainerSidebar: FunctionComponent = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-child" />
      <div className="frame-group">
        <img className="frame-inner" alt="" src="/frame-14.svg" />
        <div className="skellyman0218">{`@Skellyman0218 `}</div>
      </div>
      <div className="rectangle-group">
        <div className="rectangle-div" />
        <div className="edit-profile-button">
          <div className="edit-profile-button-child" />
          <i className="go-to-lens">Go to Lens</i>
        </div>
        <div className="skelly-smith">
          <p className="p">Skelly Smith</p>
          <p className="p">&nbsp;</p>
          <p className="p">&nbsp;</p>
          <p className="p">&nbsp;</p>
          <p className="p">{`   `}</p>
        </div>
      </div>
    </div>
  );
};

export default ContainerSidebar;
