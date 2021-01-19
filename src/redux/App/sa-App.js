import { all, put, call, takeLatest } from "redux-saga/effects";
import { GET } from "../../api";
import * as types from "../ActionTypes";
import * as actApp from "./ac-App";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const APPID = "47dd59d0cf329b11830b7b08a7a48dd3";

export function* fetchWeather(action) {
  try {
    const response = yield call(GET, URL, {
      params: {
        q: action.query,
        units: "metric",
        APPID,
      },
    });
    if (response.data) {
      yield put(actApp.fetchWeatherSuccess(response.data));
    } else {
      console.log("City not found");
    }
  } catch (e) {
    console.log("Fetch Weather failed ->", e);
  }
}

export default function* rootSaga() {
  yield all([takeLatest(types.FETCH_WEATHER, fetchWeather)]);
}
