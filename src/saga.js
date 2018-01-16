import { takeEvery } from 'redux-saga/effects';

import * as users from './sagas/users';

export default function* dataSaga() {
  yield takeEvery('GET_USER', users.getUser);
}
