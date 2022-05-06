import React from 'react';
import { useEffect, useReducer, useState } from 'react';
import '../styles/Home.css';
//import data from '../data';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logger from 'use-reducer-logger';
import { Helmet } from 'react-helmet-async';
import Slider from '../components/Slider';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
function Home() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Helmet> Revature's Digest </Helmet>
      {' '}

      <div className="featuredScroll">
          <Slider />
      </div>


      <div className="sectionTitle">
        <h2>Best Sellers</h2>
      </div>
      <div className="bestSellers">
        Best Sellers section
      </div>
      <div className="sectionTitle">
        <h2>New Arrivals</h2>
      </div>
      <div className="newArrivals">New Arrivals section</div>
    </div>
  );
}

export default Home;
