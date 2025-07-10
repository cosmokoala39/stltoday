"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Article {
  img: string;
  title: string;
}

const articles: Article[] = [
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/f/97/f97943d3-7470-4027-a21d-c69f2f76a4d6/66872a745a6f8.image.jpg?crop=1235%2C695%2C0%2C491&resize=540%2C304&order=crop%2Cresize",
    title:
      "Editorial: On this July 4th, the very concept of patriotism divides us. It shouldn’t.",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/d/a2/da20e6a3-cee7-48a2-8e28-6fe91795ea6b/686592cea7e4b.preview.jpg?crop=1665%2C937%2C0%2C86&resize=540%2C304&order=crop%2Cresize",
    title:
      "Letter: Eric Schmitt's golf praise for Donald Trump doesn't mitigate this awful bill",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/c/b8/cb8441a8-dcab-456a-b296-bd6f783209b5/685adc6a246ef.image.jpg?crop=1762%2C991%2C0%2C92&resize=540%2C304&order=crop%2Cresize",
    title: "Lynn Schmidt: Immigrants can embody American values that our policies don't",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/8/42/842fe741-d1cd-4513-81fa-0f14307be144/686592982daae.preview.jpg?crop=1763%2C992%2C0%2C91&resize=540%2C304&order=crop%2Cresize",
    title:
      "Letter: Missouri politicians continue trying to roll back women's rights",
  },
];

const Opinion = () => {
  return (
    <div className="container-fluid bg-white py-4 px-3 px-md-5">
      <div style={{ backgroundColor: "#C1B7B7" }} className="p-4">

        {/* Heading */}
        <h5
          className="mb-1 fw-bold ms-2 text-black ps-2"
          style={{
            borderLeft: "6px solid #0d6efd",
            fontFamily: "Times New Roman, Times, serif",
          }}
        >
          Winning STL
        </h5>
        <p className="text-black mb-4">
          Conversations with St. Louis leaders. Presented by Purina
        </p>

        {/* 🖥️ Desktop: Grid View */}
        <div className="row gx-4 gy-4 d-none d-md-flex">
          {articles.map((article, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-3">
              <div
                className="card border-0 h-100"
                style={{
                  fontFamily: "Times New Roman, Times, serif",
                  fontSize: "0.9rem",
                  backgroundColor: "#C1B7B7",
                }}
              >
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
                <div className="card-body px-2 pt-3">
                  <p
                    className="card-text mb-0 text-dark"
                    style={{
                      fontSize: "1.2rem",
                      lineHeight: "1.3rem",
                      fontWeight: 1000,
                      backgroundColor: "#C1B7B7",
                    }}
                  >
                    {article.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 📱 Mobile: Image + Text Side-by-Side */}
        <div className="d-block d-md-none">
          {articles.map((article, index) => (
            <div
              key={index}
              className="d-flex mb-3"
              style={{
                backgroundColor: "#C1B7B7",
                borderBottom: "1px solid #aaa",
                paddingBottom: "10px",
              }}
            >
              <div style={{ flex: "0 0 40%", paddingRight: "10px" }}>
                <img
                  src={article.img}
                  alt={article.title}
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "6px",
                  }}
                />
              </div>
              <div style={{ flex: "1", fontFamily: "Times New Roman" }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: "1rem",
                    fontWeight: 700,
                    lineHeight: "1.3rem",
                    color: "#000",
                  }}
                >
                  {article.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Opinion;
