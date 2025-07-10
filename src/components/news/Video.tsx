"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Article {
  img: string;
  title: string;
}

const articles: Article[] = [
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/c/d1/cd18e4e4-533c-594c-a4e5-35d08e1a5119/6866dfa93c1f0.image.jpg?resize=400%2C225",
    title:
      "Pius Suter 'can change our center-ice complexion,' Blues GM Doug Armstrong says",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/1/a4/1a4b3c57-5162-54b4-90b4-46b6d1269ea2/6866c531b989f.image.jpg?resize=400%2C225",
    title: "Israel strikes a Gaza school sheltering displaced people",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/0/99/0994a112-9333-59fb-b1c5-7b832809fc96/6866b0f247ccf.preview.png?resize=400%2C225",
    title:
      "Ten Hochman: Clayton Kershaw’s 3,000th K rekindles a Bob Gibson feat for Cardinals",
  },
];

const Video = () => {
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
          Latest{" "}
          <span className="text-primary" style={{ fontFamily: "Times New Roman" }}>
            Video
          </span>
        </h5>

        {/* 🖥️ Desktop View */}
        <div className="row gx-4 gy-4 d-none d-md-flex">
          {articles.map((article, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-3">
              <div
                className="card border-0 h-100"
                style={{ fontFamily: "Times New Roman", fontSize: "0.9rem" }}
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

        {/* 📱 Mobile View (Full Width Scroll) */}
        <div className="d-block d-md-none overflow-auto">
          <div className="d-flex flex-nowrap" style={{ gap: "1rem", paddingBottom: "0.5rem" }}>
            {articles.map((article, index) => (
              <div
                key={index}
                style={{
                  minWidth: "100vw", // full screen width
                  maxWidth: "100vw",
                  fontFamily: "Times New Roman",
                }}
              >
                <div className="card border-0 h-100">
                  <img
                    src={article.img}
                    className="card-img-top"
                    alt={article.title}
                    style={{
                      height: "180px",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <div className="card-body px-3 pt-2">
                    <p
                      className="card-text mb-0 text-dark"
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        lineHeight: "1.4rem",
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
    </div>
  );
};

export default Video;
