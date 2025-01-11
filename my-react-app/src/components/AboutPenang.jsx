import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPenang.css';

const AboutPenang = () => {
  return (
    <div className="about-penang">
      {/* Main Content */}
      <section className="about-penang-main">
        <div className="about-header">
          <Link to="/" className="logo-link">
            <img
              src="logo2.jpg"
              alt="Penang Explorer Logo"
              className="logo-image"
            />
          </Link>
          <nav className="about-nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </nav>
        </div>

        <h2>About Penang</h2>
        <div className="about-content">
          <div className="about-section">
            <img
              src="masjid.jpg"
              alt="George Town cultural landmarks"
              className="about-image"
            />
            <div className="about-text">
              <h3>Culture & Heritage</h3>
              <p>
                Penang is often referred to as the "Pearl of the Orient" due to its rich cultural diversity and heritage. 
                The island boasts a unique blend of Malay, Chinese, Indian, and European influences, making it a vibrant and 
                colorful destination. George Town, a UNESCO World Heritage Site, is a treasure trove of colonial-era architecture, 
                intricate temples, and historic clan houses. One of the most iconic landmarks is the Khoo Kongsi, a beautifully 
                preserved clan house that showcases traditional Chinese craftsmanship with elaborate carvings and murals. Festivals 
                like the George Town Heritage Celebration provide visitors with an immersive experience, highlighting Penang’s strong 
                community ties and its efforts to preserve its cultural legacy.
              </p>
            </div>
          </div>

          <div className="about-section">
            <img
              src="penanghill.jpg"
              alt="Penang Hill scenic view"
              className="about-image"
            />
            <div className="about-text">
              <h3>Nature & Adventure</h3>
              <p>
                For nature enthusiasts, Penang offers a diverse range of outdoor activities. The lush greenery of Penang Hill 
                provides a refreshing escape from the city, offering panoramic views of the island and its surroundings. Batu Ferringhi 
                is renowned for its golden beaches, where visitors can enjoy water sports like parasailing, jet skiing, and windsurfing. 
                The Penang National Park, on the other hand, is a haven for wildlife and features pristine trails leading to hidden gems 
                like the Turtle Sanctuary and Monkey Beach. Whether you're a casual hiker or a seasoned adventurer, Penang's natural 
                attractions promise an unforgettable experience.
              </p>
            </div>
          </div>

          <div className="about-section">
            <img
              src="char.jpg"
              alt="Penang famous street food"
              className="about-image"
            />
            <div className="about-text">
              <h3>Food & Lifestyle</h3>
              <p>
                Penang is renowned as a global food paradise, offering an unrivaled street food scene with iconic dishes like char kuey teow, Penang laksa, and nasi kandar. Food lovers flock to hawker stalls at Gurney Drive and Kimberley Street for an authentic culinary experience. For upscale dining, Penang features fine-dining restaurants that blend traditional flavors with modern gastronomy. Beyond its culinary delights, Penang’s vibrant lifestyle includes art festivals, music performances, and lively night markets. These attractions ensure the island remains a hub of activity day and night, providing visitors and locals with endless opportunities to savor its rich culture, dynamic entertainment, and world-class cuisine.
              </p>
            </div>
          </div>

          <div className="about-section">
            <img
              src="cny.jpg"
              alt="Thaipusam festival in Penang"
              className="about-image"
            />
            <div className="about-text">
              <h3>Events</h3>
              <p>
                Penang’s events calendar brims with festivities showcasing its multicultural heritage. Thaipusam, a vibrant Hindu festival, features grand processions and rituals at temples like Arulmigu Balathandayuthapani Temple. Chinese New Year adds to the excitement, with lion dances and red lanterns illuminating the streets. Modern events further enrich Penang’s appeal, such as the Penang International Food Festival, George Town Literary Festival, and a variety of music concerts. These celebrations highlight Penang’s dynamic blend of tradition and contemporary culture. From colorful festivals to modern gatherings, Penang offers something for everyone, making it a lively destination year-round for locals and visitors alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="about-footer">
        <div className="footer-container">
          <div className="footer-quick-navigation">
            <h3>Quick Navigation</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQs</a></li>
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
              <a href="#"><img src="facebook.jpg" alt="Facebook" /></a>
              <a href="#"><img src="twitter.jpg" alt="Twitter" /></a>
              <a href="#"><img src="instagram.jpg" alt="Instagram" /></a>
              <a href="#"><img src="linkedin.jpg" alt="LinkedIn" /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Penang Government. All Rights Reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPenang;
