import React from 'react';
import './App.css';

const executePurchase = () => {
  const id = document.getElementsByName('id');
  const pw = document.getElementsByName('pw');
  // call api
}

function Purchase() {
  return (
    <div className="Purchase">
      <div>
        <input type="text" name='bid' />
        <input type="text" name='amount' />
        <button onClick={executePurchase}>결제</button>
      </div>
    </div>
  );
}

export default Purchase;
