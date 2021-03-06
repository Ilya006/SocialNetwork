import { AppStateType } from "../redax-store";

export const getIsAuth = (state: AppStateType) => {
  return state.auth.isAuth
}

export const getUserId = (state: AppStateType) => {
  return state.auth.id
}

export const getUserPhoto = (state: AppStateType) => {
  return state.auth.userPhoto
}

export const getLogin = (state: AppStateType) => {
  return state.auth.login
}