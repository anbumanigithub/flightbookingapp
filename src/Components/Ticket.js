import React from 'react';
import Navbar from './Navbar'
const Ticket = () => {
  return (
    <>
<Navbar/>
    <div className="container mt-5">
      <h2>Booking Confirmation</h2>
      <p>Your booking is confirmed. Here are your details:</p>
      <ul className="list-group">
        <li className="list-group-item">Flight: Airline A - $100</li>
        <li className="list-group-item">Departure: 10:00 AM</li>
        <li className="list-group-item">Arrival: 12:00 PM</li>
        <li className="list-group-item">Seat: 1A</li>
        <li className="list-group-item">Passenger: John Doe</li>
      </ul>
      <button className="btn btn-primary mt-3">Print Ticket</button>
    </div>
    </>
  );
};

export default Ticket;
