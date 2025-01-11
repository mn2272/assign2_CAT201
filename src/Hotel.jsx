import React from 'react';
import './Hotel.css';

const Hotel = () => {
  return (
    <div className="hotel">
      <div className="intro-section">
        <h1>Hotels in Penang</h1>
        <p>Explore the best places to stay in Penang for a memorable vacation! From luxury resorts to beachfront retreats, Penang has it all.</p>
      </div>
      <div className="hotel-list">
        <div className="hotel-card">
          <h2>Eastern & Oriental Hotel</h2>
          <p>
            A colonial-style luxury hotel offering breathtaking views of the ocean and George Town. 
            Perfect for history lovers and those seeking classic elegance.
          </p>
          <a href="https://www.eohotels.com/" className="btn-book-now" target="_blank" rel="noopener noreferrer">
            Book Now
          </a>
        </div>
        <div className="hotel-card">
          <h2>G Hotel Gurney</h2>
          <p>
            Modern, stylish, and situated on the famous Gurney Drive, G Hotel Gurney offers top-notch amenities and stunning views of the sea.
          </p>
          <a href="https://gurney.ghotel.com.my/" className="btn-book-now" target="_blank" rel="noopener noreferrer">
            Book Now
          </a>
        </div>
        <div className="hotel-card">
          <h2>Hard Rock Hotel Penang</h2>
          <p>
            A rock-themed hotel located at Batu Ferringhi Beach, offering entertainment, water sports, and a lively atmosphere for all ages.
          </p>
          <a href="https://hotel.hardrock.com/penang/" className="btn-book-now" target="_blank" rel="noopener noreferrer">
            Book Now
          </a>
        </div>
        <div className="hotel-card">
          <h2>PARKROYAL Penang Resort</h2>
          <p>
            An upscale beachfront resort offering luxury and relaxation with a blend of tropical gardens, spa treatments, and family-friendly activities.
          </p>
          <a href="https://www.panpacific.com/en/hotels-and-resorts/pr-penang/offers.html" className="btn-book-now" target="_blank" rel="noopener noreferrer">
            Book Now
          </a>
        </div>
        <div className="hotel-card">
          <h2>Lexis Suites Penang</h2>
          <p>
            A tranquil beachfront resort with spacious suites and private pools, perfect for a relaxing stay in a peaceful environment.
          </p>
          <a href="https://www.lexissuitespenang.com/" className="btn-book-now" target="_blank" rel="noopener noreferrer">
            Book Now
          </a>
        </div>
      </div>
      <div className="explore-more">
        <p>Not sure which hotel to choose? Penang offers a wide range of experiences, from luxury to budget-friendly options. Book your perfect getaway today!</p>
      </div>
    </div>
  );
};

export default Hotel;
