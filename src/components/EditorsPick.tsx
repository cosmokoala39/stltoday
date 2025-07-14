'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

// Import all category data
import businessData from "@/data/categories/business.json";
import SportsData from "@/data/categories/sports.json";
import HealthaData from "@/data/categories/health.json";
import Technology from "@/data/categories/technology.json";
import PoliticsData from "@/data/categories/politics.json";
import Science from "@/data/categories/science.json";

interface Article {
  slug: string;
  img: string;
  title: string;
  shortdescription?: string;
}

interface CategoryData {
  category: string;
  featured?: Article;
  businessNews?: Article[];
  articles?: Article[];
  newsItems?: Article[];
  items?: Article[];
  middleSectionNews?: Article[];
  shopping?: Article[];
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

// Extract all articles regardless of section key
function extractArticles(data: CategoryData): Article[] {
  const possibleKeys = ['articles', 'businessNews', 'newsItems', 'items', 'middleSectionNews', 'shopping'] as const;
  let articles: Article[] = [];

  possibleKeys.forEach((key) => {
    const value = data[key];
    if (Array.isArray(value)) {
      articles = articles.concat(value);
    }
  });

  return articles;
}

const categoryDisplayNames: { [key: string]: string } = {
  'business': 'Business',
  'sports': 'Sports',
  'health': 'Health',
  'technology': 'Technology',
  'politics': 'Politics',
  'science': 'Science'
};

interface EditorsPickProps {
  category?: string;
}

const EditorsPick: React.FC<EditorsPickProps> = ({ category = 'technology' }) => {
  const categoryData = getDataByCategory(category);

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  const editorData = categoryData.featured || extractArticles(categoryData)[0];

  if (!editorData) {
    return <div>No articles available</div>;
  }

  const displayName = categoryDisplayNames[category] || category;

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        minHeight: "90vh",
        width: "100%",
        padding: "60px 0",
        overflow: "hidden",
      }}
    >
      <div className="container-fluid px-3 px-md-5">
        <div
          className="border p-3 p-md-5 mx-auto"
          style={{
            maxWidth: "1400px",
            fontFamily: "Times New Roman, Times, serif",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            height: "100%",
          }}
        >
          <h3 className="mb-4 text-black fw-bold">
            <span className="text-primary border-start border-4 ps-2 me-2">|</span>
            Editor&apos;s Pick - {displayName}
          </h3>

          <div className="row h-100">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <div style={{ position: "relative", width: "100%", height: "350px" }}>
                <Link href={`/${category}/${editorData.slug}`}>
                  <Image
                    src={editorData.img}
                    alt={editorData.title}
                    fill
                    style={{ objectFit: "cover", borderRadius: "10px" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-6 d-flex flex-column justify-content-center ps-md-5">
              <h2 className="mb-3" style={{ fontSize: "1.75rem", fontWeight: 900, color: "#000" }}>
                {editorData.title}
              </h2>

              {editorData.shortdescription && (
                <p className="mb-3" style={{ fontSize: "1rem", color: "#666", lineHeight: "1.6" }}>
                  {editorData.shortdescription}
                </p>
              )}

              <ul className="mb-0 mt-3" style={{ fontSize: "1rem", color: "#000", fontWeight: 600, lineHeight: "1.7rem", paddingLeft: "1.2rem" }}>
                <li>Latest {displayName.toLowerCase()} news and updates</li>
                <li>In-depth analysis and expert opinions</li>
                <li>Breaking news and trending topics</li>
                <li>Comprehensive coverage you can trust</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
