import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Navbar from './pages/navbar';

function Routers() {

  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default Routers;