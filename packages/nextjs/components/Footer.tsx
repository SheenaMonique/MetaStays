import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Footer.css";

type FooterType = {
  /** Style props */
  propTop?: CSSProperties["top"];
};

const Footer: FunctionComponent<FooterType> = ({ propTop }) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <footer className="footer" style={footerStyle}>
      <div className="fickleflight-bio">
        <div className="logo1">
          <div className="metastays1">METASTAYS</div>
        </div>
        <div className="where-real-estate">
          Where Real Estate Meets the Metaverse
        </div>
      </div>
      <div className="footer-links">
        <div className="company">
          <div className="about-us">About Us</div>
          <b className="company1">Company</b>
          <div className="news">News</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
