import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Footer from "../components/figma/footer";
import FormHeader from "../components/figma/form-header";
import styles from "./mint-the-key.module.css";

const MintTheKey: NextPage = () => {
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

  const onButtonContainerClick = useCallback(() => {
    router.push("/user-profile");
  }, [router]);

  return (
    <div className={styles.mintTheKey}>
      <Footer
        propTop="984px"
        propBackgroundColor="#010b49"
        propCursor="pointer"
        propCursor1="unset"
        onLogoContainerClick={onLogoContainerClick}
      />
      <div className={styles.informationParent}>
        <div className={styles.information}>
          <img className={styles.image18Icon} alt="" src="/image-182@2x.png" />
          <img
            className={styles.informationChild}
            alt=""
            src="/rectangle-2.svg"
          />
        </div>
        <div className={styles.button} onClick={onButtonContainerClick}>
          <div className={styles.buttonChild} />
          <div className={styles.mintKey}>MINT KEY</div>
        </div>
        <i className={styles.wannaMetastay}>
          <span className={styles.wannaMetastayTxtContainer}>
            <p className={styles.venueCapacity}>Wanna MetaStay?</p>
          </span>
        </i>
        <div className={styles.frameChild} />
        <b className={styles.b}>5.0</b>
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
      </div>
      <div className={styles.welcomeToPierContainer}>
        <span>{`Welcome to `}</span>
        <b>Pier Sixty</b>
        <span>{`, New York's premier event venue located in the heart of Chelsea Piers. This stunning waterfront location offers unparalleled views of the Hudson River and the iconic Manhattan skyline, making it the perfect backdrop for your next event. `}</span>
      </div>
      <div className={styles.venueCapacityCocktailContainer}>
        <p className={styles.venueCapacity}>Venue Capacity:</p>
        <ul className={styles.cocktailReceptionUpTo200}>
          <li className={styles.seatedDinnerUpTo1200Gue}>
            <span>Cocktail Reception: Up to 2,000 guests</span>
          </li>
          <li className={styles.seatedDinnerUpTo1200Gue}>
            <span>Seated Dinner: Up to 1,200 guests</span>
          </li>
          <li className={styles.seatedDinnerUpTo1200Gue}>
            <span>Conference Style: Up to 800 guests</span>
          </li>
          <li className={styles.seatedDinnerUpTo1200Gue}>
            <span>Theater Style: Up to 500 guests</span>
          </li>
        </ul>
        <p className={styles.venueCapacity}>&nbsp;</p>
        <p className={styles.venueCapacity}>
          <i>{`great food, amazing view, incredible service `}</i>
          <span className={styles.from}>{`from `}</span>
          <b className={styles.from}>Lens</b>
        </p>
      </div>
      <FormHeader
        dimensions="/notification1.svg"
        propCursor="unset"
        propColor="#ab4216"
        propCursor1="pointer"
        propWidth="210px"
        propHeight="97px"
        propWidth1="25px"
        propCursor2="unset"
        onMETASTAYSText1Click={onMETASTAYSTextClick}
        onRadioClick={onRadioClick}
      />
      <img className={styles.headHouseIcon} alt="" src="/headhouse3.svg" />
    </div>
  );
};

export default MintTheKey;
