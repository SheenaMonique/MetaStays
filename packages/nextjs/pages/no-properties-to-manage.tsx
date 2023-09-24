import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Footer from "../components/figma/footer";
import FormHeader from "../components/figma/form-header";
import Container from "../components/figma/container";
import styles from "./no-properties-to-manage.module.css";

const NoPropertiesToManage: NextPage = () => {
  const router = useRouter();

  const onLogoContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onSubheaderContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onRadioClick = useCallback(() => {
    router.push("/no-properties-to-manage");
  }, [router]);

  const onRadio1Click = useCallback(() => {
    router.push("/book-housing");
  }, [router]);

  return (
    <div className={styles.noPropertiesToManage}>
      <Footer
        propTop="878px"
        propBackgroundColor="#010b49"
        propCursor="pointer"
        propCursor1="unset"
        onLogoContainerClick={onLogoContainerClick}
      />
      <FormHeader
        dimensions="/notification.svg"
        propCursor="pointer"
        propColor="#ab4216"
        propCursor1="unset"
        propWidth="152px"
        propHeight="70px"
        propWidth1="37px"
        propCursor2="pointer"
        onSubheaderContainerClick={onSubheaderContainerClick}
        onRadioClick={onRadioClick}
        onRadio1Click={onRadio1Click}
      />
      <Container />
      <img className={styles.headHouseIcon} alt="" src="/headhouse2.svg" />
    </div>
  );
};

export default NoPropertiesToManage;
