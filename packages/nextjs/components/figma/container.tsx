import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./container.module.css";

const Container: NextPage = () => {
  const router = useRouter();

  const onNoPropertiesOwnedClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonContainerClick = useCallback(() => {
    router.push("/user-profile");
  }, [router]);

  const onWantToUploadClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.noPropertiesOwnedParent}>
      <div
        className={styles.noPropertiesOwnedContainer}
        onClick={onNoPropertiesOwnedClick}
      >
        <span className={styles.noPropertiesOwnedContainer1}>
          <p className={styles.noPropertiesOwned}>No properties owned.</p>
        </span>
      </div>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <div className={styles.buttonChild} data-scroll-to="rectangle" />
        <div className={styles.addProperty}>ADD PROPERTY</div>
      </div>
      <i className={styles.wantToUpload} onClick={onWantToUploadClick}>
        Want to upload your property for rent?
      </i>
      <div className={styles.unlock1Parent} onClick={onFrameContainerClick}>
        <img className={styles.unlock1Icon} alt="" src="/unlock-1@2x.png" />
        <div className={styles.createAProperty}>
          Create a Property Lock with
        </div>
      </div>
    </div>
  );
};

export default Container;
