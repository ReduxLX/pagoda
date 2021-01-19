import * as types from "../ActionTypes";

export const handleState = (property, value) => {
  return {
    type: types.APP_HANDLE_STATE,
    payload: {
      property,
      value,
    },
  };
};

export const handleGlobalState = (payload) => {
  return {
    type: types.APP_HANDLE_GLOBAL_STATE,
    payload,
  };
};

export const fetchWeather = (query) => {
  return {
    type: types.FETCH_WEATHER,
    query,
  };
};
