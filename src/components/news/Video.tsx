"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import businessData from "@/data/categories/business.json"; // Replace with desired category data

const Video = () => {
  const articles = businessData.businessNews.map((item) => ({
    ...item,
    category: businessData.category || "business",
  }));

  return (
    <div className="container-fluid bg-white py-4">
      <div className="bg-white p-4">
        {/* Section Heading */}
        <h5
          className="mb-4 fw-bold ms-2 text-black ps-2"
          style={{
            borderLeft: "6px solid #0d6efd",
            fontFamily: "Times New Roman, Times, serif",
          }}
        >
          Latest{" "}
          <span className="text-primary" style={{ fontFamily: "Times New Roman" }}>
            Video
          </span>
        </h5>

        {/* 🖥️ Desktop View */}
        <div className="row gx-4 gy-4 d-none d-md-flex">
          {articles.map((article, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-3">
              <Link
                href={`/${article.category}/${article.slug}`}
                className="card border-0 h-100 text-dark"
                style={{
                  fontFamily: "Times New Roman, Times, serif",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <div style={{ position: "relative", height: "220px" }}>
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    sizes="(min-width: 768px) 25vw, 100vw"
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                </div>
                <div className="card-body px-2 pt-3">
                  <p
                    className="card-text mb-0"
                    style={{
                      fontSize: "1.2rem",
                      lineHeight: "1.3rem",
                      fontWeight: 1000,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {article.title}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* 📱 Mobile View (Full Width Scroll) */}
        <div className="d-block d-md-none overflow-auto">
          <div className="d-flex flex-nowrap" style={{ gap: "1rem", paddingBottom: "0.5rem" }}>
            {articles.map((article, index) => (
              <div
                key={index}
                style={{
                  minWidth: "100vw",
                  maxWidth: "100vw",
                  fontFamily: "Times New Roman",
                }}
              >
                <Link
                  href={`/${article.category}/${article.slug}`}
                  className="card border-0 h-100 text-dark"
                  style={{ cursor: "pointer", textDecoration: "none" }}
                >
                  <div style={{ position: "relative", height: "180px" }}>
                    <Image
                      src={article.img}
                      alt={article.title}
                      fill
                      style={{ objectFit: "cover", borderRadius: "8px" }}
                    />
                  </div>
                  <div className="card-body px-3 pt-2">
                    <p
                      className="card-text mb-0"
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        lineHeight: "1.4rem",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {article.title}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        a:hover p {
          color: #0d6efd;
        }
      `}</style>
    </div>
  );
};

export default Video;
