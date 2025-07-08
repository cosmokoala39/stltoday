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
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/5/2e/52e17802-175f-40c2-8f65-bdc9859add56/686850bdd8ff0.preview.jpg?crop=1709%2C961%2C0%2C125&resize=400%2C225&order=crop%2Cresize",
    title:
      "If standings say buy at trade deadline, front office expects OK to spend: Cardinals Extra",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/b/ce/bce3fe2a-bbcd-4044-a926-f9eb14468dde/68683d291aa9b.preview.jpg?crop=1763%2C992%2C0%2C91&resize=400%2C225&order=crop%2Cresize",
    title:
      "Going, going, gone? Cubs drub Cardinals with record eight home runs in rout at Wrigley",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/c/dd/cdd760ee-9416-46ed-b523-d579f59e636b/68681d21c67ef.preview.jpg?crop=1818%2C1023%2C0%2C58&resize=400%2C225&order=crop%2Cresize",
    title: "Mizzou adds commitment from 3-star Georgia safety",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/3/bf/3bf3cdeb-4f64-492c-9211-5b540cbcf341/6867203689ef3.preview.jpg?crop=1744%2C981%2C7%2C11&resize=400%2C225&order=crop%2Cresize",
    title:
      "Struggling Miles Mikolas faces tall task as Cardinals battle Cubs: First Pitch",
    description: "Sponsored",
  },
];

const Sports = () => {
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
          Sports
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

export default Sports;
