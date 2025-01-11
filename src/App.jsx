import React, { useState, useEffect } from 'react';
import './css/App.css';
import AboutPenang from './AboutPenang';
import FoodAndLifestyle from './FoodAndLifestyle';
import TouristSpots from './TouristSpots';
import Hotel from './Hotel';

// Main Layout Component
const MainLayout = ({ children }) => (
  <div className="container">
    <header className="header">
      <div className="logo">
        <img src="./css/image/logo2.jpg" alt="Logo" />
      </div>
      <nav className="navbar">
        <ul className="nav-tabs">
          <li><a href="#" onClick={() => children.navigate('home')} className="tab-link">Main Page</a></li>
          <li><a href="#" onClick={() => children.navigate('tourist')} className="tab-link">Tourist Spots</a></li>
          <li><a href="#" onClick={() => children.navigate('food')} className="tab-link">Food & Lifestyle</a></li>
          <li><a href="#" onClick={() => children.navigate('hotel')} className="tab-link">Hotel</a></li>
          <li><a href="#" onClick={() => children.navigate('about')} className="tab-link">About Penang</a></li>
        </ul>
      </nav>
    </header>
    <main className="main-content">{children}</main>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-quick-navigation">
          <h3>DEVELOPERS TEAM</h3>
          <ul>
            <li>Developer : <strong>AFIQ</strong></li>
            <li>Designer : <strong>NAYEEM</strong></li>
            <li>Content Writer : <strong>LINA</strong></li>
          </ul>
        </div>
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            We promote Penang because it is a place filled with rich history, diverse culture, and natural beauty. With its blend of old-world charm and modern vibrance, Penang offers a unique experience that we believe everyone should discover.
          </p>
        </div>
        <div className="footer-contact">
          <strong>Contact Us</strong>
          <p>123 Penang Street, Georgetown, Penang, Malaysia</p>
          <p>Email: <a href="mailto:info@penang.gov.my">info@penang.gov.my</a></p>
          <p>Phone: +60 4-1234567</p>
        </div>
        <div className="footer-social">
          <strong>Follow Us</strong>
          <div className="social-icons">
            <a href="https://www.facebook.com/penangglobal.tourism/"><img src="./css/image/facebook.jpg" alt="Facebook" /></a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2Fvisitpenang"><img src="./css/image/twitter.jpg" alt="Twitter" /></a>
            <a href="https://www.instagram.com/penang.visit/"><img src="./css/image/instagram.jpg" alt="Instagram" /></a>
            <a href="https://www.linkedin.com/company/penang"><img src="./css/image/linkedin.jpg" alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <h2><p>&copy; 2025 Penang Government. All Rights Reserved.</p></h2>
      </div>
    </footer>
  </div>
);

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    './css/image/backgJAMBATAN2.jpg',
    './css/image/nasikandar.jpg',
    './css/image/penanghill.jpg',
    './css/image/skybridge.jpg',
    './css/image/payung.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <MainLayout navigate={navigate}>
      {currentPage === 'home' && (
        <section className="hero">
          <h1>Welcome to Penang Tourism Guide</h1>
          <h2>Your gateway to plan your Penang's trips.</h2>
          <div className="slideshow-container">
            <img
              src={slides[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="slideshow-image"
            />
            <div className="slideshow-controls">
              <button onClick={goToPreviousSlide} className="prev-btn">
                &#10094; Prev
              </button>
              <button onClick={goToNextSlide} className="next-btn">
                Next &#10095;
              </button>
            </div>
          </div>
        </section>
      )}

      {currentPage === 'food' && <FoodAndLifestyle />}
      {currentPage === 'about' && <AboutPenang />}
      {currentPage === 'tourist' && <TouristSpots />}
      {currentPage === 'hotel' && <Hotel />}
    </MainLayout>
  );
};

export default App;
