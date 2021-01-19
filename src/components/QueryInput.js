import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import * as actApp from "../redux/App/ac-App";

const QueryInput = () => {
  const dispatch = useDispatch();
  const queryInput = useSelector((state) => state.App.queryInput);

  const search = async (e) => {
    if (e.key === "Enter") {
      dispatch(actApp.fetchWeather(queryInput));
      dispatch(actApp.handleState("queryInput", ""));
    }
  };

  return (
    <SearchInput
      type="text"
      placeholder="Search for cities..."
      value={queryInput}
      onChange={(e) =>
        dispatch(actApp.handleState("queryInput", e.target.value))
      }
      onKeyPress={search}
    />
  );
};

const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: ${({ theme: { colors } }) => `1px solid ${colors.main}`};
  padding: 5px 10px;
  align-self: center;
  color: white;
  height: 30px;
  &:focus,
  &:hover {
    border-bottom: ${({ theme: { colors } }) => `2px solid ${colors.main}`};
  }
  &::placeholder {
    color: rgb(255, 255, 255, 0.7);
  }
`;

export default QueryInput;
