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
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/c/b9/cb9cc18a-b0bd-4bc4-a3eb-4df5b8f51f1a/686714494f379.preview.jpg?crop=1763%2C992%2C0%2C91&resize=300%2C169&order=crop%2Cresize",
    title: "Police bust Jefferson County gas stations for alleged illegal gambling machines",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/5/bf/5bf46d21-1599-4fa8-84c7-b954344fa479/6867230c38fab.preview.jpg?crop=1763%2C992%2C0%2C91&resize=300%2C169&order=crop%2Cresize",
    title: "Abortions can resume in Missouri after new ruling, Planned Parenthood says",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/3/23/32332411-a6c3-4c29-8f1e-4e7d7b1c3678/68670d1c52632.preview.jpg?crop=1611%2C906%2C12%2C28&resize=300%2C169&order=crop%2Cresize",
    title: "1st Wrigley showdown: Cardinals push toward trade deadline vs. Cubs' chance to pull away",
  },
  {
    img: "https://tpc.googlesyndication.com/simgad/2397079406876586769?",
    title: "A happier workforce leads to a successful business",
    description: "Sponsored",
  },
];

const RecommendedSection = () => {
  return (
    <div className="container-fluid bg-white p-0 m-0">
      <div className="bg-white p-4 m-0">
        {/* Banner */}
        <div
          className="d-flex align-items-center text-white p-3 mb-4 mx-auto"
          style={{
            backgroundColor: "#120835",
            maxWidth: "700px",
            height: "40px",
            marginTop: "100px",
            cursor: "pointer",
            borderRadius: "10px",
          }}
        >
          <span
            className="badge me-3"
            style={{
              height: "30px",
              padding: "6px 12px",
              fontSize: "1rem",
              borderRadius: "0",
              backgroundColor: "black",
              color: "#89abe1",
              fontWeight: 400,
              fontFamily: "Times New Roman, Times, serif",
            }}
          >
            Shopping
          </span>

          <span
            className="fw-semibold text-white"
            style={{
              fontSize: "1rem",
              fontFamily: "Times New Roman, Times, serif",
            }}
          >
            Can you outrun rising car insurance prices?
          </span>
        </div>

        {/* Section Heading */}
        <h6 className="mb-3" style={{ marginLeft: "10px" }}>
          <span className="text-black border-start border-4 ps-3 me-2">
            Recommended
          </span>
          <em className="text-primary">For You</em>
        </h6>

        {/* Card Grid */}
        <div className="d-flex flex-wrap justify-content-center gap-3 px-3">
          {articles.map((article, index) => (
            <div
              key={index}
              className="card border-0 flex-grow-1"
              style={{
                fontSize: "1rem",
                minWidth: "220px",
                maxWidth: "260px",
                fontFamily: "Times New Roman, Times, serif",
              }}
            >
              <div style={{ position: "relative", cursor: "pointer" }}>
                <img
                  src={article.img}
                  className="card-img-top"
                  alt={article.title}
                  style={{
                    height: "180px",
                    objectFit: "cover",
                  }}
                />
                {article.description === "Sponsored" && (
                  <span
                    className="badge bg-black position-absolute"
                    style={{
                      bottom: "8px",
                      left: "8px",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                    }}
                  >
                    Sponsored
                  </span>
                )}
              </div>

              <div className="card-body p-2">
                <p
                  className="card-text mb-1"
                  style={{
                    fontWeight: 700,
                    fontSize: "1rem",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#0d6efd")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "black")
                  }
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

export default RecommendedSection;
