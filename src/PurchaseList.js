import React from 'react';

import './PurchaseList.css'

function PurchaseList() {
  return (
    <div className="Purchase">
      <div>
        <ul>
          <li className='purchase'><div className='time'>2020-01-01 00:00:00</div><div className='amount'>-890809</div></li>
        </ul>
      </div>
    </div>
  );
}

export default PurchaseList;
