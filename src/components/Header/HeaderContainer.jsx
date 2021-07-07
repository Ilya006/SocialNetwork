import React from 'react';
import * as axios from 'axios';
import { setUserData } from '../../Redax/auth-reducer'

import Header from './Header';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
    .then(response => {
      // если 0 то залогинены
      if(response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        this.props.setUserData(id, email, login);
      }
    })
  }
  
  render() {
    return <Header {...this.props}></Header>
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, {setUserData})(HeaderContainer);