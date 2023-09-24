import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Radio, FormControlLabel } from "@mui/material";
import styles from "./form-header.module.css";

type FormHeaderType = {
  dimensions?: string;

  /** Style props */
  propCursor?: CSSProperties["cursor"];
  propColor?: CSSProperties["color"];
  propCursor1?: CSSProperties["cursor"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propWidth1?: CSSProperties["width"];
  propCursor2?: CSSProperties["cursor"];

  /** Action props */
  onSubheaderContainerClick?: () => void;
  onMETASTAYSText1Click?: () => void;
  onRadioClick?: () => void;
  onRadio1Click?: () => void;
};

const FormHeader: NextPage<FormHeaderType> = ({
  dimensions,
  propCursor,
  propColor,
  propCursor1,
  propWidth,
  propHeight,
  propWidth1,
  propCursor2,
  onSubheaderContainerClick,
  onMETASTAYSText1Click,
  onRadioClick,
  onRadio1Click,
}) => {
  const subheaderStyle: CSSProperties = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const mETASTAYS1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      cursor: propCursor1,
    };
  }, [propColor, propCursor1]);

  const accountSectionStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const hamburgerMenuIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const radioStyle: CSSProperties = useMemo(() => {
    return {
      cursor: propCursor2,
    };
  }, [propCursor2]);

  return (
    <header className={styles.header}>
      <div
        className={styles.subheader}
        style={subheaderStyle}
        onClick={onSubheaderContainerClick}
      >
        <div className={styles.topContainer}>
          <div
            className={styles.metastays}
            onClick={onMETASTAYSText1Click}
            style={mETASTAYS1Style}
          >
            METASTAYS
          </div>
          <i className={styles.whereRealEstate}>
            Where Real Estate Meets the Metaverse
          </i>
          <div className={styles.navigationRight}>
            <div className={styles.accountSection} style={accountSectionStyle}>
              <img
                className={styles.hamburgerMenuIcon}
                alt=""
                src={dimensions}
                style={hamburgerMenuIconStyle}
              />
              <img
                className={styles.capturaDePantalla13481}
                alt=""
                src="/captura-de-pantalla-1348-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.flightType}>
        <FormControlLabel
          className={styles.radio}
          label="Manage Properties"
          labelPlacement="end"
          control={<Radio color="primary" size="medium" />}
          onClick={onRadioClick}
        />
        <FormControlLabel
          className={styles.radio1}
          label="Book a MetaStay"
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
