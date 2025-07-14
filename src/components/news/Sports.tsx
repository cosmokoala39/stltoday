"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ Import business.json (replace with sports.json when available)
import businessData from "@/data/categories/sports.json";

interface Article {
  img: string;
  title: string;
  slug: string;
  category: string;
  description?: string;
}

// ✅ Use businessNews and include category in each item
const articles: Article[] = businessData.businessNews.map((item) => ({
  ...item,
  category: businessData.category,
}));

const Sports = () => {
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
          Sports
        </h5>

        {/* Mobile: Horizontal Scroll */}
        <div className="d-block d-md-none overflow-auto">
          <div className="d-flex flex-nowrap gap-3">
            {articles.map((article, index) => (
              <Link
                href={`/${article.category}/${article.slug}`}
                key={index}
                className="text-decoration-none"
              >
                <div
                  className="card border-0"
                  style={{
                    minWidth: 250,
                    maxWidth: 250,
                    fontFamily: "Times New Roman, Times, serif",
                  }}
                >
                  <div style={{ position: "relative", height: 180 }}>
                    <Image
                      src={article.img}
                      alt={article.title}
                      fill
                      style={{ objectFit: "cover", borderRadius: "8px" }}
                      sizes="250px"
                    />
                  </div>
                  <div className="card-body px-2 pt-3">
                    {article.title && (
                      <small className="text-muted">{article.title}</small>
                    )}
                    <p
                      className="card-text text-dark mb-0"
                      style={{
                        fontSize: "1.1rem",
                        lineHeight: "1.3rem",
                        fontWeight: 1000,
                      }}
                    >
                      {article.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop: 4-column Grid */}
        <div className="d-none d-md-block">
          <div className="row gx-4 gy-4">
            {articles.map((article, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-3">
                <Link
                  href={`/${article.category}/${article.slug}`}
                  className="text-decoration-none"
                >
                  <div
                    className="card border-0 h-100"
                    style={{
                      fontFamily: "Times New Roman, Times, serif",
                      fontSize: "0.9rem",
                    }}
                  >
                    <div style={{ position: "relative", height: 220 }}>
                      <Image
                        src={article.img}
                        alt={article.title}
                        fill
                        style={{ objectFit: "cover", borderRadius: "8px" }}
                        sizes="(min-width: 768px) 25vw, 100vw"
                      />
                    </div>
                    <div className="card-body px-2 pt-3">
                      
                      
                      <p
                        className="card-text mb-0 text-dark"
                        style={{
                          fontSize: "1.2rem",
                          lineHeight: "1.3rem",
                          fontWeight: 1000,
                        }}
                      >
                        {article.title}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
