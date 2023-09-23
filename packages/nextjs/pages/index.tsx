import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import PrimaryButton from "../components/PrimaryButton";
import "./LandingPage.css";
import type { NextPage } from "next";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";

import "./global.css";

const muiTheme = createTheme();

const LandingPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onConnectButtonClick = useCallback(() => {
    navigate("/book-housing");
  }, [navigate]);

  return (
    <div className="landing-page">
      <Footer propTop="2334px" />
      <div className="landing-page1">
        <div className="and-the-comfort-container">
          <span className="and-the-comfort-container1">
            <p className="and-the-comfort-of-your-next">
              <i>and the comfort of your next</i>
            </p>
            <p className="and-the-comfort-of-your-next">
              <i className="home-away-from">home away from home</i>
            </p>
          </span>
        </div>
        <i className="discover-the-seamless-container">
          <span className="and-the-comfort-container1">
            <p className="and-the-comfort-of-your-next">Discover the</p>
            <p className="and-the-comfort-of-your-next">
              seamless fusion of cutting
            </p>
            <p className="and-the-comfort-of-your-next">
              edge blockchain technology
            </p>
          </span>
        </i>
        <PrimaryButton
          buttonText="CONNECT"
          primaryButtonWidth="424px"
          primaryButtonHeight="92px"
          primaryButtonCursor="pointer"
          primaryButtonBorder="none"
          primaryButtonPadding="0"
          primaryButtonBackgroundColor="transparent"
          primaryButtonPosition="absolute"
          primaryButtonTop="calc(50% - 276px)"
          primaryButtonLeft="calc(50% - 196px)"
          primaryButtonBorderRadius="50px"
          rectangleDivBorderRadius="20px"
          rectangleDivBackgroundColor="#ab4216"
          searchFlightsTop="calc(50% - 30.5px)"
          searchFlightsLeft="calc(50% - 85.5px)"
          searchFlightsFontSize="24px"
          searchFlightsFontWeight="unset"
          searchFlightsFontFamily="Fipps"
          searchFlightsDisplay="inline-block"
          onConnectButtonClick={onConnectButtonClick}
        />
        <div className="description">
          <div className="rectangle" />
          <div className="welcome-to-metastays-container">
            <span className="and-the-comfort-container1">
              <p className="and-the-comfort-of-your-next">
                <i className="welcome-to-metastays">
                  Welcome to MetaStays - Where Real Estate Meets the Metaverse
                </i>
              </p>
              <p className="blank-line1">
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className="and-the-comfort-of-your-next">
                <span>
                  <span>{`Unlock a new era of property rentals with `}</span>
                  <span className="metastays">MetaStays</span>
                  <span>, the world's first web3 property marketplace.</span>
                </span>
              </p>
              <p className="and-the-comfort-of-your-next">
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className="and-the-comfort-of-your-next">
                <span>
                  <i className="key-features1">Key Features:</i>
                </span>
              </p>
              <p className="and-the-comfort-of-your-next">
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <ul className="pay-with-crypto-experience-ha">
                <li className="pay-with-crypto-experience-ha1">
                  <span>
                    <span>
                      Pay with Crypto: Experience hassle-free transactions using
                      your favorite cryptocurrencies. Say goodbye to traditional
                      payment methods, with Unlock.
                    </span>
                  </span>
                </li>
              </ul>
              <p className="and-the-comfort-of-your-next">
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <ul className="pay-with-crypto-experience-ha">
                <li className="pay-with-crypto-experience-ha1">
                  <span>
                    <span>
                      Verified Listings: Trust in the accuracy and authenticity
                      of property listings, our tenants and landlords with
                      WorldID.
                    </span>
                  </span>
                </li>
              </ul>
              <p className="and-the-comfort-of-your-next">
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <ul className="pay-with-crypto-experience-ha">
                <li className="pay-with-crypto-experience-ha1">
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
              <p className="and-the-comfort-of-your-next">
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <ul className="pay-with-crypto-experience-ha">
                <li className="pay-with-crypto-experience-ha1">
                  <span>
                    <span>
                      Efficient Search with The Graph: Find your perfect rental
                      property quickly and easily, thanks to our indexed data
                      powered by The Graph Protocol.
                    </span>
                  </span>
                </li>
              </ul>
              <p className="and-the-comfort-of-your-next">
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className="and-the-comfort-of-your-next">
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
        <img className="landing-page-child" alt="" src="/frame-1.svg" />
        <img className="landing-page-item" alt="" src="/frame-2.svg" />
        <div className="logo">
          <div className="meta">META</div>
          <img className="head-house-icon3" alt="" src="/headhouse1.svg" />
          <div className="stays">STAYS</div>
        </div>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <>
    <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <LandingPage/>
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
    </>
  );
};

export default Home;
