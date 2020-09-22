import { BrowserRouter, useHistory, Route, Switch } from 'react-router-dom';
import Purchase from './Purchase';
import PurchaseList from './PurchaseList';
import Main from './Main';
import React from 'react';

function Home() {
  let history = useHistory();

  if (!localStorage.getItem('session')) history.replace('/');

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/main" exact component={Main} />
          <Route path="/purchase" exact component={Purchase} />
          <Route path="/list" exact component={PurchaseList} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Home;