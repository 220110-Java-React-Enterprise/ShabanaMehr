import React, { useState } from 'react';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";


function Header() {

  return (
    <>
      <div className="headerBar">
        <div className="siteName">
          <h1>Revature's Digest</h1>
        </div>

        <div className="navBar">
          <ul className="navLinks">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
            <Link to={"/sell"}>Shop</Link>
            </li>
            <li>
              <Link to={"/sell"}>Sell</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          </ul>
          <a href="/cart">
            <button id="cartIcon">
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button id="burgerIcon">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </a>
        </div>
      </div>
      
    <button class="dropbtn">
    
    </button>
    <select>
  
        --<option value="x" href="/link/to/somewhere">Menu</option>
        
        <option value="login" href= "frontend/components/Login">Login</option>
        <option value="shop">Shop</option>
        <option value="sell">Sell</option>
        <option value="news">News</option>
      </select>
      
    </>
  );
}

export default Header;