'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import businessData from "@/data/categories/business.json";

const EditorsPick = () => {
  const editorData = businessData.featured; // You can switch this to a dedicated field if needed

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        minHeight: "90vh",
        width: "100%",
        padding: "60px 0",
        overflow: "hidden",
      }}
    >
      <div className="container-fluid px-3 px-md-5">
        <div
          className="border p-3 p-md-5 mx-auto"
          style={{
            maxWidth: "1400px",
            fontFamily: "Times New Roman, Times, serif",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            height: "100%",
          }}
        >
          {/* Section Heading */}
          <h3 className="mb-4 text-black fw-bold">
            <span className="text-primary border-start border-4 ps-2 me-2">|</span>
            Editor&apos;s Pick
          </h3>

          {/* Image + Content Row */}
          <div className="row h-100">
            {/* Left: Image */}
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <div style={{ position: "relative", width: "100%", height: "350px" }}>
                <Link href={`/business/${editorData.slug}`}>
                  <Image
                    src={editorData.img}
                    alt={editorData.title}
                    fill
                    style={{ objectFit: "cover", borderRadius: "10px" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </Link>
              </div>
            </div>

            {/* Right: Text content */}
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center ps-md-5">
              <h2
                className="mb-3"
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 900,
                  color: "#000",
                }}
              >
                {editorData.title}
              </h2>

              

              <ul
                className="mb-0 mt-3"
                style={{
                  fontSize: "1rem",
                  color: "#000",
                  fontWeight: 600,
                  lineHeight: "1.7rem",
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
