import React from 'react';

import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import './Login.css';

const LOGIN = gql`
  mutation Login($id: String!, $pw: String!) {
    Login(id: $id, pw: $pw) {
      data
    }
  }
`;

function Login() {
  let history = useHistory();

  if (localStorage.getItem('session')) history.replace('/main');

  let id, pw;
  const [login] = useMutation(LOGIN);

  return (
    <div className='Login'>
      <h1>GSM Pay</h1>
      <form onSubmit={e => {
        e.preventDefault();

        login({
          variables: {
            id: id.value,
            pw: pw.value,
          }
        }).then(result => {
          let session = result.data.Login.data;

          if (session == null) return;

          localStorage.setItem('session', session);

          history.push('/main');
        }).catch(err => {
          console.log(err);
        });
      }}>
        <input type="text" placeholder="아이디" ref={node => {
          id = node;
        }} />
        <br/>
        <input type="password" placeholder="비밀번호" ref={node => {
          pw = node;
        }} />
        <br/>
        <button type="submit">로그인</button>
      </form>
    </div>
  )
}

export default Login;