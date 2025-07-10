"use client";

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";

const Header = () => {
  const [flipped, setFlipped] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { label: "E-edition", href: "/edition" },
    { label: "News", href: "/News" },
    { label: "Obits", href: "/Obits" },
    { label: "Sports", href: "/Sports" },
    { label: "Opinion", href: "/Opinion" },
    { label: "Puzzles", href: "/Puzzles" },
    { label: "Podcasts", href: "/Podcasts" },
    { label: "Lifestyles", href: "/Life" },
    { label: "Business", href: "/business" },
    { label: "STL Headliner", href: "/Headliner" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="header-none-2 px-3  center-align bg-black">
        {/* menu */}
        <div className="mt-3 ">
          <i
            className="bi bi-list fs-1 text-light header-display"
            style={{ cursor: "pointer" }}
            onClick={toggleMenu}
          ></i>
        </div>

        {/* Logo + Flip Text */}
        <div className="d-flex px-3 mt-2 gap-4 flex-wrap logo-anime">
          <div
            className="flip-container"
            style={{ width: "220px", marginTop: "12px" }}
          >
            <div className={`flipper vertical ${flipped ? "flipped" : ""}`}>
              <div className="front">
                <img
                  src="/images/st louise.webp"
                  alt="St. Louis Post-Dispatch"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="back d-flex align-items-center justify-content-center fw-semibold text-center px-2">
                Where your story lives
              </div>
            </div>
          </div>

          {/* Search - Only show on desktop */}
          <div
            className="d-none d-lg-flex align-items-center"
            style={{ marginTop: "10px" }}
          >
            <i className="bi bi-search me-2"></i>
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "280px",
                minWidth: "300px",
              }}
            >
              <input
                type="text"
                placeholder="Search St. Louis Post-Dispatch"
                className="w-200 search-width"
                style={{
                  width: "100%", // Make input take full container width
                  backgroundColor: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.5)",
                  color: "white",
                  outline: "none",
                  padding: "5px 0",
                  fontSize: "0.99rem",
                  fontWeight: "400",
                }}
              />
            </div>
          </div>
        </div>

        {/* Subscribe Button */}
        <div className=" mt-3 mt-md-0 ms-auto subscribe-none">
          <button
            className="btn d-flex flex-column justify-content-end align-items-center"
            style={{
              width: "81px",
              height: "33px",
              backgroundColor: "#2a5caa",
              color: "white",
              borderRadius: 0,
              padding: "2px",
              lineHeight: 1.1,
            }}
          >
            <span style={{ fontSize: ".8rem", fontWeight: "550" }}>
              Subscribe
            </span>
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: "300",
                marginTop: "2px",
                marginBottom: "3px",
              }}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Bar */}
      <div
        className="bg-black d-lg-none"
        style={{ borderBottom: "0.3px solid #444" }}
      >
        <div className="container-fluid  align-items-center justify-content-between px-3 py-2 header-none">
          {/* Menu Icon */}
          <i
            className="bi bi-list fs-4 text-light"
            style={{ cursor: "pointer" }}
            onClick={toggleMenu}
          ></i>

          {/* Logo - smaller version for mobile */}
          <div className="flex-grow-1 d-flex justify-content-center">
            <img
              src="/images/st louise.webp"
              alt="St. Louis Post-Dispatch"
              style={{ width: "180px", height: "auto" }}
            />
          </div>

          {/* Subscribe Button - smaller for mobile */}
          <button
            className="btn d-flex flex-column justify-content-center align-items-center"
            style={{
              width: "100px",
              height: "40px",
              backgroundColor: "#2a5ca",
              color: "white",
              borderRadius: 0,
              padding: "2px",
              lineHeight: 1,
              fontSize: "0.8rem",
            }}
          >
            <span style={{ fontWeight: "550" }}>Subscribe</span>
            <span style={{ fontSize: "0.7rem", fontWeight: "300" }}>$0.99</span>
          </button>
        </div>

        {/* Collapsible Menu */}
        <div
          className={`collapse ${menuOpen ? "show" : ""}`}
          style={{ backgroundColor: "#1a1a1a" }}
        >
          <div className="container-fluid py-3">
            {/* Search in mobile menu */}
            <div className="mb-3">
              <div className="d-flex align-items-center">
                <i className="bi bi-search me-2 text-light"></i>
                <input
                  type="text"
                  placeholder="Search St. Louis Post-Dispatch"
                  className="w-100"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.5)",
                    color: "white",
                    outline: "none",
                    padding: "8px 0",
                    fontSize: "1rem",
                  }}
                />
              </div>
            </div>

            {/* Navigation Items */}
            <div className="row">
              {navItems.map((item, index) => (
                <div key={index} className="col-6 col-sm-4 mb-3">
                  <Link
                    href={item.href}
                    className="text-light text-decoration-none fw-semibold d-block py-2"
                    style={{ fontSize: "1rem" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>

            {/* Weather and User Info */}
            <div
              className="d-flex justify-content-between align-items-center mt-3 pt-3"
              style={{ borderTop: "1px solid #444" }}
            >
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-moon text-light"></i>
                <span className="text-light">74° Clear</span>
              </div>

              <div className="d-flex align-items-center gap-3">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "36px",
                    height: "36px",
                    backgroundColor: "#2a5caa",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                >
                  <i className="bi bi-bell-fill text-white fs-6"></i>
                </div>

                <div
                  className="d-flex align-items-center gap-1"
                  style={{ cursor: "pointer" }}
                >
                  <i className="bi bi-person fs-4 text-light"></i>
                  <span className="text-light">Log In</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Bar */}
      <div
        className="bg-black pt-2 pb-1 sticky-header d-none d-lg-block"
        style={{ borderBottom: "0.3px solid #444" }}
      >
        <div className="container-fluid d-flex flex-wrap align-items-center justify-content-between gap-3 px-3">
          <div className="d-flex align-items-center gap-4 flex-wrap">
            <i className="bi bi-list fs-5" style={{ cursor: "pointer" }}></i>

            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-light text-decoration-none fw-semibold"
                style={{ fontSize: "0.85rem" }}
              >
                {item.label}
              </Link>
            ))}

            <div
              className="d-flex align-items-center gap-1"
              style={{ fontSize: "12px" }}
            >
              <i className="bi bi-moon"></i>
              <span style={{ fontSize: "14px" }}>
                74° <span className="text-white">Clear</span>
              </span>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "36px",
                height: "36px",
                backgroundColor: "#2a5caa",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <i className="bi bi-bell-fill text-white fs-6"></i>
            </div>

            <div className="vr bg-light" style={{ height: "30px" }} />

            <div
              className="d-flex align-items-center gap-1"
              style={{ cursor: "pointer" }}
            >
              <i className="bi bi-person fs-4 text-light"></i>
              <span className="d-none d-md-inline" style={{ fontSize: "1rem" }}>
                Log In
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
