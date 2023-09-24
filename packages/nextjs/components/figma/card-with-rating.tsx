import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./card-with-rating.module.css";

type CardWithRatingType = {
  imageId?: string;
  carVersionCarRating?: string;
  locationName?: string;
  staySize?: string;
  distance?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propCursor?: CSSProperties["cursor"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];

  /** Action props */
  onCard3ContainerClick?: () => void;
};

const CardWithRating: NextPage<CardWithRatingType> = ({
  imageId,
  carVersionCarRating,
  locationName,
  staySize,
  distance,
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
    <div
      className={styles.card3}
      onClick={onCard3ContainerClick}
      style={card3Style}
    >
      <img className={styles.image18Icon} alt="" src={imageId} />
      <div className={styles.parent}>
        <div className={styles.div}>{carVersionCarRating}</div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
      <i className={styles.pier60} style={pier60Style}>
        {locationName}
      </i>
      <i className={styles.stays}>{staySize}</i>
      <i className={styles.mi}>{distance}</i>
    </div>
  );
};

export default CardWithRating;
