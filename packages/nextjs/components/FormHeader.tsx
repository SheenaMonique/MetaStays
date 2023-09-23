import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Radio, FormControlLabel } from "@mui/material";
import "./FormHeader.css";

type FormHeaderType = {
  /** Style props */
  propCursor?: CSSProperties["cursor"];

  /** Action props */
  onRadioClick?: () => void;
  onRadio1Click?: () => void;
};

const FormHeader: FunctionComponent<FormHeaderType> = ({
  propCursor,
  onRadioClick,
  onRadio1Click,
}) => {
  const radioStyle: CSSProperties = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <header className="header">
      <div className="subheader">
        <div className="top-container">
          <div className="metastays2">METASTAYS</div>
          <i className="where-real-estate1">
            Where Real Estate Meets the Metaverse
          </i>
          <div className="navigation-right">
            <div className="account-section">
              <img
                className="hamburger-menu-icon"
                alt=""
                src="/notification.svg"
              />
              <img
                className="captura-de-pantalla-1348-1"
                alt=""
                src="/captura-de-pantalla-1348-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flight-type">
        <FormControlLabel
          className="radio"
          label="Return"
          labelPlacement="end"
          control={<Radio size="medium" />}
          onClick={onRadioClick}
        />
        <FormControlLabel
          className="radio1"
          label="One-way"
          labelPlacement="end"
          control={<Radio color="primary" checked size="medium" />}
          style={radioStyle}
          onClick={onRadio1Click}
        />
      </div>
    </header>
  );
};

export default FormHeader;
