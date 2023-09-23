import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./PrimaryButton.css";

type PrimaryButtonType = {
  buttonText?: string;

  /** Style props */
  primaryButtonWidth?: CSSProperties["width"];
  primaryButtonHeight?: CSSProperties["height"];
  primaryButtonCursor?: CSSProperties["cursor"];
  primaryButtonBorder?: CSSProperties["border"];
  primaryButtonPadding?: CSSProperties["padding"];
  primaryButtonBackgroundColor?: CSSProperties["backgroundColor"];
  primaryButtonPosition?: CSSProperties["position"];
  primaryButtonTop?: CSSProperties["top"];
  primaryButtonLeft?: CSSProperties["left"];
  primaryButtonBorderRadius?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius?: CSSProperties["borderRadius"];
  rectangleDivBackgroundColor?: CSSProperties["backgroundColor"];
  searchFlightsTop?: CSSProperties["top"];
  searchFlightsLeft?: CSSProperties["left"];
  searchFlightsFontSize?: CSSProperties["fontSize"];
  searchFlightsFontWeight?: CSSProperties["fontWeight"];
  searchFlightsFontFamily?: CSSProperties["fontFamily"];
  searchFlightsDisplay?: CSSProperties["display"];

  /** Action props */
  onConnectButtonClick?: () => void;
};

const PrimaryButton: FunctionComponent<PrimaryButtonType> = ({
  buttonText,
  primaryButtonWidth,
  primaryButtonHeight,
  primaryButtonCursor,
  primaryButtonBorder,
  primaryButtonPadding,
  primaryButtonBackgroundColor,
  primaryButtonPosition,
  primaryButtonTop,
  primaryButtonLeft,
  primaryButtonBorderRadius,
  rectangleDivBorderRadius,
  rectangleDivBackgroundColor,
  searchFlightsTop,
  searchFlightsLeft,
  searchFlightsFontSize,
  searchFlightsFontWeight,
  searchFlightsFontFamily,
  searchFlightsDisplay,
  onConnectButtonClick,
}) => {
  const primaryButtonStyle: CSSProperties = useMemo(() => {
    return {
      width: primaryButtonWidth,
      height: primaryButtonHeight,
      cursor: primaryButtonCursor,
      border: primaryButtonBorder,
      padding: primaryButtonPadding,
      backgroundColor: primaryButtonBackgroundColor,
      position: primaryButtonPosition,
      top: primaryButtonTop,
      left: primaryButtonLeft,
      borderRadius: primaryButtonBorderRadius,
    };
  }, [
    primaryButtonWidth,
    primaryButtonHeight,
    primaryButtonCursor,
    primaryButtonBorder,
    primaryButtonPadding,
    primaryButtonBackgroundColor,
    primaryButtonPosition,
    primaryButtonTop,
    primaryButtonLeft,
    primaryButtonBorderRadius,
  ]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius,
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBorderRadius, rectangleDivBackgroundColor]);

  const searchFlightsStyle: CSSProperties = useMemo(() => {
    return {
      top: searchFlightsTop,
      left: searchFlightsLeft,
      fontSize: searchFlightsFontSize,
      fontWeight: searchFlightsFontWeight,
      fontFamily: searchFlightsFontFamily,
      display: searchFlightsDisplay,
    };
  }, [
    searchFlightsTop,
    searchFlightsLeft,
    searchFlightsFontSize,
    searchFlightsFontWeight,
    searchFlightsFontFamily,
    searchFlightsDisplay,
  ]);

  return (
    <div
      className="primary-button"
      style={primaryButtonStyle}
      onClick={onConnectButtonClick}
    >
      <div className="primary-button-child" style={rectangleDivStyle} />
      <div className="search-flights" style={searchFlightsStyle}>
        {buttonText}
      </div>
    </div>
  );
};

export default PrimaryButton;
