import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import WeatherCard from "./WeatherCard";

const WeatherList = () => {
  const weatherData = useSelector((state) => state.App.weatherData);
  console.log(weatherData);
  return (
    <WeatherListWrapper>
      {weatherData.map((item, index) => {
        const {
          id,
          name,
          sys: { country },
          main: { temp },
          weather,
        } = item;
        console.log(item);
        return (
          <WeatherCard
            key={index}
            id={id}
            name={name}
            countryID={country}
            temperature={temp}
            weather={weather}
          />
        );
      })}
    </WeatherListWrapper>
  );
};

const WeatherListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  & > * {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`;

export default WeatherList;
