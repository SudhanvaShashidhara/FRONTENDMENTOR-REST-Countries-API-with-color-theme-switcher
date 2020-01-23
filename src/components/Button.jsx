import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

const ButtonType = styled.button`
  -webkit-appearance: none;
  padding: ${props => props.customstyles.padding || "0px"};
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.colors.element};
  color: ${props => props.theme.colors.text};
  border: none;
  outline: none;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: ${props => props.customstyles.width || "100%"};
  height: ${props => props.customstyles.height || "100%"};
  margin: ${props => {
    if (props.customstyles.margin) return props.customstyles.margin.small;
    else return "0px";
  }};
  text-align: center;
  font-weight: ${props => props.theme.fontWeight.light};
  transition: transform 250ms ease, background-color 250ms ease;
  border-radius: 5px;
  &:hover {
    transform: scale(1.03);
    background-color: ${props => props.theme.colors.hoverBackground};
  }
  &:active {
    transform: scale(1.03);
    background-color: ${props => props.theme.colors.hoverBackground};
  }

  @media (min-width: 768px) {
    margin: ${props => {
      if (props.customstyles.margin) return props.customstyles.margin.medium;
      else return "0px";
    }};
  }
`;

const LinkType = styled(Link)`
  text-align: center;
  padding: ${props => props.customstyles.padding || "0px"};
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.element};
  border: none;
  outline: none;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: ${props => props.customstyles.width || "100%"};
  height: ${props => props.customstyles.height || "100%"};
  margin: ${props => {
    if (props.customstyles.margin) return props.customstyles.margin.small;
    else return "0px";
  }};
  font-weight: ${props => props.theme.fontWeight.light};
  transition: transform 250ms ease, background-color 250ms ease;
  border-radius: 5px;
  &:hover {
    transform: scale(1.03);
    background-color: ${props => props.theme.colors.hoverBackground};
  }
  &:active {
    transform: scale(1.03);
    background-color: ${props => props.theme.colors.hoverBackground};
  }

  @media (min-width: 768px) {
    margin: ${props => {
      if (props.customstyles.margin) return props.customstyles.margin.medium;
      else return "0px";
    }};
  }
`;

const Button = props => {
  let history = useHistory();
  if (props.type === "button" && props.go) {
    return (
      <ButtonType
        onClick={() => history.goBack()}
        customstyles={{ ...props.dataStyles }}
      >
        {props.children}
      </ButtonType>
    );
  } else if (props.type === "link" && props.to) {
    return (
      <LinkType to={props.to} customstyles={{ ...props.dataStyles }}>
        {props.children}
      </LinkType>
    );
  } else {
    return (
      <ButtonType customstyles={{ ...props.dataStyles }}>
        {props.children}
      </ButtonType>
    );
  }
};

export default Button;
