import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import CardWithRating from "../components/CardWithRating";
import CardContainer1 from "../components/CardContainer1";
import FormHeader from "../components/FormHeader";
import SearchFormContainer from "../components/SearchFormContainer";
import "./BookHousing.css";

const BookHousing: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCard3ContainerClick = useCallback(() => {
    navigate("/mint-the-key");
  }, [navigate]);

  const onRadioClick = useCallback(() => {
    navigate("/no-properties-to-manage");
  }, [navigate]);

  return (
    <div className="book-housing">
      <div className="background" />
      <Footer propTop="1080px" />
      <Footer propTop="1080px" />
      <CardWithRating
        image18="/image-182@2x.png"
        prop="5.0"
        pier60="Pier 60"
        stays="400 stays"
        mi="3.5 mi"
        onCard3ContainerClick={onCard3ContainerClick}
      />
      <CardWithRating
        image18="/image-171@2x.png"
        prop="1.0"
        pier60="Murder House"
        stays="5 stays"
        mi="2.4 mi"
        propLeft="682px"
        propCursor="unset"
        propWidth="200px"
        propHeight="45px"
      />
      <CardContainer1 />
      <FormHeader propCursor="unset" onRadioClick={onRadioClick} />
      <SearchFormContainer />
      <img className="head-house-icon2" alt="" src="/headhouse.svg" />
    </div>
  );
};

export default BookHousing;
