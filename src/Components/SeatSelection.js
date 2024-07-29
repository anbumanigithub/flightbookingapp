import React from 'react';
import { Link } from 'react-router-dom';
import  Navbar  from './Navbar';
import Footer from './Footer';

const SeatSelection = () => {
  return (
    <>
    <Navbar/>
    <div className="container mt-5">
      <h2>Select Your Seats</h2>
      <div className="seating-map">
        {/* Mockup for seat selection */}
        <div className="seat">1A</div>
        <div className="seat">1B</div>
        <div className="seat">1C</div>
        {/* Add more seats as needed */}
      </div>
      <Link to="/payment" className="btn btn-primary mt-3">Next: Payment</Link>
    </div>
    <Footer/>
    </>
  );
};

export default SeatSelection;
