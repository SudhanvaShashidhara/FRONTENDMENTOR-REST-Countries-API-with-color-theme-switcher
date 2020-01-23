import React, { useEffect, Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Button from "../components/Button";
import Loader from "../components/Loader";

const IconContainer = styled.div`
  height: ${props => props.dataStyles.height};
  width: ${props => props.dataStyles.width};

  margin: ${props => {
    if (props.dataStyles.margin) return props.dataStyles.margin.small;
    else return "0px";
  }};

  @media (min-width: 768px) {
    margin: ${props => {
      if (props.dataStyles.margin) return props.dataStyles.margin.medium;
      else return "0px";
    }};
  }
`;

const BorderCountriesButtonDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  width: 90%;
  margin: 0.5rem auto 1rem;
`;

const FlagContainer = styled.div`
  width: 90%;
  margin: 0rem auto 2rem;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const FlagImage = styled.img`
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
  &:hover {
    filter: opacity(0.7);
  }
`;

const MainContainer = styled.main`
  @media (min-width: 768px) {
    width: 80%;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr;
    margin: 1rem auto;
  }
`;

const DataContainer = styled.section``;

const InformationContainer = styled.ul`
  width: 90%;
  margin: 0px auto;
  list-style: none;
  line-height: 1.8rem;
`;

const InformationList = styled.li`
  font-size: 14px;
`;

const InformationListWithLineBreak = styled.li`
  font-size: 14px;
  margin-bottom: 1.5rem;
`;

const InformationListTitle = styled.span`
  color: ${props => props.theme.colors.text};
  font-weight: 500;
`;

const InformationListData = styled.span`
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeight.light};
`;

const CountryName = styled.h3`
  font-size: 1.7rem;
  margin: 0px auto 1.5rem;
  color: ${props => props.theme.colors.text};
  width: 90%;
  font-weight: ${props => props.theme.fontWeight.normal};
`;

const BorderCountryTitle = styled.h5`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeight.light};
  width: 90%;
  margin: 0px auto;
`;

const Detail = () => {
  const { alpha3Code } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const fetchCountryInfo = async () => {
      setShowLoader(true);
      const countryDataRaw = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${alpha3Code}?fullText=true&fields=nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;flag;name`
      );
      const countryDataJson = await countryDataRaw.json();
      let countryCodeStr = "";
      for (const countryCode of countryDataJson.borders) {
        countryCodeStr = countryCodeStr + countryCode + ";";
      }
      const borderCountryNamesRaw = await fetch(
        `https://restcountries.eu/rest/v2/alpha?codes=${countryCodeStr}&fields=name;alpha3Code`
      );
      const borderCountryNamesJson = await borderCountryNamesRaw.json();
      countryDataJson.bordersData = borderCountryNamesJson;
      const languagesWithComma = countryDataJson.languages
        .map(language => language.name + ",")
        .join("");
      countryDataJson.languagesData = languagesWithComma.substring(
        0,
        languagesWithComma.length - 1
      );
      setShowLoader(false);
      setCountryData(countryDataJson);
    };
    fetchCountryInfo();
    // eslint-disable-next-line
  }, [alpha3Code]);

  let borderCountriesDOM = null;
  if (countryData && countryData.bordersData.length > 0) {
    borderCountriesDOM = countryData.bordersData.map(borderCountry => (
      <Button
        dataStyles={{ padding: "0px 7px", height: "4rem" }}
        type="link"
        to={`/detail/${borderCountry.alpha3Code}`}
        key={borderCountry.alpha3Code}
      >
        {borderCountry.name}
      </Button>
    ));
  }

  return (
    <Fragment>
      <Button
        dataStyles={{
          margin: {
            small: "1rem 0rem 1.8rem 1.5rem",
            medium: "4rem auto 4rem 10%"
          },
          width: "6rem",
          height: "2.5rem"
        }}
        type="button"
        go="back"
      >
        <IconContainer
          dataStyles={{
            height: "1.2rem",
            width: "1.2rem",
            margin: {
              small: "0rem 0.2rem 0rem 0rem",
              medium: "0rem 0.2rem 0rem 0rem"
            }
          }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"></path>
          </svg>
        </IconContainer>
        Back
      </Button>
      {countryData && !showLoader ? (
        <MainContainer>
          <FlagContainer>
            <FlagImage src={countryData.flag} />
          </FlagContainer>
          <DataContainer>
            <CountryName>{countryData.name}</CountryName>

            <InformationContainer>
              <InformationList>
                <InformationListTitle>Native Name: </InformationListTitle>
                <InformationListData>
                  {countryData.nativeName}
                </InformationListData>
              </InformationList>

              <InformationList>
                <InformationListTitle>Population: </InformationListTitle>
                <InformationListData>
                  {countryData.population}
                </InformationListData>
              </InformationList>

              <InformationList>
                <InformationListTitle>Region: </InformationListTitle>
                <InformationListData>{countryData.region}</InformationListData>
              </InformationList>

              <InformationList>
                <InformationListTitle>Sub Region: </InformationListTitle>
                <InformationListData>
                  {countryData.subregion}
                </InformationListData>
              </InformationList>

              <InformationListWithLineBreak>
                <InformationListTitle>Capital: </InformationListTitle>
                <InformationListData>{countryData.capital}</InformationListData>
              </InformationListWithLineBreak>

              <InformationList>
                <InformationListTitle>Top Level Domain: </InformationListTitle>
                <InformationListData>
                  {countryData.topLevelDomain[0]}
                </InformationListData>
              </InformationList>

              <InformationList>
                <InformationListTitle>Currencies: </InformationListTitle>
                <InformationListData>
                  {countryData.currencies[0].name}
                </InformationListData>
              </InformationList>

              <InformationListWithLineBreak>
                <InformationListTitle>Languages: </InformationListTitle>
                <InformationListData>
                  {countryData.languagesData}
                </InformationListData>
              </InformationListWithLineBreak>
            </InformationContainer>
            <BorderCountryTitle>Border Countries: </BorderCountryTitle>
            <BorderCountriesButtonDiv>
              {borderCountriesDOM}
            </BorderCountriesButtonDiv>
          </DataContainer>
        </MainContainer>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

export default Detail;
