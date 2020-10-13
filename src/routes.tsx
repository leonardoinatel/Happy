import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/landing'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing}></Route>
    </BrowserRouter>
  );
}

export default Routes;