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
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/0/a5/0a50d0d3-cd96-416e-b96f-04690386f94d/6866ed8ab2e8c.preview.jpg?crop=875%2C492%2C0%2C112",
    title:" Maryland Heights drug maker Sentio to expand, add jobs",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/4/12/4121c66d-8ee7-4dbd-b5c0-0afa71b636cf/6865b4956f628.preview.jpg?crop=1763%2C992%2C0%2C91&resize=990%2C557&order=crop%2Cresize",
    title: "Missouri AG to investigate statewide electric project, calls pitch ‘speculative’",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/1/44/1444291e-8329-5a0a-b2d6-2a1ca2861f2f/6088ae3057229.image.jpg?crop=1769%2C995%2C0%2C87&resize=990%2C557&order=crop%2Cresize",
    title: "Centene stock tumbles after Clayton company scraps 2025 forecast",
  },
  {
     img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/f/33/f339f039-3510-57c2-8516-598a9d4d66fa/681ba7e529ec3.image.jpg?crop=1763%2C992%2C0%2C91&resize=990%2C557&order=crop%2Cresize",
    title: "McBride Homes, Chesterfield contractor reach settlement over deed claims",
   
  },
];

const Business = () => {
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
          Business 
        </h5>

        {/* Card Grid  */}
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

export default Business;
