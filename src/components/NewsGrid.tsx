"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Image from "next/image";
import businessData from "@/data/categories/business.json";

interface Article {
  title: string;
  img: string;
  slug: string;
  category: string;
}

const NewsGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isFeaturedHovered, setIsFeaturedHovered] = useState(false);

  const featuredArticle: Article = {
    ...businessData.featured,
    category: businessData.category,
  };

  const sideArticles: Article[] = businessData.businessNews.map((article) => ({
    ...article,
    category: businessData.category,
  }));

  return (
    <div
      className="container-fluid text-light py-5 px-3 px-lg-4"
      style={{ backgroundColor: "#010922" }}
    >
      <div className="row g-4">
        {/* Featured Article */}
        <div
          className="col-lg-5"
          style={{ cursor: "pointer" }}
          onMouseEnter={() => setIsFeaturedHovered(true)}
          onMouseLeave={() => setIsFeaturedHovered(false)}
        >
          <Link
            href={`/${featuredArticle.category}/${featuredArticle.slug}`}
            className="text-decoration-none text-white"
          >
            <div
              className="img-fluid w-100"
              style={{
                aspectRatio: "16/9",
                position: "relative",
              }}
            >
              <Image
                src={featuredArticle.img}
                alt="Featured"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </Link>
          <h2
            className="mt-3 fw-bold"
            style={{
              fontSize: "2.5rem",
              fontFamily: "Times New Roman",
              color: isFeaturedHovered ? "#b0b0b0" : "#ffffff",
            }}
          >
            {featuredArticle.title}
          </h2>
        </div>

        {/* Side Articles */}
        <div className="col-lg-7">
          <div className="row g-3">
            {sideArticles.map((article, index) => (
              <div
                className="col-6 col-md-4"
                key={index}
                style={{ cursor: "pointer" }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link
                  href={`/${article.category}/${article.slug}`}
                  className="text-decoration-none text-white"
                >
                  <div className="h-100 d-flex flex-column">
                    <div
                      className="img-fluid mb-2"
                      style={{
                        width: "100%",
                        aspectRatio: "16/9",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={article.img}
                        alt={`news-${index}`}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h5
                      className="fw-semibold"
                      style={{
                        fontSize: "1rem",
                        fontFamily: "Times New Roman, Times, serif",
                        flexGrow: 1,
                        color: hoveredIndex === index ? "#b0b0b0" : "#ffffff",
                      }}
                    >
                      {article.title}
                    </h5>
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

export default NewsGrid;
