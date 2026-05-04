import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import SellDomain from './pages/SellDomain';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import AddFunds from './pages/AddFunds';
import Hosting from './pages/Hosting';
import Auctions from './pages/Auctions';
import AIAgent from './components/AIAgent';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/hosting" element={<Hosting />} />
            <Route path="/auctions" element={<Auctions />} />
            <Route path="/sell" element={<SellDomain />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add-funds" element={<AddFunds />} />
          </Routes>
        </main>
        <Footer />
        <AIAgent />
      </div>
    </Router>
  );
}

export default App;
