import React from 'react';

import { gql, useQuery } from '@apollo/client';
import CurrencyFormat from 'react-currency-format';

import './PurchaseList.css';

const FETCH_TRANSACTIONS = gql`
  query {
    transactionsInUser {
      tid
      amount
      createdAt
    }
  }
`;

function PurchaseList() {
  const { loading, error, data } = useQuery(FETCH_TRANSACTIONS);

  if (loading) return <h3>결제 내역을 불러오고 있습니다.<br/>잠시만 기다려주세요.</h3>;

  if (error) return <p>{error.message}</p>;

  return (
    <div className="Purchase">
      <div>
        <ul>
          {data.transactionsInUser.map((value, index) => {
            return (
              <li key={index} className='purchase'>
                <div className='time'>{Date(value.createdAt)}</div>
                <CurrencyFormat value={value.amount} displayType={'text'} thousandSeparator={true} prefix={'₩'} renderText={value => <div className='amount'>{value}</div>} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default PurchaseList;
