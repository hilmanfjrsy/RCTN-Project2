import React, { Component, useState } from "react";
import { useLocation } from "react-router";
import Navigation from "./Navigation";

export default function Template({ children }) {
  const {pathname} = useLocation()
  
  return (
    <>
      {pathname=='/login'?null:<Navigation />}
      {children}
    </>
  );
}
