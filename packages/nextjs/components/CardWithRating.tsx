import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./CardWithRating.css";

type CardWithRatingType = {
  image18?: string;
  prop?: string;
  pier60?: string;
  stays?: string;
  mi?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propCursor?: CSSProperties["cursor"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];

  /** Action props */
  onCard3ContainerClick?: () => void;
};

const CardWithRating: FunctionComponent<CardWithRatingType> = ({
  image18,
  prop,
  pier60,
  stays,
  mi,
  propLeft,
  propCursor,
  propWidth,
  propHeight,
  onCard3ContainerClick,
}) => {
  const card3Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      cursor: propCursor,
    };
  }, [propLeft, propCursor]);

  const pier60Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className="card-3" onClick={onCard3ContainerClick} style={card3Style}>
      <img className="image-18-icon2" alt="" src={image18} />
      <div className="parent">
        <div className="div">{prop}</div>
        <img className="vector-icon1" alt="" src="/vector1.svg" />
      </div>
      <i className="pier-60" style={pier60Style}>
        {pier60}
      </i>
      <i className="stays1">{stays}</i>
      <i className="mi">{mi}</i>
    </div>
  );
};

export default CardWithRating;
