'use client';

import React from 'react';

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
    <div className="container py-5">
      <h2 className="mb-4">Shopping</h2>
      <div className="row">
        {articles.map((article, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="card h-100">
              <img
                src={article.img}
                alt={article.title}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h6 className="card-title text-dark">{article.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopping;
