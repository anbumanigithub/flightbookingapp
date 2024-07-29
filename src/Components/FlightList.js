import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Footer from './Footer';

const FlightList = () => {
  const [price, setPrice] = useState(50); // Default value for the price range
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');

  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleDepartureTimeChange = (e) => setDepartureTime(e.target.value);
  const handleArrivalTimeChange = (e) => setArrivalTime(e.target.value);

  const validateFilters = () => {
    let isValid = true;
    if (departureTime && arrivalTime && new Date(departureTime) > new Date(arrivalTime)) {
      isValid = false;
    }
    return isValid;
  };

  const handleFilterApply = () => {
    if (validateFilters()) {
      // Apply filter logic or fetch filtered flights
      console.log('Filters applied:', { price, departureTime, arrivalTime });
    } else {
      // Display warning message
      alert('Departure time cannot be later than arrival time');
    }
  };

  return (
    <>
      <Navbar />
      <Carousel />

      <div className="container mt-5">
        <div className="bg-grey p-4 rounded">
          <form className="row g-3 align-items-end">
            <div className="col-12 col-md-4 col-lg-2">
              <label htmlFor="from" className="form-label">From</label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="from"
                placeholder="From"
                style={{ backgroundColor: '#b4afaf', color: '#fff' }}
              />
            </div>
            <div className="col-12 col-md-4 col-lg-2">
              <label htmlFor="to" className="form-label">To</label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="to"
                placeholder="To"
                style={{ backgroundColor: '#b4afaf', color: '#fff' }}
              />
            </div>
            <div className="col-12 col-md-4 col-lg-2">
              <label htmlFor="departure" className="form-label">Departure Time</label>
              <input
                type="datetime-local"
                className="form-control form-control-sm"
                id="departure"
                value={departureTime}
                onChange={handleDepartureTimeChange}
                style={{ backgroundColor: '#b4afaf', color: '#fff' }}
              />
            </div>
            <div className="col-12 col-md-4 col-lg-2">
              <label htmlFor="return" className="form-label">Return Time</label>
              <input
                type="datetime-local"
                className="form-control form-control-sm"
                id="return"
                value={arrivalTime}
                onChange={handleArrivalTimeChange}
                style={{ backgroundColor: '#b4afaf', color: '#fff' }}
              />
            </div>
            <div className="col-12 col-md-4 col-lg-2">
              <label htmlFor="travellers" className="form-label">Travellers</label>
              <input
                type="number"
                className="form-control form-control-sm"
                id="travellers"
                placeholder="Number of Travellers"
                style={{ backgroundColor: '#b4afaf', color: '#fff' }}
              />
            </div>
            <div className="col-12 col-md-4 col-lg-2">
              <label htmlFor="class" className="form-label">Class</label>
              <select
                className="form-select form-select-sm"
                id="class"
                style={{ backgroundColor: '#b4afaf', color: '#fff' }}
              >
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="first">First Class</option>
              </select>
            </div>
            <div className="col-12 col-md-auto d-flex align-items-end">
              <button
                type="button"
                className="btn btn-danger btn-sm w-100 w-md-auto"
                onClick={handleFilterApply}
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="card-group mt-5">
          <div className="card shadow-sm">
            <ul className="list-group list-group-flush">
              <li className="list-group-item p-3">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                  <div className="flex-fill mb-3 mb-md-0 me-md-3">
                    <h5>Cheapest</h5>
                    <h6>IXIGO</h6>
                    <p>Akasa Air</p>
                  </div>
                  <div className="flex-fill mb-3 mb-md-0 me-md-3 text-center">
                    <h5>QP1128</h5>
                  </div>
                  <div className="flex-fill mb-3 mb-md-0 me-md-3 text-center">
                    <p>16:00 DEL</p>
                  </div>
                  <div className="flex-fill mb-3 mb-md-0 me-md-3 text-center">
                    <p>2h 20m</p>
                    <p>Non-stop</p>
                  </div>
                  <div className="flex-fill mb-3 mb-md-0 me-md-3 text-center">
                    <p>18:20 BOM</p>
                  </div>
                  <div className="flex-fill mb-3 mb-md-0 me-md-3 text-center">
                    <p>₹4,299</p>
                    <p>Extra ₹675 Off</p>
                  </div>
                  <div className="text-center">
                    <Link to="/confirmation" className="btn btn-danger me-2">Book</Link>
             
                  </div>
                </div>
              </li>
            </ul>
          </div>
         
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FlightList;
