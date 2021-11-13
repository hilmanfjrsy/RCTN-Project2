import React, { Component } from 'react';
import CardProduct from '../components/CardProduct';

export default function Home({ }) {

  return (
    <div className=" container-fluid">
      <h3>Product</h3>
      <div className="wrap">
        <CardProduct/>
      </div>
    </div>
  )
}