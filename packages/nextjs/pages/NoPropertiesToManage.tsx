import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import FormHeader from "../components/FormHeader";
import "./NoPropertiesToManage.css";

const NoPropertiesToManage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRadioClick = useCallback(() => {
    navigate("/no-properties-to-manage");
  }, [navigate]);

  const onRadio1Click = useCallback(() => {
    navigate("/book-housing");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  return (
    <div className="no-properties-to-manage">
      <Footer propTop="878px" />
      <FormHeader
        propCursor="pointer"
        onRadioClick={onRadioClick}
        onRadio1Click={onRadio1Click}
      />
      <div className="no-properties-owned-container">
        <p className="no-properties-owned">No properties owned.</p>
      </div>
      <div className="button1" onClick={onButtonContainerClick}>
        <div className="button-item" />
        <div className="create-lock">CREATE LOCK</div>
      </div>
      <i className="want-to-manage">Want to manage a property?</i>
      <img className="head-house-icon1" alt="" src="/headhouse.svg" />
    </div>
  );
};

export default NoPropertiesToManage;
