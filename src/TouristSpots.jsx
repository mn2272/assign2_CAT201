import React from 'react';
import './TouristSpots.css';

const TouristSpots = () => {
  return (
    <div className="tourist-spots-modern">
      <div className="title-section">
        <h1>Top Tourist Spots in Penang</h1>
      </div>
      <div className="card-container">
        <div className="spot-card-modern">
          <img src="hill.jpg" alt="Penang Hill" />
          <h2>Penang Hill</h2>
          <p>
            Located 821 meters above sea level, Penang Hill offers one of the most stunning panoramic views of Penang Island. The cooler climate and lush greenery make it an ideal escape from the hustle and bustle of the city. Visitors can enjoy a scenic funicular train ride to the top, where they can explore walking trails, colonial-era bungalows, and enjoy a variety of dining options. Penang Hill is a perfect destination for nature lovers and photography enthusiasts.
          </p>
          <a href="https://www.penanghill.gov.my/index.php/ms/" className="learn-more">Learn More</a>
        </div>
        <div className="spot-card-modern">
          <img src="escape.jpg" alt="Escape Theme Park" />
          <h2>Escape Theme Park</h2>
          <p>
            Escape Theme Park is a one-of-a-kind adventure park located in Teluk Bahang, Penang. It is designed to provide fun, thrills, and excitement for visitors of all ages. The park offers a wide range of activities, including zip-lining, water slides, obstacle courses, and nature trails. Escape is committed to promoting active outdoor play and connecting people with nature through its exciting and eco-friendly attractions. Perfect for families and adrenaline junkies alike, this park is a must-visit for thrill-seekers in Penang.
          </p>
          <a href="https://www.escape.my/" className="learn-more">Learn More</a>
        </div>
        <div className="spot-card-modern">
          <img src="art.jpg" alt="George Town Street Art" />
          <h2>George Town Street Art</h2>
          <p>
            George Town is renowned for its vibrant street art scene, which has become a major attraction for visitors from around the world. The city’s walls are adorned with beautiful and thought-provoking murals, many of which reflect Penang's rich cultural heritage and everyday life. Famous street artists such as Ernest Zacharevic have left their mark here, creating whimsical and interactive artwork that encourages visitors to take photos and explore the city's charming streets. A walk through George Town’s art-filled alleys is a must for anyone interested in art and culture.
          </p>
          <a href="https://midlifeglobetrotter.com/penang-street-art/" className="learn-more">Learn More</a>
        </div>
        <div className="spot-card-modern">
          <img src="taman.jpg" alt="Penang National Park" />
          <h2>Penang National Park</h2>
          <p>
            Penang National Park is one of the world’s smallest national parks, but it boasts incredible biodiversity and a wide variety of landscapes, from pristine beaches to tropical rainforests and mangrove swamps. The park is home to a diverse range of wildlife, including endangered species such as the green sea turtle and the dusky leaf monkey. Visitors can enjoy nature trails, visit the famous canopy walk, explore secluded beaches like Teluk Kampi, and take boat rides to nearby islands. Whether you're into hiking, wildlife watching, or simply soaking in the beauty of nature, Penang National Park is a haven for outdoor enthusiasts.
          </p>
          <a href="https://www.wildlife.gov.my/index.php/en/11-info/154-penang-national-park" className="learn-more">Learn More</a>
        </div>
        <div className="spot-card-modern">
          <img src="blue.jpg" alt="Blue Mansion" />
          <h2>Blue Mansion</h2>
          <p>
            The Blue Mansion, also known as the Cheong Fatt Tze Mansion, is a historic building located in the heart of George Town. This iconic blue-colored mansion is an architectural masterpiece that showcases the unique fusion of Eastern and Western design elements. Originally built by Cheong Fatt Tze, a wealthy Chinese merchant in the late 19th century, the mansion features intricate wooden carvings, colorful tiles, and beautiful courtyards. Today, the Blue Mansion serves as a museum and boutique hotel, offering visitors a glimpse into the rich history and culture of Penang’s Peranakan heritage. The mansion is a must-see for history buffs and architecture enthusiasts.
          </p>
          <a href="https://www.cheongfatttzemansion.com/" className="learn-more">Learn More</a>
        </div>
        <div className="spot-card-modern">
          <img src="beach.jpg" alt="Batu Ferringhi Beach" />
          <h2>Batu Ferringhi Beach</h2>
          <p>
          Batu Ferringhi Beach is one of Penang’s most famous beaches, known for its golden sand and clear waters. Located on the island's northern coast, this beach is perfect for a day of relaxation and water activities. Visitors can enjoy parasailing, jet-skiing, and beach volleyball, or simply lounge by the shore under the tropical sun. The area also features a lively night market, where visitors can shop for local crafts, souvenirs, and enjoy a variety of street foods. Whether you’re looking to unwind or take part in exciting water sports, Batu Ferringhi offers the perfect balance of relaxation and adventure.
          </p>
          <a href="https://www.tripadvisor.com/Attraction_Review-g635527-d7602070-Reviews-Batu_Ferringhi_Beach-Batu_Ferringhi_Penang_Island_Penang.html" className="learn-more">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default TouristSpots;
