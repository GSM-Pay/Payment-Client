import React from "react";

import './Login.css'
import {useHistory} from "react-router";

let history;

const Login = () => {
  const id = document.getElementsByName('id');
  const pw = document.getElementsByName('pw');
  localStorage.setItem('session', 'a');
  localStorage.getItem('session')
  history.push('/purchase');
}

export default () => {
  history = useHistory();
  if (localStorage.getItem('session')) history.replace('/purchase');
  return (
    <div className='Login'>
      GSM Pay
      <input type="text" name="id" />
      <input type="password" name="pw" />
      <button onClick={Login}>로그인</button>
    </div>
  )
}