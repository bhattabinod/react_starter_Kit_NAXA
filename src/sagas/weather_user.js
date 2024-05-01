// src/redux/sagas.js
import { call, put} from "redux-saga/effects";
import { FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE, GET_USERS_SUCCESS, GET_POSTS_SUCCESS } from "@Actions/weather";
import  axios  from "axios";

// Saga function to fetch users
export function* usersFetch() {
  try {
    const response = yield fetch("https://jsonplaceholder.typicode.com/users");
    const users = yield response.json();
    return users;
  } catch (error) {
    throw error;
  }
}

// Saga function to fetch posts
export function* postsFetch() {
  try {
    const response = yield fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = yield response.json();
    return posts;
  } catch (error) {
    throw error;
  }
}

// Saga worker function to handle fetching users
export function* workGetUsersFetch() {
  try {
    const users = yield call(usersFetch);
    yield put({ type: GET_USERS_SUCCESS, users });
  } catch (error) {
    // Handle error if needed
    console.error("Error fetching users:", error);
  }
}

// Saga worker function to handle fetching posts
export function* workGetPostsFetch() {
  try {
    const posts = yield call(postsFetch);
    yield put({ type: GET_POSTS_SUCCESS, posts });
  } catch (error) {
    // Handle error if needed
    console.error("Error fetching posts:", error);
  }
}

// Saga function to fetch weather
const YOUR_API_KEY = "64bfd2e35c3073e46500bf2681aab6e0";
export function* fetchWeatherSaga(action) {
  try {
    const response = yield call(
      axios.get,
      `https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=${YOUR_API_KEY}`
    );
    console.log("Weather Data:", response.data);

    const temperatureInKelvin = response.data.main.temp;
    const temperatureInCelsius = temperatureInKelvin - 273.15;
    console.log("Temperature in Celsius:", temperatureInCelsius.toFixed(2));

    yield put({ type: FETCH_WEATHER_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_WEATHER_FAILURE, payload: error.message });
  }
}
