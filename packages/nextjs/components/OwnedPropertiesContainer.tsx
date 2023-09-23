import { FunctionComponent } from "react";
import "./OwnedPropertiesContainer.css";

const OwnedPropertiesContainer: FunctionComponent = () => {
  return (
    <div className="owned-properties">
      <div className="owned-properties-child" />
      <div className="owned-properties-item" />
      <div className="owned-properties1">
        <div className="owned-properties-inner" />
        <div className="owned-properties2">Owned Properties</div>
      </div>
      <div className="no-properties-owned-container1">
        <p className="no-properties-owned1">No properties owned.</p>
      </div>
      <img className="head-house-icon4" alt="" src="/headhouse.svg" />
    </div>
  );
};

export default OwnedPropertiesContainer;
