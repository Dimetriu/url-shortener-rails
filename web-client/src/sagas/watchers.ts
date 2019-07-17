import { takeLatest } from 'redux-saga/effects';
import { signUpSaga } from './authenticationSaga';
import * as constants from '../store/user/constants';

export default function* watchUserAuthentication() {
  yield takeLatest(constants.SIGNUP_USER, signUpSaga);
}
