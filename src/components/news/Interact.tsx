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
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/4/16/4164180c-609a-4639-b3ed-37cae85e2f3b/68629e067df46.preview.png",
    title: "Show us your favorite summer meal!",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/a/e0/ae0c5162-d2bf-41b8-89dc-fc43fc958c78/6810e316ee70b.preview.png",
    title: "Enter to win the chance to throw out a ceremonial first pitch!’",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/1/05/105be078-826b-4f79-a09e-fc00805b0cde/683738a40b4b8.preview.png",
    title: "Explore the list of shelters, donation needs and volunteer opportunities.",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/6/33/633daef6-b00e-5de1-8273-4acb66b8633f/67c7ec49e96b1.image.png?crop=600%2C338%2C0%2C13",
    title: "Explore local history with our digital newspaper archives!",
  },
];

const Intract = () => {
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
          Interact With Us
        </h5>

        {/* Mobile Horizontal Scroll */}
        <div className="d-block d-md-none overflow-auto">
          <div className="d-flex flex-nowrap gap-3">
            {articles.map((article, index) => (
              <div
                key={index}
                className="card border-0"
                style={{
                  minWidth: "280px",
                  fontFamily: "Times New Roman, Times, serif",
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
                    }}
                  >
                    {article.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="row gx-4 gy-4 d-none d-md-flex">
          {articles.map((article, index) => (
            <div key={index} className="col-md-3">
              <div
                className="card border-0 h-100"
                style={{
                  fontFamily: "Times New Roman, Times, serif",
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

export default Intract;
