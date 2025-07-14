"use client";

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";
import Image from "next/image";

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
    { label: "Home", href: "/" },
    { label: "Politics", href: "/politics" },
    { label: "Health", href: "/health" },
    { label: "Sports", href: "/sports" },
    { label: "Science", href: "/science" },
    { label: "Business", href: "/business" },
    { label: "Technology", href: "/technology" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Header top section */}
      <div className="d-flex px-3 justify-space-between bg-black">


        <div className="mt-2 d-lg-none">
          <i
            className="bi bi-list fs-1 text-light header-display"
            style={{ cursor: "pointer" }}
            onClick={toggleMenu}
          ></i>
        </div>

        <div className="d-flex px-3 mt-2 gap-4 flex-wrap logo-anime">
          <Link
            href="/images/logo-headerr.webp"
            className="flip-container hhh"
            style={{ textDecoration: "none" }}
          >
            <div className={`flipper vertical ${flipped ? "flipped" : ""}`}>
              <div className="front">
                <Image
                  src="/images/logo-headerr.webp"
                  alt="St. Louis-Post-Dispatch"
                  width={800}
                  height={200}
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
              </div>
              <div className="back d-flex align-items-center justify-content-center fw-semibold text-center px-2">
                Where your story lives
              </div>
            </div>
          </Link>

          <div
            className="d-none d-lg-flex align-items-center"
            style={{ marginTop: "10px" }}
          >
            <i className="bi bi-search me-2"></i>
            <div
              style={{
                position: "relative",
                maxWidth: "280px",
                minWidth: "300px",
              }}
            >
              <input
                type="text"
                placeholder="Search St. Louis Post-Dispatch"
                className="w-200 search-width"
                style={{
                  width: "100%",
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

        <div className="mt-2  ms-auto subscribe-none">
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

      {/* Mobile Header Navigation (Logo + Button) */}
      <div
        className="bg-black d-lg-none"
        style={{ borderBottom: "0.3px solid #444" }}
      >
        <div className="container-fluid align-items-center justify-content-between px-3 py-2 header-none">
          <i
            className="bi bi-list fs-4 text-light d-lg-none"
            style={{ cursor: "pointer" }}
            onClick={toggleMenu}
          ></i>

          <div className="flex-grow-1 d-flex justify-content-center">
            <Link href="/" className="d-flex justify-content-center">
              <Image
                src="/images/"
                alt="St. Louis Post-Dispatch"
                width={180}
                height={60}
                style={{ width: "180px", height: "auto" }}
                priority
              />
            </Link>
          </div>

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

        {/* ✅ Mobile Navigation Menu (Toggles on click) */}
        {menuOpen && (
          <div className="bg-dark px-4 py-2 d-lg-none">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setMenuOpen(false)} // Optional: Close on click
                className="d-block text-light py-2 text-decoration-none border-bottom border-secondary"
                style={{ fontSize: "0.95rem" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Nav */}
      <div
        className="bg-black pt-2 pb-1 sticky-header d-none d-lg-block"
        style={{ borderBottom: "0.3px solid #444" }}
      >
        <div className="container-fluid d-flex flex-wrap align-items-center justify-content-between gap-3 px-5">
          <div className="d-flex align-items-center gap-4 flex-wrap">
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
