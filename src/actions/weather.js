export const GET_USERS_FETCH = 'GET_USERS_FETCH'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'

export const GET_POSTS_FETCH = 'GET_POSTS_FETCH'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'

export const FETCH_WEATHER_REQUESTS = "FETCH_WEATHER_REQUESTS";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS"; // Corrected action type
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE";

// Constant/weather.js
export const getWeatherFetch = (city) => ({
    type: FETCH_WEATHER_REQUESTS,
    payload: city,
  });

export const getUsersFetch = () => ({
    type: GET_USERS_FETCH
});


export const getPostsFetch = () => ({
    type: GET_POSTS_FETCH,

});
