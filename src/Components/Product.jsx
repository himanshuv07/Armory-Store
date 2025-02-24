import React from "react";
import "../Style/Product.css"; // Import the CSS file
import Gun1 from "../assets/Gun1.jpg";
import Gun2 from "../assets/Gun2.jpg";
import Gun3 from "../assets/Gun3.jpg";
import Gun4 from "../assets/gun4.jpg";
import Gun5 from "../assets/Gun5.jpg";
import Gun6 from "../assets/Gun6.jpg";
import Gun7 from "../assets/Gun7.jpg";
import Gun8 from "../assets/Gun8.jpg";

const products = [
  {
    id: 1,
    name: "AK-47 Assault Rifle",
    price: "$999",
    image: Gun1,
  },
  {
    id: 2,
    name: "FN SCAR-H",
    price: "$1,299",
    image: Gun2,
  },
  {
    id: 3,
    name: "Glock 19 Pistol",
    price: "$599",
    image: Gun3,
  },
  {
    id: 4,
    name: "Remington 700 Sniper",
    price: "$5,500",
    image: Gun4,
  },
  {
    id: 5,
    name: "M4A1 Carbine",
    price: "$2,499",
    image: Gun5,
  },
  {
    id: 6,
    name: "Uzi Submachine Gun",
    price: "$1,200",
    image: Gun6,
  },
  {
    id: 7,
    name: "AWM Sniper",
    price: "$3,000",
    image: Gun7,
  },
  {
    id: 8,
    name: "Beretta M9",
    price: "$700",
    image: Gun8,
  },
];

const Product = () => {
  return (
    <section className="product-section">
      <h2 className="section-title">🔥 Trending Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
