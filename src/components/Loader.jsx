import React from "react";
import styled, { keyframes } from "styled-components";

const spinny = keyframes`
0% {
    transform: rotate(0deg) scale(1);
    background-color: ${props => props.theme.colors.text};
    border-top-color: ${props => props.theme.colors.text};
    border-bottom-color: ${props => props.theme.colors.text};
  }
  50% {
    transform: rotate(180deg) scale(1.2);
    background-color: ${props => props.theme.colors.text};
    border-top-color: ${props => props.theme.colors.text};
    border-bottom-color: ${props => props.theme.colors.text};
  }
  100% {
    transform: rotate(360deg) scale(1);
    background-color: ${props => props.theme.colors.text};
    border-top-color: ${props => props.theme.colors.text};
    border-bottom-color: ${props => props.theme.colors.text};
  }
`;

const LoaderDiv = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: transparent;
  position: relative;
  margin: 2rem auto;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
  }

  &::before {
    content: "";
    display: block;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
  }

  &::after {
    background-color: ${props => props.theme.colors.hoverBackground};
    position: absolute;
    top: 0;
    left: 0;
    border: 4px solid transparent;
    border-top-color: ${props => props.theme.colors.text};
    border-bottom-color: ${props => props.theme.colors.text};
    animation: ${spinny} 2s linear infinite;
  }
`;

const Loader = () => {
  return <LoaderDiv />;
};

export default Loader;
