import * as types from "../ActionTypes";

const initialState = {
  isLoading: false,
  weatherData: {},
};

const AppReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.APP_HANDLE_STATE:
      return { ...state, [payload.property]: payload.value };

    case types.APP_HANDLE_GLOBAL_STATE:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default AppReducer;
