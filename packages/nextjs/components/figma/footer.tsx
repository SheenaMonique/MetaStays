import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./footer.module.css";

type FooterType = {
  /** Style props */
  propTop?: CSSProperties["top"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propCursor?: CSSProperties["cursor"];
  propCursor1?: CSSProperties["cursor"];

  /** Action props */
  onLogoContainerClick?: () => void;
  onMETASTAYSText1Click?: () => void;
};

const Footer: NextPage<FooterType> = ({
  propTop,
  propBackgroundColor,
  propCursor,
  propCursor1,
  onLogoContainerClick,
  onMETASTAYSText1Click,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      backgroundColor: propBackgroundColor,
    };
  }, [propTop, propBackgroundColor]);

  const logoStyle: CSSProperties = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const mETASTAYSStyle: CSSProperties = useMemo(() => {
    return {
      cursor: propCursor1,
    };
  }, [propCursor1]);

  return (
    <footer className={styles.footer} style={footerStyle}>
      <div className={styles.fickleflightBio}>
        <div
          className={styles.logo}
          onClick={onLogoContainerClick}
          style={logoStyle}
        >
          <div
            className={styles.metastays}
            style={mETASTAYSStyle}
            onClick={onMETASTAYSText1Click}
          >
            METASTAYS
          </div>
        </div>
        <div className={styles.whereRealEstate}>
          Where Real Estate Meets the Metaverse
        </div>
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.company}>
          <div className={styles.aboutUs}>About Us</div>
          <b className={styles.company1}>Company</b>
          <div className={styles.news}>News</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
