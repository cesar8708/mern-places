import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

import MainHeader from './shared/components/Navigation/MainHeader';

const App=() => {
  return( 
  <Router>
    <MainHeader/>
    <main>
    <Switch>
      <Route path="/" exact={true}>
        <Users/>
      </Route>
      <Route path="/places/new" exact={true}>
        <NewPlace/>
      </Route>
      <Redirect to="/" />
    </Switch>
    </main>
  </Router>
  );
} 

export default App;
