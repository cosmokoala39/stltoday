"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import ScienceData from "@/data/categories/science.json";

const Science = () => {
  const articles = ScienceData.businessNews.map((article) => ({
    ...article,
    category: ScienceData.category || "business",
  }));

  return (
    <div className="container-fluid bg-white py-4 px-3 px-md-5">
      <div style={{ backgroundColor: "#C1B7B7" }} className="p-4">
        {/* Heading */}
        <h5
          className="mb-1 fw-bold ms-2 text-black ps-2"
          style={{
            borderLeft: "6px solid #0d6efd",
            
            fontFamily: "Times New Roman, Times",
          }}
        >
          Science
        </h5>
        <p className="text-black mb-4">
          Conversations with St. Louis leaders. Presented by Purina
        </p>

        {/* 🖥️ Desktop: Grid View */}
        <div className="row gx-4 gy-4 d-none d-md-flex">
          {articles.map((article, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-3">
              <Link
                href={`/${article.category}/${article.slug}`}
                className="card border-0 h-100 text-dark text-decoration-none"
                style={{
                  fontFamily: "Times New Roman, Times, serif",
                  fontSize: "0.9rem",
                  backgroundColor: "#C1B7B7",
                  display: "block",
                }}
              >
                <div style={{ position: "relative", height: "220px" }}>
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    sizes="(min-width: 768px) 25vw, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="card-body px-2 pt-3">
                  <p
                    className="mb-0"
                    style={{
                      fontSize: "1.2rem",
                      lineHeight: "1.3rem",
                      fontWeight: 1000,
                      backgroundColor: "#C1B7B7",
                    }}
                  >
                    {article.title}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* 📱 Mobile: Image + Text Side-by-Side */}
        <div className="d-block d-md-none">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={`/${article.category}/${article.slug}`}
              className="d-flex mb-3 text-dark text-decoration-none"
              style={{
                backgroundColor: "#C1B7B7",
                borderBottom: "1px solid #aaa",
                paddingBottom: "10px",
              }}
            >
              <div
                style={{
                  flex: "0 0 40%",
                  paddingRight: "10px",
                  position: "relative",
                  height: "100px",
                }}
              >
                <Image
                  src={article.img}
                  alt={article.title}
                  fill
                  style={{ objectFit: "cover", borderRadius: "6px" }}
                />
              </div>
              <div style={{ flex: "1", fontFamily: "Times New Roman" }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: "1rem",
                    fontWeight: 700,
                    lineHeight: "1.3rem",
                    color: "#000",
                  }}
                >
                  {article.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Science;
