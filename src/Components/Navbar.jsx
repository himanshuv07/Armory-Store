import React, { useState, useEffect } from "react";
import "../Style/Navbar.css";
import { FaShoppingCart, FaUserSecret } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import logo from "../assets/Logo.jpeg";
import Login from "./Login";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detect screen resize to toggle mobile mode
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setSidebarOpen(false); // Hide sidebar when switching back to large screen
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLoginClick = () => {
    setShowLogin((prev) => !prev);
  };

  const handleSideBar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      {/* Navbar */}
      <div className="nav-container">
        {/* Logo */}
        <div className="aside-1">
          {/* <img src={logo} alt="Logo" /> */}
          <h2 className="logo"><span>H</span>IMANSHU <span>A</span>RMORY</h2>
        </div>

        {/* Main Menu */}
        <div className={`aside-2 ${sidebarOpen ? "active" : ""}`}>
          <h2 onClick={() => setSidebarOpen(false)}>Home</h2>
          <h2 onClick={() => setSidebarOpen(false)}>About</h2>
          <h2 onClick={() => setSidebarOpen(false)}>Contact</h2>
        </div>

        {/* Right Section (Hidden in Mobile) */}
        {!isMobile && (
          <div className="aside-3">
            <button className="loginBtn" onClick={handleLoginClick}>
              <FaUserSecret size={30} color="white" />
              {showLogin ? "Close" : "Login"}
            </button>
            <div className="AddToCart">
              Cart
              <FaShoppingCart size={30} color="black" />
            </div>
          </div>
        )}

        {/* Sidebar Toggle (Only in Mobile) */}
        {isMobile && (
          <div className="sidebar" onClick={handleSideBar}>
            <FiAlignJustify size={40} color="black" />
          </div>
        )}
      </div>

      {/* Sidebar (Only in Mobile) */}
      {isMobile && (
        <div className={`mobile-sidebar ${sidebarOpen ? "active" : ""}`}>
          <h2 onClick={() => setSidebarOpen(false)}>Home</h2>
          <h2 onClick={() => setSidebarOpen(false)}>About</h2>
          <h2 onClick={() => setSidebarOpen(false)}>Contact</h2>
          {/* Move Login and Cart to Sidebar in Mobile */}
          <button className="loginBtn" onClick={handleLoginClick}>
            <FaUserSecret size={30} color="white" />
            {showLogin ? "Close" : "Login"}
          </button>
          <div className="AddToCart">
            Cart
            <FaShoppingCart size={30} color="black" />
          </div>
        </div>
      )}

      {/* Show Login Form */}
      {showLogin && <Login />}
    </>
  );
};

export default Navbar;
