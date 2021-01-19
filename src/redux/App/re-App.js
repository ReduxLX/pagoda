import * as types from "../ActionTypes";

const initialState = {
  isLoading: false,
  weatherData: [],
  queryInput: "",
};

const AppReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.APP_HANDLE_STATE:
      return { ...state, [payload.property]: payload.value };

    case types.APP_HANDLE_GLOBAL_STATE:
      return { ...state, ...payload };

    case types.FETCH_WEATHER_SUCCESS:
      return { ...state, weatherData: [...state.weatherData, payload] };

    case types.DELETE_WEATHER:
      return {
        ...state,
        weatherData: [
          ...state.weatherData.filter((item) => payload.id !== item.id),
        ],
      };

    default:
      return state;
  }
};

export default AppReducer;
