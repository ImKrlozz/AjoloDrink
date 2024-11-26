import React from 'react';
import '../src/styles/login.css';

const Signup = () => {
  return (
    <div className='login-page'>
      <div className="background">
        <img src="../../public/copa.png" className="cocktail" style={{ left: '0%', animationDelay: '0s' }} />
        <img src="../../public/copa.png" className="cocktail" style={{ left: '20%', animationDelay: '2s' }} />
        <img src="../../public/copa.png" className="cocktail" style={{ left: '40%', animationDelay: '4s' }} />
        <img src="../../public/copa.png" className="cocktail" style={{ left: '60%', animationDelay: '6s' }} />
        <img src="../../public/copa.png" className="cocktail" style={{ left: '80%', animationDelay: '1s' }} />
        <img src="../../public/copa.png" className="cocktail" style={{ left: '92%', animationDelay: '3s' }} />
      </div>

      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row border rounder-5 p-3 bg-white shadow box-area">
          <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column right-box" style={{background: "#FFEB00"}}>
            <div className="featured-image">
              <img src="../../public/bg.jpg" className='img-fluid' style={{width: "350px"}} />
            </div>
          </div>
          <div className="col-md-6 left-box">
            <div className="row algin-items-center">
              <div className="header-text mb-4">
                <h2>Create Account!</h2>
                <p>Join us and enjoy the best cocktails!</p>
              </div>
              <div className="input-group mb-3">
                <input type="text" className='form-control form-control-lg bg-light fs-6' placeholder='Full Name' />
              </div>
              <div className="input-group mb-3">
                <input type="email" className='form-control form-control-lg bg-light fs-6' placeholder='Email Address' />
              </div>
              <div className="input-group mb-3">
                <input type="password" className='form-control form-control-lg bg-light fs-6' placeholder='Password' />
              </div>
              <div className="input-group mb-3">
                <input type="password" className='form-control form-control-lg bg-light fs-6' placeholder='Confirm Password' />
              </div>
              <div className="input-group mb-3">
                <button className='btn btn-lg btn-primary w-100 fs-6'>Sign Up</button>
              </div>
              <div className="row">
                <small>Already have an account? <a href="/login">Login</a></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;