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
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/d/a8/da896b5a-623b-45a5-add5-88bad372b05a/654bbfa03ce81.preview.png?resize=540%2C304",
    title:
      "Blues get younger on defense, fill big need up front: Net Front Presence",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/a/be/abe3fcb8-1be7-48b1-8ed0-a5a270f79d2d/66314effb4ef7.preview.png?resize=540%2C304",
    title: "Winless streak hits four, so let's chat USMNT: STL Soccer Talk",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/6/75/67507fab-422a-5429-9e20-a660a5daba03/68655af8760cc.preview.png?resize=540%2C283",
    title: "Is gentleness outdated — or more necessary than ever? | The Ethical Life podcast",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/3/b0/3b014c84-5f42-4240-9282-cc993bb67b02/6568d0147c575.preview.png?resize=540%2C304",
    title:
      "Can Cubs-Cardinals rivalry still spark fireworks in time for Fourth of July series?",
  },
];

const Events = () => {
  return (
    <>
      {/* White Section */}
      <div className="container-fluid bg-white py-4 px-5">
        <h5
          className="mb-4 fw-bold ms-2 text-black ps-2"
          style={{
            borderLeft: "6px solid #0d6efd",
            fontFamily: "Times New Roman, Times, serif",
          }}
        >
          Events
        </h5>
      </div>

      {/* Black Full-Width Section */}
      <div style={{ backgroundColor: "black", width: "100%" }} className="py-4 px-5">
        <h5
          className="text-white mb-4 fw-bold ps-2"
          style={{
            borderLeft: "6px solid #0d6efd",
            fontFamily: "Times New Roman, Times, serif",
          }}
        >
          Listen Now Podcasts
        </h5>

        <div className="row gx-4 gy-4">
          {articles.map((article, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-3">
              <div
                className="card border-0 h-100"
                style={{
                  fontFamily: "Times New Roman, Times, serif",
                  fontSize: "0.9rem",
                  backgroundColor: "black",
                }}
              >
                <div style={{ position: "relative", height: "200px" }}>
                  <img
                    src={article.img}
                    className="card-img-top"
                    alt={article.title}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      
                    }}
                  />
                </div>

                <div className="card-body px-2 pt-3">
                  <p
                    className="card-text mb-0 text-white"
                    style={{
                      fontSize: "1.2rem",
                      lineHeight: "1.3rem",
                      fontWeight: 1000,
                      backgroundColor: "black",
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
    </>
  );
};

export default Events;
