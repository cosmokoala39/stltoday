"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

import businessData from "@/data/categories/technology.json";

// Define interface matching your data shape
interface RawArticle {
  img: string;
  title: string;
  slug: string;
  description?: string;
}

// Extended interface with category added
interface Article extends RawArticle {
  category: string;
}

// Map and typecast businessData.businessNews safely
const articles: Article[] = (businessData.businessNews as RawArticle[]).map((item) => ({
  ...item,
  category: businessData.category,
}));

const Technology = () => {
  return (
    <>
      {/* White Section */}
      <div className="container-fluid bg-white py-4 px-5">
        <h5
          className="mb-4 fw-bold ms-2 text-black ps-2"
          style={{
            borderLeft: "6px solid #0d6efd",
            fontFamily: "Times New Roman, Times, serif",
          }}
        >
          
        </h5>
      </div>

      {/* Black Section */}
      <div style={{ backgroundColor: "black", width: "100%" }} className="py-4 px-4">
        <h5
          className="text-white mb-4 fw-bold ps-2"
          style={{
            borderLeft: "6px solid #0d6efd",
            fontFamily: "Times New Roman, Times, serif",
          }}
        >
          Technology
        </h5>

        {/* Mobile Scrollable Section */}
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
                    backgroundColor: "black",
                    fontFamily: "Times New Roman, Times, serif",
                  }}
                >
                  <div style={{ position: "relative", height: "180px" }}>
                    <Image
                      src={article.img}
                      alt={article.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="280px"
                    />
                  </div>
                  <div className="card-body px-2 pt-3">
                    <p
                      className="card-text text-white mb-0"
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

        {/* Desktop Grid */}
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
                    backgroundColor: "black",
                    fontFamily: "Times New Roman, Times, serif",
                  }}
                >
                  <div style={{ position: "relative", height: "200px" }}>
                    <Image
                      src={article.img}
                      alt={article.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(min-width: 768px) 25vw, 100vw"
                    />
                  </div>
                  <div className="card-body px-2 pt-3">
                    <p
                      className="card-text text-white mb-0"
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
    </>
  );
};

export default Technology;
