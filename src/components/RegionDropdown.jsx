import React, { useState } from "react";
import styled from "styled-components";

import DownArrow from "../icons/DownArrow";
import Overlay from "./Overlay";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const DropDownContainer = styled.div`
  width: 90%;
  margin: 2.5rem auto;
  height: 3.2rem;
  position: relative;
  @media (min-width: 768px) {
    margin: 0px;
    position: relative;
  }
`;

const SelectedOption = styled.div`
  padding: 1rem;
  font-size: 1rem;
  width: 60%;
  background-color: ${props => props.theme.colors.element};
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    position: absolute;
    right: 0px;
    width: 35%;
  }
`;

const ArrowLogoContainer = styled.div`
  transition: transform 350ms ease;
  transform: ${props => (props.invert ? "rotate(-180deg)" : "rotate(-360deg)")};
`;

const DropDownList = styled.ul`
  width: 60%;
  margin: 10px 0;
  position: relative;
  border-radius: 5px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.colors.element};
  border: none;
  outline: none;
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  padding: 1rem 1rem 1rem 2rem;
  display: flex;
  opacity: ${props => (props.show ? 1 : 0)};
  display: flex;
  flex-direction: column;
  list-style: none;
  transform: ${({ show }) =>
    show ? `translateY(0px)` : `translateY(-2.5rem)`};
  transform: ${({ show }) => (show ? `scale(1)` : `scale(0)`)};
  font-weight: ${props => props.theme.fontWeight.light};
  transition: opacity 350ms ease, transform 350ms ease;
  z-index: ${props => (props.show ? 25 : -1)};

  @media (min-width: 768px) {
    width: 35%;
    position: absolute;
    right: 0px;
    top: 3rem;
  }
`;

const DropDownListElement = styled.li`
  cursor: pointer;
  margin: 0.3rem 0rem;
  transition: transform 250ms ease;
  &:hover {
    transform: scale(1.03);
  }
`;

const RegionDropdown = ({ filterValue, onFilterValueChanged }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropDownVisibility = () => setShowDropDown(!showDropDown);
  return (
    <DropDownContainer>
      <SelectedOption onClick={toggleDropDownVisibility}>
        {filterValue}
        <ArrowLogoContainer invert={showDropDown}>
          <DownArrow />
        </ArrowLogoContainer>
      </SelectedOption>

      <DropDownList show={showDropDown} onClick={toggleDropDownVisibility}>
        {regions.map(region => (
          <DropDownListElement onClick={onFilterValueChanged} key={region}>
            {region}
          </DropDownListElement>
        ))}
      </DropDownList>
      {showDropDown ? (
        <Overlay toggleDropDownVisibility={toggleDropDownVisibility} />
      ) : null}
    </DropDownContainer>
  );
};

export default RegionDropdown;
