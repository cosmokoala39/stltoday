"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import businessData from "@/data/categories/politics.json";

interface BusinessNewsItem {
  img: string;
  title: string;
  slug: string;
  // add other fields if present in JSON to improve type safety
}

interface NewsItem {
  image: string;
  title: string;
  slug: string;
  category: string;
}

// Type-cast businessData.businessNews to BusinessNewsItem[]
const news: NewsItem[] = (businessData.businessNews as BusinessNewsItem[]).map(
  (item) => ({
    image: item.img,
    title: item.title,
    slug: item.slug,
    category: businessData.category,
  })
);

const LatestNews = () => {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#000" }}>
      <div className="mx-auto px-3" style={{ maxWidth: "1500px" }}>
        <h6 className="text-white mb-4 fw-bold">
          <span
            className="ps-5 me-2"
            style={{
              fontFamily: "Times New Roman, Times, serif",
              fontWeight: 700,
            }}
          >
            
          </span>
          <em style={{ fontWeight: 600 }}>Politics</em>
        </h6>

        {/* 🖥️ Desktop view */}
        <div className="d-none d-md-flex row g-4">
          {news.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <NewsCard item={item} />
            </div>
          ))}
        </div>

        {/* 📱 Mobile view */}
        <div
          className="d-flex d-md-none overflow-auto"
          style={{
            gap: "1rem",
            scrollSnapType: "x mandatory",
            paddingBottom: "0.5rem",
          }}
        >
          {news.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: "250px", scrollSnapAlign: "start" }}
            >
              <NewsCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 🧩 Reusable News Card With Link
const NewsCard = ({ item }: { item: NewsItem }) => (
  <Link href={`/${item.category}/${item.slug}`} className="text-decoration-none">
    <div
      className="card border-0 text-white h-100 shadow"
      style={{
        backgroundColor: "black",
        fontFamily: "Times New Roman, Times, serif",
        transition: "transform 0.2s ease",
      }}
    >
      <Image
        src={item.image}
        alt={item.title}
        width={400}
        height={160}
        className="card-img-top"
        style={{
          height: "160px",
          objectFit: "cover",
          cursor: "pointer",
        }}
      />
      <div className="card-body px-3 py-3">
        <p
          className="card-text fw-bold mb-0"
          style={{
            fontSize: "1rem",
            color: "white",
            cursor: "pointer",
            lineHeight: "1.3rem",
            minHeight: "50px",
            userSelect: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "lightgray";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "white";
          }}
        >
          {item.title}
        </p>
      </div>
    </div>
  </Link>
);

export default LatestNews;
