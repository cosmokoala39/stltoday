"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

// Import all category data
import businessData from "@/data/categories/business.json";
import SportsData from "@/data/categories/sports.json";
import HealthaData from "@/data/categories/health.json";
import Technology from "@/data/categories/technology.json";
import PoliticsData from "@/data/categories/politics.json";
import Science from "@/data/categories/science.json";

interface CategoryData {
  category: string;
  featured?: any;
  businessNews?: any[];
  articles?: any[];
  newsItems?: any[];
  items?: any[];
  middleSectionNews?: any[];
  shopping?: any[];
}

// Helper function to get data by category
function getDataByCategory(category: string): CategoryData | null {
  switch (category) {
    case 'business': return businessData;
    case 'sports': return SportsData;
    case 'health': return HealthaData;
    case 'technology': return Technology;
    case 'politics': return PoliticsData;
    case 'science': return Science;
    default: return null;
  }
}

// Helper function to extract articles from category data
function extractArticles(data: CategoryData): any[] {
  const possibleKeys = ['articles', 'businessNews', 'newsItems', 'items', 'middleSectionNews', 'shopping'];
  let articles: any[] = [];

  possibleKeys.forEach((key) => {
    const value = (data as any)[key];
    if (Array.isArray(value)) {
      articles = articles.concat(value);
    }
  });

  return articles.slice(0, 4); // Limit to 4 articles
}

// Category display names
const categoryDisplayNames: { [key: string]: string } = {
  'business': 'Business',
  'sports': 'Sports',
  'health': 'Health',
  'technology': 'Technology',
  'politics': 'Politics',
  'science': 'Science'
};

interface RecommendedSectionProps {
  category?: string;
}

const RecommendedSection: React.FC<RecommendedSectionProps> = ({ category = 'health' }) => {
 
  const categoryData = getDataByCategory(category);
  
  if (!categoryData) {
    return <div>Category not found</div>;
  }

  const articles = extractArticles(categoryData).map((item) => ({
    ...item,
    category: category,
  }));

  const displayName = categoryDisplayNames[category] || category;

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
            {displayName}
          </span>

          <span
            className="fw-semibold text-white"
            style={{
              fontSize: "1rem",
              fontFamily: "Times New Roman, Times, serif",
            }}
          >
            {articles[0]?.title || "Latest updates from " + displayName}
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