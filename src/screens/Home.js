import React from "react";
import styled from "styled-components";
import { PageWrapper } from "../SharedStyles";
import WeatherList from "../components/weather/WeatherList";
import QueryInput from "../components/QueryInput";

const Home = () => {
  return (
    <PageWrapper>
      <HomeWrapper>
        <QueryInput />
        <WeatherList />
      </HomeWrapper>
    </PageWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > * {
    margin-bottom: 3rem;
  }
`;

export default Home;
