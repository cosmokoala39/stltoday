'use client';

import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Article {
  img: string;
  title: string;
}

export const articles: Article[] = [
  {
    img: 'https://example.com/image1.jpg',
    title: 'Credit Card Debt Relief Options',
  },
  {
    img: 'https://example.com/image2.jpg',
    title: 'Top 5 Debt Relief Programs of 2025',
  },
  {
    img: 'https://example.com/image3.jpg',
    title: 'Best Debt Relief Companies Reviewed',
  },
  {
    img: 'https://example.com/image4.jpg',
    title: 'Is Debt Relief Right for You?',
  },
];

const Shopping = () => {
  return (
    <div className="container-fluid bg-white py-4">
      <div className="bg-white p-4">
        {/* Section Heading */}
        <h5
          className="mb-4 fw-bold ms-2 text-black ps-2"
          style={{
            borderLeft: '6px solid #0d6efd',
            fontFamily: 'Times New Roman, Times, serif',
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
                href={`/article/${index}`}
                className="text-decoration-none"
              >
                <div
                  className="card border-0"
                  style={{
                    minWidth: '250px',
                    maxWidth: '250px',
                    fontFamily: 'Times New Roman, Times, serif',
                  }}
                >
                  <div style={{ height: '180px', position: 'relative' }}>
                    <img
                      src={article.img}
                      alt={article.title}
                      className="card-img-top"
                      style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                        borderRadius: '8px',
                      }}
                    />
                  </div>
                  <div className="card-body px-2 pt-3">
                    <p
                      className="card-text text-dark mb-0"
                      style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.3rem',
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
                  href={`/article/${index}`}
                  className="text-decoration-none"
                >
                  <div
                    className="card border-0 h-100"
                    style={{
                      fontFamily: 'Times New Roman, Times, serif',
                      fontSize: '0.9rem',
                    }}
                  >
                    <div style={{ height: '220px', position: 'relative' }}>
                      <img
                        src={article.img}
                        alt={article.title}
                        className="card-img-top"
                        style={{
                          height: '100%',
                          width: '100%',
                          objectFit: 'cover',
                          borderRadius: '8px',
                        }}
                      />
                    </div>
                    <div className="card-body px-2 pt-3">
                      <p
                        className="card-text text-dark mb-0"
                        style={{
                          fontSize: '1.2rem',
                          lineHeight: '1.3rem',
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
