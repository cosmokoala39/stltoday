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
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/d/c2/dc25dc8f-5e36-591b-b4e3-c38b45f0de85/68672d5c3c0b2.preview.jpg?crop=1740%2C979%2C3%2C194&resize=990%2C557&order=crop%2Cresize",
    title:
      "Republican donors, Florida’s hurricane know-how helped build ‘Alligator Alcatraz’ quickly",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/1/36/13603b03-1ffc-5326-8831-562c53201611/68684cc1d4c71.preview.jpg?resize=990%2C557",
    title:
      "Trump expected to sign his huge bill of tax and spending cuts at July 4 picnic",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/8/0b/80b8ff81-dfbb-589b-9b21-eb138236e121/6865be95c3e38.preview.jpg?crop=1680%2C945%2C45%2C124&resize=990%2C557&order=crop%2Cresize",
    title:
      "He pioneered the cellphone. It changed how people around the world talk to one another",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/b/6f/b6fd030c-226f-46f6-8048-ae7cf05c12ec/6867b92649f86.preview.jpg?crop=1918%2C1079%2C0%2C0&resize=990%2C557&order=crop%2Cresize",
    title:
      "Dozens of Palestinians killed by airstrikes or shootings while waiting for aid",
  },
];

const Nation = () => {
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
          Nation & World
        </h5>

        {/* Mobile: Horizontal Scroll */}
        <div className="d-block d-md-none overflow-auto">
          <div className="d-flex flex-nowrap gap-3">
            {articles.map((article, index) => (
              <div
                key={index}
                className="card border-0"
                style={{
                  minWidth: "250px",
                  maxWidth: "250px",
                  fontFamily: "Times New Roman, Times, serif",
                }}
              >
                <div style={{ position: "relative", height: "180px" }}>
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
                    className="card-text text-dark mb-0"
                    style={{
                      fontSize: "1.1rem",
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

        {/* Desktop: 4-column grid */}
        <div className="d-none d-md-block">
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
    </div>
  );
};

export default Nation;
