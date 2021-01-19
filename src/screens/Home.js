import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { PageWrapper } from "../SharedStyles";
import * as actApp from "../redux/App/ac-App";
import { BiSearchAlt2 } from "react-icons/bi";

const Home = () => {
  const [query, setQuery] = useState("");
  const weatherData = useSelector((state) => state.App.weatherData);
  const dispatch = useDispatch();

  const search = async (e) => {
    if (e.key === "Enter") {
      dispatch(actApp.fetchWeather(query));
    }
  };

  return (
    <PageWrapper>
      <HomeWrapper>
        <SearchInput
          type="text"
          placeholder="Search for cities..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
        <p>{JSON.stringify(weatherData)}</p>
      </HomeWrapper>
    </PageWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > * {
    margin-bottom: 1rem;
  }
`;

const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: ${({ theme: { colors } }) => `1px solid ${colors.main}`};
  padding: 5px 10px;
  align-self: center;

  &:focus,
  &:hover {
    border-bottom: ${({ theme: { colors } }) => `2px solid ${colors.main}`};
  }
  &::placeholder {
    color: rgb(255, 255, 255, 0.7);
  }
`;

export default Home;
