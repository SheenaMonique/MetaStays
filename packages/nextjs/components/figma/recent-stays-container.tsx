import type { NextPage } from "next";
import styles from "./recent-stays-container.module.css";

const RecentStaysContainer: NextPage = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.oct18thParent}>
        <div className={styles.oct18th}>Oct 18th</div>
        <img className={styles.image18Icon} alt="" src="/image-18@2x.png" />
      </div>
      <div className={styles.nov7thParent}>
        <div className={styles.nov7th}>Nov 7th</div>
        <img className={styles.image19Icon} alt="" src="/image-191@2x.png" />
      </div>
      <div className={styles.murderHouseneverCheckedOutParent}>
        <div className={styles.murderHouseneverChecked}>
          Murder House/Never checked out
        </div>
        <img className={styles.image19Icon} alt="" src="/image-17@2x.png" />
      </div>
      <div className={styles.aug18thParent}>
        <div className={styles.oct18th}>Aug 18th</div>
        <img className={styles.image19Icon} alt="" src="/image-16@2x.png" />
      </div>
    </div>
  );
};

export default RecentStaysContainer;
