import React from 'react';
import './FoodAndLifestyle.css';

const FoodAndLifestyle = () => {
  return (
    <div className="food-lifestyle">
      <header className="food-header">
        <h2>Discover Penang's Food Paradise</h2>
        <p>
        Penang is often hailed as a food haven, where every meal is a delightful exploration of flavors and cultures. The island's rich culinary scene is deeply rooted in its diverse heritage, blending Malay, Chinese, Indian, and Peranakan influences to create dishes that are both authentic and unforgettable.

From the smoky stir-fried goodness of Char Kuey Teow to the tangy and flavorful Penang Laksa, every dish tells a story of tradition and passion. Hawker stalls, bustling food courts, and charming heritage cafes in places like Gurney Drive and Kimberley Street offer endless options for food lovers to indulge in.

Penang’s food culture isn’t just about eating—it’s about experiencing the vibrant community spirit that comes with every bite. Whether it's enjoying the rich curries of Nasi Kandar, savoring sweet treats like Cendol, or sipping on freshly brewed local coffee, Penang offers a culinary adventure that truly lives up to its reputation as a food paradise.
        </p>
      </header>

      <section className="food-section">
        <h3>Must-Try Foods in Penang</h3>
        <div className="food-grid">
          <div className="food-card">
            <img src="char.jpg" alt="Char Kuey Teow" />
            <h4>Char Kuey Teow</h4>
            <p>
              A beloved Penang street food, this stir-fried flat noodle dish is made with prawns, eggs, 
              bean sprouts, and chives, all cooked over high heat to give it a signature smoky flavor.
            </p>
          </div>
          <div className="food-card">
            <img src="laksa.jpg" alt="Penang Laksa" />
            <h4>Penang Laksa</h4>
            <p>
              A tangy and spicy fish-based noodle soup garnished with cucumber, onions, and mint leaves. 
              It’s a UNESCO-recognized dish that represents the heart of Penang's culinary heritage.
            </p>
          </div>
          <div className="food-card">
            <img src="nasi.jpg" alt="Nasi Kandar" />
            <h4>Nasi Kandar</h4>
            <p>
              Steamed rice served with a variety of curries and side dishes, offering a flavorful and 
              aromatic dining experience that’s popular among locals and tourists alike.
            </p>
          </div>

          <div className="food-card">
            <img src="cendol.jpg" alt="Cendol" />
            <h4>Cendol</h4>
            <p>
              A refreshing dessert made with shaved ice, green rice flour jelly, coconut milk, and palm 
              sugar syrup, perfect for Penang's warm weather.
            </p>
          </div>
          <div className="food-card">
            <img src="satay.jpg" alt="Satay" />
            <h4>Satay</h4>
            <p>
              Skewered and grilled marinated meat, usually served with a delicious peanut sauce. Penang's 
              satay is particularly renowned for its tender texture and smoky flavor.
            </p>
          </div>
          <div className="food-card">
            <img src="rojak.jpg" alt="Rojak" />
            <h4>Rojak</h4>
            <p>
              A popular local salad made with fruits, vegetables, fried tofu, and topped with a spicy, 
              tangy peanut sauce. A delightful mix of sweet, sour, and spicy flavors.
            </p>
          </div>

          <div className="food-card">
            <img src="mee.jpg" alt="Hokkien Mee" />
            <h4>Hokkien Mee</h4>
            <p>
              A hearty noodle soup made with prawns, pork, and a rich, flavorful broth. It's often topped 
              with fried shallots, boiled egg, and fresh chili for added zest.
            </p>
          </div>
          <div className="food-card">
            <img src="prawn.jpg" alt="Penang Prawn Noodles" />
            <h4>Penang Prawn Noodles</h4>
            <p>
              A beloved dish made with yellow noodles and rice vermicelli, served in a flavorful broth 
              made from prawn stock, often garnished with boiled eggs, prawns, and fried shallots.
            </p>
          </div>
          <div className="food-card">
            <img src="sar.jpg" alt="Tau Sar Piah" />
            <h4>Tau Sar Piah</h4>
            <p>
              A famous Penang pastry filled with mung bean paste, this snack is a sweet and savory delight 
              that has become an iconic treat for visitors to the island.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodAndLifestyle;
