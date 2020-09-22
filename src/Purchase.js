import React from 'react';
import { useHistory } from 'react-router-dom';

import './App.css';

import { gql, useMutation } from '@apollo/client';

const CREATE_TRANSACTION = gql`
  mutation CreateTransaction($bid: Int!, $amount: Int!) {
    createTransaction(bid: $bid, amount: $amount) {
      tid
      amount
    }
  }
`;

function Purchase() {
  let history = useHistory();

  let bid, amount;

  const [createTransaction] = useMutation(CREATE_TRANSACTION);

  return (
    <div className="Purchase">
      <form onSubmit={e => {
        e.preventDefault();

        createTransaction({
          variables: {
            bid: parseInt(bid.value),
            amount: parseInt(amount.value),
          }
        }).then(_ => {
          history.replace('/list');
        }).catch(err => {
          console.log(err);
        });

      }}>
        <input type="text" ref={node => {
          bid = node;
        }} />
        <br/>
        <input type="text" ref={node => {
          amount = node;
        }}/>
        <br/>
        <button type="submit">결제</button>
      </form>
    </div>
  );
}

export default Purchase;
