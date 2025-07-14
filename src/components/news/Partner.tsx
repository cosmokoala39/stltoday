"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import businessData from "@/data/categories/business.json";

const articles = businessData.businessNews.map((item) => ({
  ...item,
  category: businessData.category,
}));

const Partner = () => {
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
          Partner
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
                    minWidth: "280px",
                    fontFamily: "Times New Roman, Times, serif",
                  }}
                >
                  <div style={{ position: "relative", height: 200 }}>
                    <Image
                      src={article.img}
                      alt={article.title}
                      fill
                      style={{ objectFit: "cover", borderRadius: "8px" }}
                      sizes="280px"
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
            ))}
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="row gx-4 gy-4 d-none d-md-flex">
          {articles.map((article, index) => (
            <div key={index} className="col-md-3">
              <Link
                href={`/${article.category}/${article.slug}`}
                className="text-decoration-none"
              >
                <div
                  className="card border-0 h-100"
                  style={{
                    fontFamily: "Times New Roman, Times, serif",
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
  );
};

export default Partner;
