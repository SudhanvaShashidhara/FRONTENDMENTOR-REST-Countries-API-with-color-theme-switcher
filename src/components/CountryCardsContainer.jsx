import React from "react";
import styled from "styled-components";

import CountryCard from "./CountryCard";

const CountryCardsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: 1920px) {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

const CountryCardsContainer = React.memo(({ countriesData }) => {
  return (
    <CountryCardsContainerStyled>
      {countriesData &&
        countriesData.map(countryInfo => {
          return (
            <CountryCard
              key={countryInfo.name}
              name={countryInfo.name}
              flag={countryInfo.flag}
              region={countryInfo.region}
              capital={countryInfo.capital}
              population={countryInfo.population}
              alpha3Code={countryInfo.alpha3Code}
            />
          );
        })}
    </CountryCardsContainerStyled>
  );
});

export default CountryCardsContainer;
