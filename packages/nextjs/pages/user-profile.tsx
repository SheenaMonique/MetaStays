import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import OwnedPropertiesContainer from "../components/figma/owned-properties-container";
import Footer from "../components/figma/footer";
import FormHeader from "../components/figma/form-header";
import RecentStaysContainer from "../components/figma/recent-stays-container";
import styles from "./user-profile.module.css";

const UserProfile: NextPage = () => {
  const router = useRouter();

  const onLogoContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onMETASTAYSTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onRadioClick = useCallback(() => {
    router.push("/no-properties-to-manage");
  }, [router]);

  return (
    <div className={styles.userProfile}>
      <OwnedPropertiesContainer />
      <Footer onLogoContainerClick={onLogoContainerClick} />
      <FormHeader
        dimensions="/notification.svg"
        onMETASTAYSText1Click={onMETASTAYSTextClick}
        onRadioClick={onRadioClick}
      />
      <div className={styles.userProfileChild} />
      <img className={styles.userProfileItem} alt="" src="/ellipse-1.svg" />
      <img className={styles.userProfileInner} alt="" src="/ellipse-2.svg" />
      <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
      <div className={styles.skellyman0218}>{`@Skellyman0218 `}</div>
      <div className={styles.editProfileButton}>
        <div className={styles.editProfileButtonChild} />
        <div className={styles.goToLens}>GO TO LENS</div>
      </div>
      <i className={styles.skellymanlens}>{`@skellyman.lens `}</i>
      <div className={styles.recentStays}>
        <div className={styles.recentStaysChild} />
        <div className={styles.frameParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.editProfileButtonChild} />
            <div className={styles.recentStays1}>Recent Stays</div>
          </div>
          <RecentStaysContainer />
        </div>
      </div>
      <div className={styles.skellySmith}>
        <p className={styles.blankLine}>Skelly Smith</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>{`   `}</p>
      </div>
      <img
        className={styles.iconTGreen2x1}
        alt=""
        src="/icontgreen-2x-1@2x.png"
      />
    </div>
  );
};

export default UserProfile;
