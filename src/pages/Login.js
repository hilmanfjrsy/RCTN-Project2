import React, { Component, useState } from 'react';
import Loading from '../config/GlobalFunc';

export default function Login() {
  return (
    <div className="align-items-center justify-content-center vh-100 d-flex">
      <div className="card-container p-4">
        <h4>Selamat Datang</h4>
        <div className="mb-3 mt-3">
          <label for="username" className="form-label">Username</label>
          <input type="email" className="form-control" placeholder="Jhon123" id="username" />
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">Password</label>
          <div className="d-flex flex-row">
            <input type="password" className="form-control" placeholder="******" id="password" />
            <button className="col-md-2 btn-eye">
              <i className="fas fa-eye"></i>
              {/* <i className="fas fa-eye-slash"></i> */}
            </button>
          </div>
        </div>
        <button type="submit" class="btn btn-dark w-100 mt-3" disabled>
          <Loading />
          Login
        </button>
      </div>
    </div>
  )
}