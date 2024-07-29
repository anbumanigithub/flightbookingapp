import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Handle registration logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Phone:', phone);
    // Redirect or show success message after registration
    alert("registered successfully")
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: '1rem' }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-6 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="register form"
                      className="img-fluid h-100"
                      style={{ borderRadius: '1rem 0 0 1rem' }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-6 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleRegister}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3"></i>
                          <span className="h1 fw-bold mb-0">JTS</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3">
                          Create your account
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form3Example1"
                            className="form-control form-control-lg"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                          <label className="form-label" htmlFor="form3Example1">
                            Name
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form3Example3"
                            className="form-control form-control-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <label className="form-label" htmlFor="form3Example3">
                            Email address
                          </label>
                        </div>

                        <div className="form-outline mb-4 position-relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            id="form3Example4"
                            className="form-control form-control-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                          <label className="form-label" htmlFor="form3Example4">
                            Password
                          </label>
                          <i
                            className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} position-absolute top-50 end-0 translate-middle-y me-3 cursor-pointer`}
                            onClick={togglePasswordVisibility}
                            style={{ cursor: 'pointer' }}
                          ></i>
                        </div>

                        <div className="form-outline mb-4 position-relative">
                          <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="form3Example5"
                            className="form-control form-control-lg"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                          />
                          <label className="form-label" htmlFor="form3Example5">
                            Confirm Password
                          </label>
                          <i
                            className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'} position-absolute top-50 end-0 translate-middle-y me-3 cursor-pointer`}
                            onClick={toggleConfirmPasswordVisibility}
                            style={{ cursor: 'pointer' }}
                          ></i>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="tel"
                            id="form3Example6"
                            className="form-control form-control-lg"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                          />
                          <label className="form-label" htmlFor="form3Example6">
                            Phone Number
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            Register
                          </button>
                        </div>

                        <p className="mb-5 pb-lg-2">
                          Already have an account? <Link to="/">Login here</Link>
                        </p>
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
