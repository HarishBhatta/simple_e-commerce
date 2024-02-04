import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
function App() {
  return (
    <>
     <div className='overflow-hidden'>
      <Router>
        <Routes>
          <Route path='/' element ={<Home />} />
          <Route path='/product/:id' element ={<ProductDetails />} />
        </Routes>
      </Router>
      <Sidebar />
      <Footer />
     </div>
    </>
  )
}

export default App
