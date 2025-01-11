import React from 'react';
import './AboutPenang.css';

const AboutPenang = () => {
  return (
    <div className="about-penang">
      <section className="about-penang-main">
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
              Penang offers a wide range of outdoor activities for nature enthusiasts. 
              Penang Hill’s lush greenery provides a refreshing retreat with panoramic island views. 
              Batu Ferringhi’s golden beaches are ideal for water sports such as parasailing, jet skiing, and windsurfing. 
              Penang National Park is a haven for wildlife, featuring trails that lead to hidden gems like 
              the Turtle Sanctuary and Monkey Beach. Whether you’re a casual hiker or a seasoned adventurer, the park 
              offers something for everyone. From thrilling water sports to tranquil forest treks, Penang’s natural attractions
               promise unforgettable experiences, combining vibrant landscapes and serene escapes for all who visit this.
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
                Penang is renowned as a global food paradise, offering an unrivaled street food scene 
                with iconic dishes like char kuey teow, Penang laksa, and nasi kandar. Food lovers 
                flock to hawker stalls at Gurney Drive and Kimberley Street for an authentic culinary experience. 
                For upscale dining, Penang features fine-dining restaurants that blend traditional flavors with modern gastronomy. 
                Beyond its culinary delights, Penang’s vibrant lifestyle includes art festivals, music performances, and 
                lively night markets. These attractions ensure the island remains a hub of activity day and night, 
                providing visitors and locals with endless opportunities to savor its rich culture, dynamic entertainment, 
                and world-class cuisine.
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
                Penang’s events calendar brims with festivities showcasing its multicultural heritage. 
                Thaipusam, a vibrant Hindu festival, features grand processions and rituals at temples like 
                Arulmigu Balathandayuthapani Temple. Chinese New Year adds to the excitement, with lion dances
                 and red lanterns illuminating the streets. Modern events further enrich Penang’s appeal, such 
                 as the Penang International Food Festival, George Town Literary Festival, and a variety of music concerts. 
                 These celebrations highlight Penang’s dynamic blend of tradition and contemporary culture. 
                 From colorful festivals to modern gatherings, Penang offers something for everyone, making 
                 it a lively destination year-round for locals and visitors alike.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPenang;
