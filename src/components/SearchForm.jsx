import React from "react";
import styled from "styled-components";

import SearchIcon from "../icons/Search";

const SearchForm = styled.form`
  height: 3.2rem;
  position: relative;
  width: 90%;
  margin: 1rem auto;

  @media (min-width: 768px) {
    margin: 0px;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  left: 1.5rem;
  top: 44%;
  -webkit-appearance: none;
  height: 1.2rem;
  width: 1.2rem;
  border: none;
  background-color: ${props => props.theme.colors.element};
  color: ${props => props.theme.colors.text};
  @media (min-width: 768px) {
    top: 32%;
  }
`;

const SearchInput = styled.input`
  border: 2px solid transparent;
  outline: none;
  font-size: 1rem;
  background-color: ${props => props.theme.colors.element};
  height: 100%;
  color: ${props => props.theme.colors.text};
  width: 100%;
  margin: 0.5rem auto;
  display: block;
  padding-left: 4rem;
  border-radius: 5px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    border: none;
    margin: 0px;
  }
`;

const SearchBox = ({
  searchValue,
  onSearchValueChange,
  onSearchFormSubmit
}) => {
  return (
    <SearchForm onSubmit={onSearchFormSubmit}>
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
      <SearchInput
        type="text"
        value={searchValue}
        onChange={onSearchValueChange}
        placeholder="Search for a country..."
      />
    </SearchForm>
  );
};

export default SearchBox;
