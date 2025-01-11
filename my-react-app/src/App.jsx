import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import AboutPenang from './AboutPenang';
import FoodAndLifestyle from './FoodAndLifestyle';
import TouristSpots from './TouristSpots';
import Hotel from './Hotel';

// Main Layout Component
const MainLayout = ({ children }) => (
  <div className="container">
    <header className="header">
      <div className="logo">
        <img src="logo2.jpg" alt="Logo" />
      </div>
      <nav className="navbar">
        <ul className="nav-tabs">
        <li><a href="/" className="tab-link">Main Page</a></li>
          <li><a href="/tourist" className="tab-link">Tourist Spots</a></li>
          <li><Link to="/food" className="tab-link">Food & Lifestyle</Link></li>
          <li><a href="/hotel" className="tab-link">Hotel</a></li>
          <li><Link to="/about" className="tab-link">About Penang</Link></li>
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
          <li> Designer : <strong>NAYEEM</strong></li>
          <li> Content Writer : <strong>LINA</strong></li>
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
            <a href="https://www.facebook.com/penangglobal.tourism/"><img src="facebook.jpg" alt="Facebook" /></a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2Fvisitpenang"><img src="twitter.jpg" alt="Twitter" /></a>
            <a href="https://www.instagram.com/penang.visit/"><img src="instagram.jpg" alt="Instagram" /></a>
            <a href="https://www.linkedin.com/company/penang"><img src="linkedin.jpg" alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <h2><p>&copy; 2025 Penang Government. All Rights Reserved.</p></h2>
      </div>
    </footer>
  </div>
);

// Blank Layout Component
const BlankLayout = ({ children }) => (
  <div className="blank-layout">{children}</div>
);

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'backgJAMBATAN2.jpg',
    'nasikandar.jpg',
    'penanghill.jpg',
    'skybridge.jpg',
    'payung.jpg',
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

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
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

              <section className="penang-description">
                <h2>Discover Pulau Pinang</h2>
                <p>Penang is a vibrant melting pot of cultures, blending Malay, Chinese, Indian, and European influences.
                Experience breathtaking views from Penang Hill and marvel at the stunning architecture of Kek Lok Si Temple. Indulge in the island's famous street food, from savory char kway teow to sweet cendol, and explore a variety of accommodations, from boutique hotels to luxurious resorts.
                Let our website help you plan your perfect Penang holiday, with tips on where to eat, where to stay, and must-visit attractions.</p>
                
              </section>

              <section className="video-section">
                <h2>Explore Penang in Motion</h2>
                <div className="video-container">
                  <video
                    src="PENANG.mp4"
                    controls
                    className="promo-video"
                  />
                </div>
              </section>

              <section className="info">
                <div className="card">
                  <h2>Things to Do in Penang</h2>
                  <p>Highlight top attractions and activities for tourists, such as visiting Penang Hill, exploring George Town's street art, enjoying the Penang National Park, or taking a boat ride to Kek Lok Si Temple. Include both nature-based activities and cultural experiences.</p>
                  <p>From hiking the beautiful Penang Hill to discovering the island’s vibrant street art scene in George Town, there’s something for every traveler. Explore the ancient temples, relax on pristine beaches, or experience the lively night markets.</p>
                </div>
                <div className="card">
                  <h2>Penang’s Natural Beauty</h2>
                  <p>Showcase the island’s scenic spots and nature reserves, including beaches, hiking trails, and national parks. Consider adding eco-tourism suggestions, like Penang National Park or the hidden Tropical Spice Garden.</p>
                  <p>Escape into nature with Penang’s breathtaking landscapes. From the lush trails of Penang National Park to the serene beauty of Tanjung Bungah Beach, discover the island’s unspoiled natural gems</p>
                </div>
              </section>

              <section className="news">
                <h2>Latest News</h2>
                <div className="news-table">
                  <div className="news-column">
                    <a href="https://www.traveloka.com/en-my/explore/destination/penang-best-place/308660" target="_blank" rel="noopener noreferrer">
                      <img src="news1.jpg" alt="News 1" className="news-image" />
                      <p>Unforgettable Adventures Await: Explore the Top 17 Places in Penang</p>
                    </a>
                  </div>
                  <div className="news-column">
                    <a href="https://girleatworld.net/penang-food-guide/" target="_blank" rel="noopener noreferrer">
                      <img src="news2.jpg" alt="News 2" className="news-image" />
                      <p>Penang Food Guide: Must Eat Food and Where to Find Them</p>
                    </a>
                  </div>
                  <div className="news-column">
                    <a href="https://infotourism.my/penangs-tourism-industry-poised-for-major-growth/" target="_blank" rel="noopener noreferrer">
                      <img src="new.jpg" alt="News 3" className="news-image" />
                      <p>Penang’s Tourism Industry Poised for Major Growth</p>
                    </a>
                  </div>
                </div>
              </section>
            </MainLayout>
          }
        />

        <Route
          path="/food"
          element={
            <MainLayout>
              <FoodAndLifestyle />
            </MainLayout>
          }
        />

        <Route
          path="/about"
          element={
            <MainLayout>
              <AboutPenang />
            </MainLayout>
          }
        />

<Route
    path="/tourist"
    element={
      <MainLayout>
        <TouristSpots />
      </MainLayout>
    }
  />
  <Route
    path="/hotel"
    element={
      <MainLayout>
        <Hotel />
      </MainLayout>
    }
  />
      </Routes>
    </Router>
  );
};

export default App;
