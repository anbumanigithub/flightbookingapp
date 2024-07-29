import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import FlightSearch from './Components/FlightSearch';
import FlightList from './components/FlightList';
import Confirmation from './components/Confirmation';
import SeatSelection from './components/SeatSelection';
import Payment from './components/Payment';
import Ticket from './components/Ticket';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/search" component={FlightSearch} />
      <Route path="/flights" component={FlightList} />
      <Route path="/confirmation" component={Confirmation} />
      <Route path="/seats" component={SeatSelection} />
      <Route path="/payment" component={Payment} />
      <Route path="/ticket" component={Ticket} />
    </Switch>
  </Router>
);

export default Routes;
