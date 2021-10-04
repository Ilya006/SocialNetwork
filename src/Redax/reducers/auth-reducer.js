import { authAPI } from "./../../api/api";
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  id: null,
  email: null, 
  login: null,
  isAuth: false,
}

const authReduce = (state = initialState, action) => { 
  switch(action.type) {

    case SET_USER_DATA: {
      return {
        ...state, 
        ...action.payload,
      }
    }

    default: 
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => (
  {type: SET_USER_DATA, payload: {id, email, login, isAuth}}
);

export const getAuthUserData = () => {
  return (dispatch) => {
    return authAPI.me()
      .then(response => {
        if(response.resultCode === 0) {
          let {id, email, login} = response.data
          dispatch(setAuthUserData(id, email, login, true))
        }
      })
  }
};

export const login = (email, password, rememberMe) => {
  return (dispatch) => {

    authAPI.login(email, password, rememberMe)
      .then(response => {
        if(response.data.resultCode === 0 ) {
          dispatch(getAuthUserData());
        } else {
          let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Common Error';
          dispatch(stopSubmit('login', {_error: message}));
        }
      })
  }
};

export const logout = () => {
  return (dispatch) => {
    authAPI.logout()
      .then(response => {
        if(response.data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false));
        }
      })
  }
}

export default authReduce;