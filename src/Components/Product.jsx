import React from "react";
import "../Style/Product.css"; // Import the CSS file
import Gun1 from "../assets/Gun1.jpg";
import Gun2 from "../assets/Gun2.jpg";
import Gun3 from "../assets/Gun3.jpg";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99",
    image: Gun1,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$149",
    image: Gun2,
  },
  {
    id: 3,
    name: "Gaming Laptop",
    price: "$999",
    image: Gun3,
  },
  {
    id: 4,
    name: "Sneakers",
    price: "$79",
    image: Gun1,
  },
  {
    id: 5,
    name: "Smartphone",
    price: "$599",
    image: Gun1,
  },
  {
    id: 6,
    name: "Camera",
    price: "$450",
    image: Gun1,
  },
  {
    id: 7,
    name: "Camera",
    price: "$450",
    image: Gun1,
  },
  {
    id: 9,
    name: "Camera",
    price: "$450",
    image: Gun1,
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
