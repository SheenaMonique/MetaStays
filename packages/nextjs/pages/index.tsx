
import type { NextPage } from "next";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";
import { useCallback } from "react";
import Footer from "../components/figma/footer";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import "~~/styles/globals.css";

const muiTheme = createTheme();

const LandingPage: NextPage = () => {
  const router = useRouter();

  const onConnectButtonContainerClick = useCallback(() => {
    router.push("/book-housing");
  }, [router]);

  return (
    <div className={styles.landingPage}>
      <Footer
        propTop="2334px"
        propBackgroundColor="#ae3208"
        propCursor="unset"
        propCursor1="unset"
      />
      <div className={styles.landingPage1}>
        <div className={styles.description}>
          <div className={styles.rectangle} />
          <div className={styles.welcomeToMetastaysContainer}>
            <span className={styles.welcomeToMetastaysContainer1}>
              <p className={styles.welcomeToMetastaysWhereR}>
                <i className={styles.welcomeToMetastays}>
                  Welcome to MetaStays - Where Real Estate Meets the Metaverse
                </i>
              </p>
              <p className={styles.blankLine}>
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className={styles.welcomeToMetastaysWhereR}>
                <span>
                  <span>{`Unlock a new era of property rentals with `}</span>
                  <span className={styles.metastays}>MetaStays</span>
                  <span>, the world's first web3 property marketplace.</span>
                </span>
              </p>
              <p className={styles.welcomeToMetastaysWhereR}>
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className={styles.welcomeToMetastaysWhereR}>
                <span>
                  <i className={styles.keyFeatures1}>Key Features:</i>
                </span>
              </p>
              <p className={styles.welcomeToMetastaysWhereR}>
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <ul className={styles.payWithCryptoExperienceHa}>
                <li className={styles.payWithCryptoExperienceHa1}>
                  <span>
                    <span>
                      Pay with Crypto: Experience hassle-free transactions using
                      your favorite cryptocurrencies. Say goodbye to traditional
                      payment methods, with Unlock.
                    </span>
                  </span>
                </li>
              </ul>
              <p className={styles.welcomeToMetastaysWhereR}>
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <ul className={styles.payWithCryptoExperienceHa}>
                <li className={styles.payWithCryptoExperienceHa1}>
                  <span>
                    <span>
                      Verified Listings: Trust in the accuracy and authenticity
                      of property listings, our tenants and landlords with
                      WorldID.
                    </span>
                  </span>
                </li>
              </ul>
              <p className={styles.welcomeToMetastaysWhereR}>
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <ul className={styles.payWithCryptoExperienceHa}>
                <li className={styles.payWithCryptoExperienceHa1}>
                  <span>
                    <span>
                      Community-Driven Reviews: Connect with like-minded
                      travelers and hosts on Lens, our integrated web3 social
                      platform. Share your experiences and make informed
                      decisions!
                    </span>
                  </span>
                </li>
              </ul>
              <p className={styles.welcomeToMetastaysWhereR}>
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <ul className={styles.payWithCryptoExperienceHa}>
                <li className={styles.payWithCryptoExperienceHa1}>
                  <span>
                    <span>
                      Efficient Search with The Graph: Find your perfect rental
                      property quickly and easily, thanks to our indexed data
                      powered by The Graph Protocol.
                    </span>
                  </span>
                </li>
              </ul>
              <p className={styles.welcomeToMetastaysWhereR}>
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className={styles.welcomeToMetastaysWhereR}>
                <span>
                  <span>
                    Join us in revolutionizing the way you stay. Dive into
                    MetaStays and embark on a journey where the future of
                    accommodation is at your fingertips.
                  </span>
                </span>
              </p>
            </span>
          </div>
        </div>
        <i className={styles.andTheComfort}>
          ... and the comfort of your next home away from home
        </i>
        <i className={styles.discoverTheFusionContainer}>
          <span className={styles.welcomeToMetastaysContainer1}>
            <p className={styles.welcomeToMetastaysWhereR}>
              Discover the fusion of cutting
            </p>
            <p className={styles.welcomeToMetastaysWhereR}>
              edge blockchain technology...
            </p>
          </span>
        </i>
        <div
          className={styles.connectButton}
          onClick={onConnectButtonContainerClick}
        >
          <div className={styles.connectButtonChild} />
          <div className={styles.connect}>CONNECT</div>
        </div>
        <img
          className={styles.metastays1Icon}
          alt=""
          src="/metastays-1@2x.png"
        />
      </div>
    </div>
  );
};

export default LandingPage;
