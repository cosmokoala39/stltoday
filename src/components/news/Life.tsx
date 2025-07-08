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
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/7/ee/7ee4c3a0-9bf1-4bb3-909f-81144932bfaf/6865cf57aa223.preview.jpg?crop=1674%2C942%2C0%2C147&resize=540%2C304&order=crop%2Cresize",
    title:
      "Top 12 things to do in St. Louis this week: 4th of July, ‘Frozen,’ Syleena Johnson",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/c/fd/cfd78931-9b35-4367-9c8c-4092aa18a3bf/6865d0ab7b407.preview.jpg?crop=1096%2C617%2C255%2C59&resize=540%2C304&order=crop%2Cresize",
    title:
      "Black dandyism: Meet 3 St. Louisans leading the culture and fashion movement",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/c/87/c873000c-6547-4dbd-bb9f-709a38fb3f0f/68652d49ebd59.preview.jpg?crop=1042%2C586%2C336%2C9&resize=540%2C304&order=crop%2Cresize",
    title: "Meet our pets of the week: A poodle mix, a pit mix and an alpaca",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/9/e9/9e92653a-a3d6-5257-bcf8-0a1a656547ba/68658c7054aa8.image.jpg?crop=1763%2C992%2C0%2C91&resize=540%2C304&order=crop%2Cresize",
    title:
      "Photos: Mermaids on the Mississippi make a Splash at the St. Louis Aquarium",
   
  },
];

const Life = () => {
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
          Life & Entertaiment
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

export default Life;
