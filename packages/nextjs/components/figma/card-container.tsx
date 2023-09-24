
import styles from "./card-container.module.css";
import type { NextPage } from "next";
const CardContainer: NextPage = () => {
  return (
    <div className={styles.card1}>
      <img className={styles.image16Icon} alt="" src="/image-161@2x.png" />
      <i className={styles.cantuAve}>321 Cantu ave</i>
      <i className={styles.mi}>2.1 mi</i>
      <i className={styles.stays}>1132 stays</i>
      <div className={styles.parent}>
        <div className={styles.div}>4.7</div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
    </div>
  );
};

export default CardContainer;
