import { all, takeEvery } from 'redux-saga/effects';
import loginWatcher from './login';
import registerWatcher from './register';
import topicWatcher from './topic';
import loadesampleWatcher from './loadersample';
import { FETCH_WEATHER_REQUESTS, GET_USERS_FETCH, GET_POSTS_FETCH } from '@Actions/weather';
import { fetchWeatherSaga, workGetUsersFetch, workGetPostsFetch } from './weather_user';

function* rootSaga() {
  yield all([
    loginWatcher,
    registerWatcher,
    topicWatcher,
    loadesampleWatcher,
    takeEvery(FETCH_WEATHER_REQUESTS, fetchWeatherSaga),
    takeEvery(GET_USERS_FETCH, workGetUsersFetch),
    takeEvery(GET_POSTS_FETCH, workGetPostsFetch),
  ]);  
}

export default rootSaga;
