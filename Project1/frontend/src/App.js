import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
 

import Signup from './components/SignUp';
//import { Dropdown, Option } from "./components/Dropdown";



function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
          <main>
            <Container className="mt-3">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                

              </Routes>
            </Container>
          </main>
          <Footer />
      </BrowserRouter>
</>
);
}



export default App;
