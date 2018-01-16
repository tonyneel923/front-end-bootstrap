import { put } from 'redux-saga/effects';
import axios from 'axios';
import config from '../config';

// example saga
export function* getUser(action) {
  try {
    const res = yield axios.post(`${config.REACT_APP_API_BASE_URL}/user/${action.id}`);
    yield put({ type: 'GET_AUTH_USER_SUCCESS', response: res.data });
  } catch (axiosError) {
    yield put({ type: 'GET_AUTH_USER_FAILURE', error: axiosError });
    console.log('GET_AUTH_USER_FAILURE', axiosError);
  }
}
