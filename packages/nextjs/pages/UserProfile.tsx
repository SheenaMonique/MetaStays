import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import OwnedPropertiesContainer from "../components/OwnedPropertiesContainer";
import Footer from "../components/Footer";
import FormHeader from "../components/FormHeader";
import ContainerSidebar from "../components/ContainerSidebar";
import RecentStaysContainer from "../components/RecentStaysContainer";
import "./UserProfile.css";

const UserProfile: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRadioClick = useCallback(() => {
    navigate("/no-properties-to-manage");
  }, [navigate]);

  return (
    <div className="user-profile">
      <OwnedPropertiesContainer />
      <Footer />
      <FormHeader onRadioClick={onRadioClick} />
      <ContainerSidebar />
      <div className="recent-stays">
        <div className="recent-stays-child" />
        <div className="frame-parent">
          <div className="rectangle-parent">
            <div className="frame-child" />
            <div className="recent-stays1">Recent Stays</div>
          </div>
          <RecentStaysContainer />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
