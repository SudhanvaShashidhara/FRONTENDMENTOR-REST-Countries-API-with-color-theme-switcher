import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Moon from "../icons/Moon";
import Sun from "../icons/Sun";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.element};
  padding: 1.5rem;
  color: ${props => props.theme.colors.text};
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  margin-bottom: 5px;
`;

const LogoTitle = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeight.bold};
  cursor: pointer;
`;

const ThemeToggler = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ThemeLogo = styled.div`
  height: 22px;
  width: 22px;
  margin-right: 5px;
`;

const ThemeText = styled.div``;

const Header = ({ theme, toggleThemeData }) => {
  return (
    <HeaderContainer>
      <LogoTitle to="/">Where in the world?</LogoTitle>
      <ThemeToggler onClick={toggleThemeData}>
        <ThemeLogo>{theme === "light" ? <Sun /> : <Moon />}</ThemeLogo>
        <ThemeText>{theme === "light" ? "Light Mode" : "Dark Mode"}</ThemeText>
      </ThemeToggler>
    </HeaderContainer>
  );
};

export default Header;
