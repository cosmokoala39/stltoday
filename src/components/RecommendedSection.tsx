"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ Added Next.js Image
import "bootstrap/dist/css/bootstrap.min.css";
import HealthData from "@/data/categories/health.json";

const RecommendedSection = () => {
  const articles = HealthData.businessNews.map((item) => ({
    ...item,
    category: HealthData.category,
  }));

  return (
    <div className="container-fluid bg-white p-0 m-0">
      <div className="bg-white py-4 m-0">
        {/* Banner */}
        <div
          className="d-flex align-items-center text-white p-3 mb-4 mx-auto"
          style={{
            backgroundColor: "#120835",
            maxWidth: "700px",
            height: "40px",
            marginTop: "100px",
            cursor: "pointer",
            borderRadius: "10px",
          }}
        >
          <span
            className="badge me-3"
            style={{
              height: "30px",
              padding: "6px 12px",
              fontSize: "1rem",
              borderRadius: "0",
              backgroundColor: "black",
              color: "#89abe1",
              fontWeight: 400,
              fontFamily: "Times New Roman, Times, serif",
            }}
          >
            Shopping
          </span>

          <span
            className="fw-semibold text-white"
            style={{
              fontSize: "1rem",
              fontFamily: "Times New Roman, Times, serif",
            }}
          >
            Can you outrun rising car insurance prices?
          </span>
        </div>

        {/* Section Heading */}
        <h6 className="mb-3 ps-3">
          <span className="text-black border-start border-4 ps-3 me-2">
            Recommended
          </span>
          <em className="text-primary">For You</em>
        </h6>

        {/* Responsive Grid */}
        <div className="row g-2 px-4">
          {articles.map((article, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-3">
              <Link
                href={`/${article.category}/${article.slug}`}
                className="text-decoration-none"
              >
                <div className="card border-0 rounded-0 position-relative">
                  <div
                    style={{
                      width: "100%",
                      height: "200px",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={article.img}
                      alt={article.title}
                      fill
                      style={{ objectFit: "cover", borderRadius: "0" }}
                    />
                  </div>

                  {article.title === "Sponsored" && (
                    <span
                      className="badge bg-black position-absolute"
                      style={{
                        bottom: "8px",
                        left: "8px",
                        fontSize: "0.8rem",
                        fontWeight: 500,
                      }}
                    >
                      Sponsored
                    </span>
                  )}
                  <div className="card-body p-2">
                    <p
                      className="card-text mb-1"
                      style={{
                        fontWeight: 700,
                        fontSize: "1rem",
                        fontFamily: "Times New Roman, Times, serif",
                        cursor: "pointer",
                        color: "black",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#0d6efd")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "black")
                      }
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

export default RecommendedSection;
