import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const OverlayElement = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 12;
  position: absolute;
  top: 0;
  left: 0;
`;

const Overlay = ({ toggleDropDownVisibility }) => {
  return ReactDOM.createPortal(
    <OverlayElement onClick={toggleDropDownVisibility} />,
    document.getElementById("overlay-hook")
  );
};

export default Overlay;
