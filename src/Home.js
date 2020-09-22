import { BrowserRouter, useHistory } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Purchase from './Purchase';
import PurchaseList from './PurchaseList';
import React from 'react';

function Home() {
  let history = useHistory();

  if (!localStorage.getItem('session')) history.replace('/');

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/purchase" exact component={Purchase} />
          <Route path="/list" exact component={PurchaseList} />
        </Switch>
      </BrowserRouter>
      <div className="Menu">
        <a href="/purchase">결제</a>
        <a href="/list">내역</a>
      </div>
    </>
  );
}

export default Home;