// src/redux/weatherReducer.js
import { FETCH_WEATHER_SUCCESS, FETCH_WEATHER_REQUESTS, FETCH_WEATHER_FAILURE } from "@Actions/weather";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUESTS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
