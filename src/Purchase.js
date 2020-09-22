import React from 'react';
import { useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';

import './Purchase.css';

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
      <a href="/main" className="Leading">이전</a>
      <h1>결제</h1>
      <form onSubmit={e => {
        e.preventDefault();

        console.log(amount);
        console.log(typeof amount);

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

        <h2>부스</h2>
        <input type="text" placeholder="결제를 진행할 부스의 일련번호" ref={node => {
          bid = node;
        }} />
        <h2>결제할 금액</h2>
        <CurrencyFormat value={amount} thousandSeparator={true} prefix={'₩'} placeholder="결제 액수" onValueChange={(value) => {
          amount = value;
        }} />
        <br />
        <button className="SubmitButton" type="submit">결제</button>
      </form>
    </div>
  );
}

export default Purchase;
