"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";


import ShoppingData from "@/data/categories/shoping.json";

interface Article {
  img: string;
  title: string;
  slug: string;
  category: string;
}

// ✅ Prepare shopping articles from JSON
const articles: Article[] = ShoppingData.shopping.map((item) => ({
  ...item,
  category: ShoppingData.category,
}));

const Shopping = () => {
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
          Shopping
        </h5>

        {/* Mobile Horizontal Scroll */}
        <div className="d-block d-md-none overflow-auto">
          <div className="d-flex flex-nowrap gap-3">
            {articles.map((article, index) => (
              <Link
                key={index}
                href={`/${article.category}/${article.slug}`}
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
                  <div style={{ height: 180, position: "relative" }}>
                    <Image
                      src={article.img}
                      alt={article.title}
                      fill
                      style={{ objectFit: "cover"}}
                      sizes="250px"
                    />
                  </div>
                  <div className="card-body px-2 pt-3">
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

        {/* Desktop Grid View */}
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
                    <div style={{ height: 220, position: "relative" }}>
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
                        className="card-text text-dark mb-0"
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

export default Shopping;
