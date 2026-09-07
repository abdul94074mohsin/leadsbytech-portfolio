import React from 'react';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Portfolio Page Content */}
      <div className="flex-grow">
        <Portfolio />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
