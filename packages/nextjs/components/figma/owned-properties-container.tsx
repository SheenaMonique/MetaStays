import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./owned-properties-container.module.css";

const OwnedPropertiesContainer: NextPage = () => {
  const router = useRouter();

  const onButtonContainerClick = useCallback(() => {
    router.push("/user-profile");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.ownedProperties}>
      <div className={styles.ownedPropertiesChild} />
      <div className={styles.ownedPropertiesItem} />
      <div className={styles.ownedProperties1}>
        <div className={styles.ownedPropertiesInner} />
        <div className={styles.ownedProperties2}>Owned Properties</div>
      </div>
      <div className={styles.noPropertiesOwnedContainer}>
        <p className={styles.noPropertiesOwned}>No properties owned.</p>
      </div>
      <img className={styles.headHouseIcon} alt="" src="/headhouse.svg" />
      <div className={styles.frameDiv} />
      <div className={styles.button} onClick={onButtonContainerClick}>
        <div className={styles.buttonChild} data-scroll-to="rectangle" />
        <div className={styles.addProperty}>ADD PROPERTY</div>
      </div>
      <div className={styles.unlock1Parent} onClick={onFrameContainerClick}>
        <img className={styles.unlock1Icon} alt="" src="/unlock-1@2x.png" />
        <div className={styles.createAProperty}>
          Create a Property Lock with
        </div>
      </div>
    </div>
  );
};

export default OwnedPropertiesContainer;
