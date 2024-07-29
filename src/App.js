
import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import FlightSearch from './Components/FlightSearch';
import FlightList from './Components/FlightList';
import Confirmation from './Components/Confirmation';
import SeatSelection from './Components/SeatSelection';
import Payment from './Components/Payment';
import Ticket from './Components/Ticket';
import Contact from './Components/Contact';

const App = () => (
  <Router>
    <Routes>
    <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/search" element={<FlightSearch/>} />
      <Route path="/flights" element={<FlightList/>} />
      <Route path="/confirmation" element={<Confirmation/>} />
      <Route path="/seats" element={<SeatSelection/>} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/ticket" element={<Ticket/>} />
      <Route path="/contact" element={<Contact/>} />

    </Routes>
  </Router>
);

export default App;


