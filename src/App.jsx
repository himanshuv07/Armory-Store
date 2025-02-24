import React from "react";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import Product from "./Components/Product";

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Product />
      <Footer />
    </div>
  );
};

export default App;
