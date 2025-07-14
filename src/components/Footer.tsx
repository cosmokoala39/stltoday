'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ Import Next.js Image component
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-black text-light pt-5 pb-4">
      <div className="container">
        <div className="row">

          {/* Column 1: Logo + Social + Links */}
          <div className="col-md-4 mb-4">
            <Image
              src="/images/logo-headerr.webp"
              alt="St. Louis Post-Dispatch"
              width={230}
              height={60} // Approximate height (auto scaling will adjust this)
              style={{ width: "230px", height: "auto" }}
              priority
            />

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-3">
              <i className="bi bi-facebook fs-5 text-light"></i>
              <i className="bi bi-x fs-5 text-light"></i>
              <i className="bi bi-cloud-fill fs-5 text-light"></i>
              <i className="bi bi-linkedin fs-5 text-light"></i>
              <i className="bi bi-youtube fs-5 text-light"></i>
              <i className="bi bi-music-note-beamed fs-5 text-light"></i>
              <i className="bi bi-pinterest fs-5 text-light"></i>
              <i className="bi bi-instagram fs-5 text-light"></i>
            </div>

            {/* Related Links */}
            <ul className="list-unstyled small mt-3">
              <li><Link href="/" className="text-light text-decoration-none">Feast Magazine</Link></li>
              <li><Link href="/" className="text-light text-decoration-none">Ladue News</Link></li>
              <li><Link href="/" className="text-light text-decoration-none">STL High School Sports</Link></li>
              <li><Link href="/" className="text-light text-decoration-none">STL Pinch Hits</Link></li>
            </ul>
          </div>

          {/* Column 2: Sites & Partners */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-light mb-3">Sites & Partners</h5>
            <ul className="list-unstyled small">
              {[
                "Apps", "Archives", "Calendar", "Chats", "Comics & games", "Contests",
                "E-edition", "Forums", "Newsletters", "Our events", "Press releases",
                "Online Features", "Submit an event", "Get Healthy"
              ].map((item, idx) => (
                <li key={idx} className="mb-1">
                  <Link href="/" className="text-light text-decoration-none">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-light mb-3">Services</h5>
            <ul className="list-unstyled small">
              {[
                "Advertise with us", "Autos", "Classifieds", "Contact us", "Homes", "Jobs",
                "Site help", "Subscriber services", "Work here", "Shopping"
              ].map((item, idx) => (
                <li key={idx} className="mb-1">
                  <Link href="/" className="text-light text-decoration-none">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <hr className="border-secondary" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start text-light small px-2">
          {/* Left Side */}
          <div>
            © {new Date().getFullYear()} <strong>St. Louis Post-Dispatch</strong>, 901 N. 10th St. St. Louis, MO 63101
            <br />
            <Link href="/" className="text-light text-decoration-none me-2">Terms of Use</Link> |
            <Link href="/" className="text-light text-decoration-none mx-2">Privacy Policy</Link> |
            <Link href="/" className="text-light text-decoration-none mx-2">Advertising Terms</Link> |
            <Link href="/" className="text-light text-decoration-none mx-2">Do Not Sell My Info</Link> |
            <Link href="/" className="text-light text-decoration-none">Cookie Preferences</Link>
          </div>

          {/* Right Side */}
          <div className="mt-3 mt-md-0 text-md-end">
            Powered by <a href="https://www.bloxdigital.com" className="text-light text-decoration-none">BLOX Content Management System</a> from bloxdigital.com.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
