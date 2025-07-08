"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Article {
  img: string;
  title: string;
  description?: string;
}

const articles: Article[] = [
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/0/6c/06c15086-bbfd-58f2-99c7-8918d37a339c/68668199bbb43.preview.jpg?crop=1763%2C992%2C0%2C91&resize=540%2C304&order=crop%2Cresize",
    title:
      "Why Some Americans Are Turning to Financing for Basic Medical Needs",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/b/01/b0184c28-1323-5595-a9bc-670df9f8c296/6863fe9da56ad.preview.png?crop=1440%2C810%2C0%2C315&resize=540%2C304&order=crop%2Cresize",
    title:
      "Amazon’s Top-Selling Baby Nasal Aspirator: A Prime Day Deal Parents Shouldn’t Miss",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/1/03/103669f3-013c-50fe-9ba3-35eca2b722ad/6863e8b0b2d42.preview.png?crop=1536%2C864%2C0%2C80&resize=540%2C304&order=crop%2Cresize",
    title: "3 Best Sites to Buy YouTube Views Safely in 2025",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/0/8d/08dbf6d3-dfbf-52bb-8f02-0784795db1df/686295213f21e.preview.jpg?resize=540%2C304",
    title:
      "Understanding Market Factors That Drive the Value of Cryptocurrency",
   
  },
];

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

        {/* Card Grid - removed justify-content-center */}
        <div className="row gx-4 gy-4">
          {articles.map((article, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-3">
              <div
                className="card border-0 h-100"
                style={{
                  fontFamily: "Times New Roman, Times, serif",
                  fontSize: "0.9rem",
                }}
              >
                {/* Image Container */}
                <div style={{ position: "relative", height: "220px" }}>
                  <img
                    src={article.img}
                    className="card-img-top"
                    alt={article.title}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>

                {/* Text Content */}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
