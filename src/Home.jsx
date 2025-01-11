// Home.jsx
import React, { useState, useEffect } from 'react';
import './App.css';

const Home = () => {
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
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="logo2.jpg" alt="Logo" />
        </div>
        <nav className="navbar">
          <ul className="nav-tabs">
            <li><a href="#culture" className="tab-link">Culture & Heritage</a></li>
            <li><a href="#nature" className="tab-link">Nature & Adventure</a></li>
            <li><a href="#food" className="tab-link">Food & Lifestyle</a></li>
            <li><a href="#events" className="tab-link">Events</a></li>
            <li><a href="#stories" className="tab-link">Penang Stories</a></li>
            <li><a href="#about" className="tab-link">About Penang</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <h1>Welcome to Penang</h1>
          <p>Your gateway to plan your Penang's trips.</p>

          {/* Slideshow */}
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

        {/* Penang Description Section */}
        <section className="penang-description">
          <h2>Discover Pulau Pinang</h2>
          <p>
            Pulau Pinang, or Penang, is one of Malaysia's most iconic destinations, known for its rich cultural heritage, stunning landscapes, and vibrant history. Located on the northwest coast of Peninsular Malaysia, Penang is a melting pot of diverse cultures, with Malay, Chinese, Indian, and European influences. The island’s capital, George Town, is a UNESCO World Heritage Site, recognized for its well-preserved colonial architecture, bustling streets, and rich history.
          </p>
          <p>
            The state’s population is a dynamic mix of ethnicities, and Penang is known for its thriving economy, driven by its strategic location and growing tourism sector. The island is renowned for its food, with street food offerings that attract visitors from around the world. From its breathtaking views at Penang Hill to the architectural marvels of the Kek Lok Si Temple, Penang offers a blend of nature, culture, and modernity.
          </p>
          <p>
            Penang also plays a significant role in Malaysia’s history as an important trading port, with historical landmarks such as Fort Cornwallis and the Clan Jetties telling the story of the island’s colonial past. Today, Penang continues to thrive as a hub for commerce, culture, and tourism, offering both locals and visitors an unparalleled experience.
          </p>
        </section>

        {/* Video Section */}
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
            <br></br>
            <p>From hiking the beautiful Penang Hill to discovering the island’s vibrant street art scene in George Town, there’s something for every traveler. Explore the ancient temples, relax on pristine beaches, or experience the lively night markets.</p>
          </div>
          <div className="card">
            <h2>Penang’s Natural Beauty</h2>
            <p>Showcase the island’s scenic spots and nature reserves, including beaches, hiking trails, and national parks. Consider adding eco-tourism suggestions, like Penang National Park or the hidden Tropical Spice Garden.</p>
            <br></br>
            <p>Escape into nature with Penang’s breathtaking landscapes. From the lush trails of Penang National Park to the serene beauty of Tanjung Bungah Beach, discover the island’s unspoiled natural gems.</p>
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
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* Footer Navigation */}
          <div className="footer-quick-navigation">
            <h3>Quick Navigation</h3>
            <div className="footer-nav">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
          </div>

          {/* About Us */}
          <div className="footer-about">
            <h3>About Us</h3>
            <p>
              We promote Penang because it is a place filled with rich history, diverse culture, and natural beauty. With its blend of old-world charm and modern vibrance, Penang offers a unique experience that we believe everyone should discover. Our goal is to help travelers and locals alike explore all that Penang has to offer.
            </p>
          </div>

          {/* Contact Information */}
          <div className="footer-contact">
            <p><strong>Contact Us</strong></p>
            <p>123 Penang Street, Georgetown, Penang, Malaysia</p>
            <p>Email: <a href="mailto:info@penang.gov.my">info@penang.gov.my</a></p>
            <p>Phone: +60 4-1234567</p>
          </div>

          {/* Social Media Links */}
          <div className="footer-social">
            <p><strong>Follow Us</strong></p>
            <div className="social-icons">
              <a href="#" target="_blank" aria-label="Facebook">
                <img src="facebook.jpg" alt="Facebook" />
              </a>
              <a href="#" target="_blank" aria-label="Twitter">
                <img src="twitter.jpg" alt="Twitter" />
              </a>
              <a href="#" target="_blank" aria-label="Instagram">
                <img src="instagram.jpg" alt="Instagram" />
              </a>
              <a href="#" target="_blank" aria-label="LinkedIn">
                <img src="linkedin.jpg" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Penang Government. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
