'use client';

import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

const EditorsPick = () => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        minHeight: "90vh",
        width: "100vw",
        padding: "60px 0",
        overflow: "hidden",
      }}
    >
      <div className="container-fluid px-5">
        <div
          className="border p-5 mx-auto"
          style={{
            maxWidth: "1400px",
            fontFamily: "Times New Roman, Times, serif",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            height: "100%",
          }}
        >
          {/* Section Heading */}
          <h3 className="mb-5 text-black fw-bold">
            <span className="text-primary border-start border-4 ps-2 me-2">|</span>
            Editor&apos;s Pick
          </h3>

          {/* Image + Content Row */}
          <div className="row h-100">
            {/* Left: Image */}
            <div className="col-md-6 mb-4 mb-md-0">
              <div style={{ position: "relative", width: "100%", height: "350px" }}>
                <Image
                  src="https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/8/14/8148675b-1422-5be4-838a-2c3557e94093/683da8d4a03ee.preview.jpg?crop=1830%2C1029%2C0%2C51&resize=400%2C225&order=crop%2Cresize"
                  alt="Editor's Pick"
                  fill
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Right: Text content */}
            <div className="col-md-6 d-flex flex-column justify-content-center ps-md-5">
              <h2
                className="mb-4"
                style={{
                  fontSize: "2rem",
                  fontWeight: 900,
                  color: "#000",
                }}
              >
                Hours, fees, features: Find a public swimming pool or water park
                in the St. Louis area
              </h2>

              <p style={{ fontSize: "1.15rem", color: "#333" }}>
                Our guide to public St. Louis-area pools and water parks is
                updated for 2025 with all the info on attractions, hours and more.
              </p>

              <ul
                className="mb-0"
                style={{
                  fontSize: "1rem",
                  color: "#000",
                  fontWeight: 600,
                  lineHeight: "1.8rem",
                  paddingLeft: "1.2rem",
                }}
              >
                <li>18 splash pads across the St. Louis area where kids can keep cool this summer</li>
                <li>7 unique daytrips from St. Louis</li>
                <li>11 indoor places to go with kids in the steamy St. Louis summer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
