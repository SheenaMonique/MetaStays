import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Footer from "../components/figma/footer";
import CardWithRating from "../components/figma/card-with-rating";
import CardContainer from "../components/figma/card-container";
import FormHeader from "../components/figma/form-header";
import SearchFormContainer from "../components/figma/search-form-container";
import styles from "./book-housing.module.css";

const BookHousing: NextPage = () => {
  const router = useRouter();

  const onMETASTAYSTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onCard3ContainerClick = useCallback(() => {
    router.push("/mint-the-key");
  }, [router]);

  const onRadioClick = useCallback(() => {
    router.push("/no-properties-to-manage");
  }, [router]);

  return (
    <div className={styles.bookHousing}>
      <div className={styles.background} />
      <Footer
        propTop="1080px"
        propBackgroundColor="#ab4216"
        propCursor="unset"
        propCursor1="unset"
      />
      <Footer
        propTop="1080px"
        propBackgroundColor="#010b49"
        propCursor="unset"
        propCursor1="pointer"
        onMETASTAYSText1Click={onMETASTAYSTextClick}
      />
      <CardWithRating
        imageId="/image-181@2x.png"
        carVersionCarRating="5.0"
        locationName="Pier 60"
        staySize="400 stays"
        distance="3.5 mi"
        onCard3ContainerClick={onCard3ContainerClick}
      />
      <CardWithRating
        imageId="/image-171@2x.png"
        carVersionCarRating="1.0"
        locationName="Murder House"
        staySize="5 stays"
        distance="2.4 mi"
        propLeft="682px"
        propCursor="unset"
        propWidth="200px"
        propHeight="45px"
      />
      <CardContainer />
      <FormHeader
        dimensions="/notification.svg"
        propCursor="unset"
        propColor="#ae3208"
        propCursor1="pointer"
        propWidth="152px"
        propHeight="70px"
        propWidth1="37px"
        propCursor2="unset"
        onMETASTAYSText1Click={onMETASTAYSTextClick}
        onRadioClick={onRadioClick}
      />
      <SearchFormContainer />
      <img className={styles.headHouseIcon} alt="" src="/headhouse1.svg" />
    </div>
  );
};

export default BookHousing;
