import React from 'react';

import { gql, useQuery } from '@apollo/client';
import CurrencyFormat from 'react-currency-format';

import './PurchaseList.css';

const FETCH_TRANSACTIONS = gql`
  query {
    transactionsInUser {
      tid
      bid
      amount
      createdAt
    }
  }
`;

function PurchaseList() {
  const { loading, error, data } = useQuery(FETCH_TRANSACTIONS);

  if (loading) return <h3>결제 내역을 불러오고 있습니다.<br />잠시만 기다려주세요.</h3>;

  if (error) return <p>{error.message}</p>;

  return (
    <div className="PurchaseList">
      <a href="/main" className="Leading">이전</a>
      <h1>결제 내역</h1>
      <ul>
        {data.transactionsInUser.map((value, index) => {
          let date = new Date(parseInt(value.createdAt)).toLocaleString();

          return (
            <li key={index} className='purchase'>
              <div className='time'>{date}</div>
              <div className="payment">
                <span className="booth">{value.bid}번 부스</span>
                <CurrencyFormat value={value.amount} displayType={'text'} thousandSeparator={true} prefix={'₩'} renderText={value => <span className='amount'>{value}</span>} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PurchaseList;
