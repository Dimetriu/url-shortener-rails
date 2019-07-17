import * as constants from './constants';
import { User } from './types';

interface createUserAction {
  type: typeof constants.SIGNUP_USER
  payload: User
}

type UserActionTypes = createUserAction;

export function signUpUser(newUser: User): UserActionTypes {
  return {
    type: constants.SIGNUP_USER,
    payload: newUser
  }
}
