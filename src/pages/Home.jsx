import React, { useState, useEffect } from "react";
import styled from "styled-components";

import SearchForm from "../components/SearchForm";
import RegionDropdown from "../components/RegionDropdown";
import CountryCardsContainer from "../components/CountryCardsContainer";

const HomeContainer = styled.main`
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
  width: 100%;
  color: ${props => props.theme.colors.text};
`;

const HomePageInputContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 3rem auto 3rem;
    padding: 0px 2rem;
  }
`;

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("Filter by Region");
  const [filteredData, setFilteredData] = useState([]);
  const [countriesData, setCountriesData] = useState(null);
  const onSearchValueChange = e => setSearchValue(e.target.value.toLowerCase());
  const onSearchFormSubmit = e => {
    e.preventDefault();
    const searchedCountryList = countriesData.filter(
      ({ name }) => searchValue.indexOf(name.toLowerCase()) > -1
    );
    setFilteredData(searchedCountryList);
    setSearchValue("");
    setFilterValue("Filter by Region");
  };
  const onFilterValueChanged = e => {
    setFilterValue(e.target.innerText);

    const filteredCountries = countriesData.filter(
      ({ region }) => e.target.innerText === region
    );

    setFilteredData(filteredCountries);
  };

  useEffect(() => {
    const fetchAllCountries = async () => {
      const allCountriesDataRaw = await fetch(
        "https://restcountries.eu/rest/v2/all?fields=flag;name;population;region;capital;alpha3Code"
      );
      const allCountriesDataJson = await allCountriesDataRaw.json();
      setCountriesData(allCountriesDataJson);
      localStorage.setItem(
        "allCountriesDataFromServer",
        JSON.stringify(allCountriesDataJson)
      );
    };
    if (localStorage.getItem("allCountriesDataFromServer")) {
      setCountriesData(
        JSON.parse(localStorage.getItem("allCountriesDataFromServer"))
      );
    } else {
      fetchAllCountries();
    }
    // eslint-disable-next-line
  }, []);
  return (
    <HomeContainer>
      <HomePageInputContainer>
        <SearchForm
          searchValue={searchValue}
          onSearchValueChange={onSearchValueChange}
          onSearchFormSubmit={onSearchFormSubmit}
        />
        <RegionDropdown
          filterValue={filterValue}
          onFilterValueChanged={onFilterValueChanged}
        />
      </HomePageInputContainer>
      {filteredData.length > 0 ? (
        <CountryCardsContainer countriesData={filteredData} />
      ) : (
        <CountryCardsContainer countriesData={countriesData} />
      )}
    </HomeContainer>
  );
};

export default Home;
