import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate

  const validateForm = () => {
    const newErrors = {};
    const cardNumberRegex = /^\d{16}$/;
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/; // MM/YY format
    const cvvRegex = /^\d{3}$/;

    if (!cardNumber) newErrors.cardNumber = 'Card number is required';
    else if (!cardNumberRegex.test(cardNumber)) newErrors.cardNumber = 'Card number must be 16 digits';

    if (!expiryDate) newErrors.expiryDate = 'Expiry date is required';
    else if (!expiryDateRegex.test(expiryDate)) newErrors.expiryDate = 'Expiry date must be in MM/YY format';

    if (!cvv) newErrors.cvv = 'CVV is required';
    else if (!cvvRegex.test(cvv)) newErrors.cvv = 'CVV must be 3 digits';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Proceed with form submission and navigate to ticket page
      console.log('Form submitted with:', { cardNumber, expiryDate, cvv });
      navigate('/ticket'); // Navigate to Ticket page
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
        <h2>Payment</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="card-number" className="form-label">Card Number</label>
            <input
              type="text"
              placeholder='xxxxxxxxxxxxxxxx'
              className={`form-control ${errors.cardNumber ? 'is-invalid' : ''}`}
              id="card-number"
              value={cardNumber}
              onChange={handleFieldChange(setCardNumber, 'cardNumber')}
            />
            {errors.cardNumber && <div className="invalid-feedback">{errors.cardNumber}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="expiry-date" className="form-label">Expiry Date</label>
            <input
              type="text"
              placeholder='mm/yy'
              className={`form-control ${errors.expiryDate ? 'is-invalid' : ''}`}
              id="expiry-date"
              value={expiryDate}
              onChange={handleFieldChange(setExpiryDate, 'expiryDate')}
            />
            {errors.expiryDate && <div className="invalid-feedback">{errors.expiryDate}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="cvv" className="form-label">CVV</label>
            <input
              type="text"
              placeholder='xxx'
              className={`form-control ${errors.cvv ? 'is-invalid' : ''}`}
              id="cvv"
              value={cvv}
              onChange={handleFieldChange(setCvv, 'cvv')}
            />
            {errors.cvv && <div className="invalid-feedback">{errors.cvv}</div>}
          </div>
          <button type="submit" className="btn btn-primary">Confirm Payment</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
