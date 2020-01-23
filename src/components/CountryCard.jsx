import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const CardContainer = styled(Link)`
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  width: 75%;
  margin: 0px auto 3rem;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.element};
  color: ${props => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 250ms ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const FlagContainer = styled.img`
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const InformationContainer = styled.div`
  width: 90%;
  margin: 1rem auto 2rem;
`;

const CountryNameContainer = styled.h4`
  font-size: 1.4rem;
  font-weight: ${props => props.theme.fontWeight.bold};
  margin-bottom: 1rem;
`;

const InformationList = styled.ul`
  list-style: none;
  line-height: 25px;
`;

const InformationListItem = styled.li``;

const InformationListItemTitle = styled.span`
  font-size: 1rem;
  font-weight: ${props => props.theme.fontWeight.normal};
`;

const InformationListItemValue = styled.span`
  font-size: 1rem;
  font-weight: ${props => props.theme.fontWeight.light};
`;

const CountryCard = ({
  flag,
  name,
  region,
  capital,
  population,
  alpha3Code
}) => {
  return (
    <CardContainer to={`/detail/${alpha3Code}`}>
      <LazyLoad width={"100%"}>
        <FlagContainer src={flag} alt={`${name}'s Flag`} />
      </LazyLoad>
      <InformationContainer>
        <CountryNameContainer>{name}</CountryNameContainer>
        <InformationList>
          <InformationListItem>
            <InformationListItemTitle>Population:</InformationListItemTitle>
            <InformationListItemValue> {population}</InformationListItemValue>
          </InformationListItem>
          <InformationListItem>
            <InformationListItemTitle>Region:</InformationListItemTitle>
            <InformationListItemValue> {region}</InformationListItemValue>
          </InformationListItem>
          <InformationListItem>
            <InformationListItemTitle>Capital:</InformationListItemTitle>
            <InformationListItemValue> {capital}</InformationListItemValue>
          </InformationListItem>
        </InformationList>
      </InformationContainer>
    </CardContainer>
  );
};

export default CountryCard;
