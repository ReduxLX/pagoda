import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  IoRainyOutline,
  IoSunnyOutline,
  IoCloudOutline,
  IoPartlySunnyOutline,
} from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import { MdDehaze } from "react-icons/md";
import * as actApp from "../../redux/App/ac-App";

const WeatherCard = (props) => {
  const { id, name, countryID, temperature, weather } = props;
  const dispatch = useDispatch();
  const mainWeather = weather[0].main;
  // const weatherDescription = weather[0].description;

  const renderWeatherIcon = () => {
    if (mainWeather === "Clear") {
      return <IoSunnyOutline style={{ width: "75px", height: "75px" }} />;
    } else if (mainWeather === "Clouds") {
      return <IoCloudOutline style={{ width: "75px", height: "75px" }} />;
    } else if (mainWeather === "Rain") {
      return <IoRainyOutline style={{ width: "75px", height: "75px" }} />;
    } else if (mainWeather === "Haze") {
      return <MdDehaze style={{ width: "75px", height: "75px" }} />;
    } else if (mainWeather === "Rainy") {
      return <IoRainyOutline style={{ width: "75px", height: "75px" }} />;
    } else {
      return <IoPartlySunnyOutline style={{ width: "75px", height: "75px" }} />;
    }
  };

  return (
    <CardWrapper>
      <CardHeader>
        <CountryTag>{countryID}</CountryTag>
        <CloseIcon onClick={() => dispatch(actApp.deleteWeather(id))}>
          <IoMdCloseCircle />
        </CloseIcon>
      </CardHeader>
      <div>{renderWeatherIcon()}</div>
      <h1>{name}</h1>
      <strong>{temperature}°C</strong>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 250px;
  height: 275px;
  border-radius: 20px;
  background-color: white;
  padding: 20px 15px 60px;
  & > * {
    color: black;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CountryTag = styled.div`
  border-radius: 20px;
  padding: 5px 15px;
  width: fit-content;
  height: fit-content;
  border: 2px solid black;
`;

const CloseIcon = styled.div`
  transition: 0.3s;
  & > * {
    width: 35px;
    height: 35px;
  }
  &:hover,
  &:active {
    color: ${({ theme: { colors } }) => colors.main};
  }
`;

export default WeatherCard;
