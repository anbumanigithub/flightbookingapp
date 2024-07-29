import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Footer from './Footer';

const FlightSearch = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize the navigate function

  const airports = [
    { code: 'JFK', name: 'John F. Kennedy International Airport' },
    { code: 'LAX', name: 'Los Angeles International Airport' },
    { code: 'ORD', name: 'O\'Hare International Airport' },
    { code: 'LHR', name: 'London Heathrow Airport' },
    { code: 'HND', name: 'Tokyo Haneda Airport' }
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!departure) newErrors.departure = 'Departure airport is required';
    if (!destination) newErrors.destination = 'Destination airport is required';
    if (!departureDate) newErrors.departureDate = 'Departure date is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Navigate to the flights page
      navigate('/flights', { state: { departure, destination, departureDate } });
    } else {
      setErrors(validationErrors);
    }
  };

  const handleFieldChange = (setter, field) => (e) => {
    setter(e.target.value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: ''
    }));
  };

  return (
    <>
      <Navbar />
      <Carousel />

      <div className="container mt-5">
        <h2>Search Flights</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="departure" className="form-label">Departure Airport</label>
            <select
              className={`form-control ${errors.departure ? 'is-invalid' : ''}`}
              id="departure"
              value={departure}
              onChange={handleFieldChange(setDeparture, 'departure')}
            >
              <option value="">Select Departure Airport</option>
              {airports.map((airport) => (
                <option key={airport.code} value={airport.code}>{airport.name}</option>
              ))}
            </select>
            {errors.departure && <div className="invalid-feedback">{errors.departure}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="destination" className="form-label">Destination Airport</label>
            <select
              className={`form-control ${errors.destination ? 'is-invalid' : ''}`}
              id="destination"
              value={destination}
              onChange={handleFieldChange(setDestination, 'destination')}
            >
              <option value="">Select Destination Airport</option>
              {airports.map((airport) => (
                <option key={airport.code} value={airport.code}>{airport.name}</option>
              ))}
            </select>
            {errors.destination && <div className="invalid-feedback">{errors.destination}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="departure-date" className="form-label">Departure Date</label>
            <input
              type="date"
              className={`form-control ${errors.departureDate ? 'is-invalid' : ''}`}
              id="departure-date"
              value={departureDate}
              onChange={handleFieldChange(setDepartureDate, 'departureDate')}
            />
            {errors.departureDate && <div className="invalid-feedback">{errors.departureDate}</div>}
          </div>
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default FlightSearch;
