import React from 'react';
import { useHistory } from 'react-router-dom';

import './Main.css';

import { gql, useQuery } from '@apollo/client';

const ME = gql`
  query Me {
    me {
      name
    }
  }
`;

function Main() {
  let history = useHistory();

  const { loading, error, data } = useQuery(ME);

  if (loading || error) return <h1>잠시 기다려주세요.</h1>;

  return (
    <div>
      <div className="Header">
        <span className="Logout" onClick={() => {
          localStorage.removeItem('session');
          history.push('');
          window.location.reload();
        }}>로그아웃</span>
        <h2>안녕하세요, {data.me.name}님!</h2>
      </div>
      <div className="Menu">
        <a href="/purchase">결제하러 가기</a>
        <a href="/list">결제 내역 조회하기</a>
      </div>
    </div>
  );
}

export default Main;
