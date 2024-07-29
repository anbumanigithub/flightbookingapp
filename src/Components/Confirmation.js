import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Confirmation = () => {
  const [contactInfo, setContactInfo] = useState('');
  const [passengerDetails, setPassengerDetails] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate

  const validateForm = () => {
    const newErrors = {};
    const couponCodeRegex = /^[A-Za-z]{2}\d{3}$/;

    if (!contactInfo) newErrors.contactInfo = 'Contact information is required';
    if (!passengerDetails) newErrors.passengerDetails = 'Passenger details are required';
    if (!couponCode) newErrors.couponCode = 'Coupon code is required';
    else if (!couponCodeRegex.test(couponCode)) newErrors.couponCode = 'Coupon code must be in the format of 2 letters followed by 3 numbers';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Proceed with form submission and navigate to seats page
      console.log('Form submitted with:', { contactInfo, passengerDetails, couponCode });
      navigate('/seats'); // Navigate to Seats page
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
      <div className="container mt-5">
        <h2>Confirm Flight Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="contact-info" className="form-label">Contact Information</label>
            <input
              type="text"
              className={`form-control ${errors.contactInfo ? 'is-invalid' : ''}`}
              id="contact-info"
              value={contactInfo}
              onChange={handleFieldChange(setContactInfo, 'contactInfo')}
            />
            {errors.contactInfo && <div className="invalid-feedback">{errors.contactInfo}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="passenger-details" className="form-label">Passenger Details</label>
            <input
              type="text"
              className={`form-control ${errors.passengerDetails ? 'is-invalid' : ''}`}
              id="passenger-details"
              value={passengerDetails}
              onChange={handleFieldChange(setPassengerDetails, 'passengerDetails')}
            />
            {errors.passengerDetails && <div className="invalid-feedback">{errors.passengerDetails}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="coupon" className="form-label">Coupon Code</label>
            <input
              type="text"
              className={`form-control ${errors.couponCode ? 'is-invalid' : ''}`}
              id="coupon"
              value={couponCode}
              onChange={handleFieldChange(setCouponCode, 'couponCode')}
            />
            {errors.couponCode && <div className="invalid-feedback">{errors.couponCode}</div>}
          </div>
          <button type="submit" className="btn btn-primary">Next: Select Seats</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Confirmation;
