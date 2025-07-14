// 'use client'
import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// ✅ Import all category data
import businessData from "@/data/categories/business.json";
import SportsData from "@/data/categories/sports.json";
import HealthaData from "@/data/categories/health.json";
import Technology from "@/data/categories/technology.json";
import PoliticsData from "@/data/categories/politics.json";  
import Science from "@/data/categories/science.json";


import Link from 'next/link';

// Types
type Article = {
  category: string;
  title: string;
  img: string;
  slug: string;
  author: string;
  description:string;
  shortdescription:string;
};

interface PageProps {
  params: Promise< {
    category: string;
    slug: string;
  }>;
}

// Helper to extract all article types from varied keys
function extractArticles(data: Record<string, unknown>): Article[] {
  const possibleKeys = ['articles', 'businessNews', 'newsItems', 'items', 'middleSectionNews', 'shopping'];
  const articles: Article[] = [];

  possibleKeys.forEach((key) => {
    const value = data[key];
    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (typeof item === 'object' && item !== null) {
          articles.push(item as Article);
        }
      });
    }
  }); 

  // Add featured article if present
  const featured = data['featured'];
  if (
    typeof featured === 'object' &&
    featured !== null &&
    'slug' in featured
  ) {
    articles.push(featured as Article);
  }

  return articles;
}


// Helper to fetch data based on category
function getDataByCategory(category: string): Record<string, unknown> | null {
  switch (category) {
    case 'business': return businessData;
    case 'sports': return SportsData;
    case 'podcasts': return HealthaData;
    case 'puzzle': return Technology;
    case 'edition': return PoliticsData;
    case 'lifestyles': return Science;
    default: return null;
  }
}


// Main detail page
const ShoppingDetailPage = async ({ params }: PageProps) => {
  const data = getDataByCategory((await params).category);
  if (!data) return notFound();
  

  const articles = extractArticles(data);
 const { category, slug } = await params;
const article = articles.find((item) => item.slug === slug);
  console.log("article:",article)

  if (!article) return notFound();

  return (
    <div className="w-100">
      {/* Hero Section */}
      <div className="bg-black text-white py-5" style={{ minHeight: '490px' }}>
        <div className="container gg" >
          <h1 className="hero-title mb-3">{article.title}</h1>
          <p className="mb-1"><small>PROVIDED CONTENT  SHOPPING</small></p>
          <p className="mt-4 d-flex align-items-center flex-wrap text-secondary small">
            <span className="me-3 fw-semibold text-white">Content by {article.author}</span>
            <span className="me-3">Jun 27, 2025</span>
            <span className="me-3 d-flex align-items-center">
              <i className="bi bi-chat-left-text me-1"></i> 0
            </span>
            <span className="d-flex align-items-center">
              <i className="bi bi-journal-text me-1"></i> 3 min to read
            </span>
          </p>
        </div>
      </div>

      {/* Main Article Section */}
      <div className="bg-white" style={{ paddingTop: '40px' }}>
        <div className="container p-4 bg-white dd" >

          {/* Share Buttons */}
          <div className="d-flex gap-2 mb-4">
            {['facebook', 'twitter-x', 'bug-fill', 'envelope-fill', 'printer-fill', 'share-fill', 'bookmark-fill'].map(icon => (
              <button key={icon} className="btn btn-sm btn-outline-dark">
                <i className={`bi bi-${icon}`}></i>
              </button>
            ))}
          </div>

          {/* Audio Player */}
          <div className="mb-4">
            <div className="fw-medium small text-black ">🎧 Playing article</div>
            <div className="small text-black mb-2">Powered by Trinity Audio</div>
            <div className="d-flex align-items-center gap-2 px-3 py-2 rounded bg-white">
              <button className="btn btn-outline-dark btn-sm rounded-circle px-2 py-1">
                <i className="bi bi-play-fill"></i>
              </button>
              <span className="small">00:00</span>
              <div className="flex-grow-1">
                <div className="progress" style={{ height: '6px' }}>
                  <div className="progress-bar bg-dark" style={{ width: '0%' }}></div>
                </div>
              </div>
              <span className="small">05:22</span>
              <div className="d-flex align-items-center gap-2 ms-2 text-muted small">
                <span className="border px-1">A🌐</span>
                <i className="bi bi-arrow-counterclockwise"></i>
                <i className="bi bi-arrow-clockwise"></i>
                <span className="border rounded px-1">1.0x</span>
              </div>
            </div>
          </div>

          {/* Article Image */}
          <Image
            src={article.img}
            alt="Happy couple reading document"
            width={1000}
            height={600}
            className="img-fluid mb-2"
          />

          <p className="small fst-italic">
            <strong className="text-black">
              {article.shortdescription}
            </strong>
          </p>

          {/* Article Body Placeholder */}
          <div className="article-text text-black">
           
            <p>{article.description}</p>
            
      
          </div>

          {/* Comment & Newsletter */}
          <div className="text-center mt-5 pt-4 border-top">
            <div className="mb-4">
              <button className="btn btn-primary">💬 0 Comments</button>
            </div>
            <h5 className="fw-bold text-black">Be the first to know</h5>
            <p className="text-muted mb-3">Get local news delivered to your inbox!</p>
            

            <form className="d-flex justify-content-center align-items-center gap-2 flex-wrap mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                style={{ maxWidth: '800px' }}
              />
              <button type="submit" className="btn btn-danger">Sign up!</button>
            </form>
            <p className="text-muted small mb-0">
              * I agree to the <Link href="#">user agreement</Link> and <Link href="#">privacy policy</Link>.
            </p>
          </div>
        </div>
      </div>

     
      </div>
    
  );
};

export default ShoppingDetailPage;
