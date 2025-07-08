'use client';

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface NewsItem {
  img: string;
  title: string;
}

const news: NewsItem[] = [
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/8/8c/88cef012-a893-479f-adf3-38b286a769fd/68674e89d0d34.preview.jpg?resize=540%2C304",
    title: "Billy Hunter, the last living St. Louis Browns player, dies at 97",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/3/1a/31a3336e-ad22-41e7-bd35-a26a70814ab0/68672b48a0dce.preview.jpg?crop=620%2C349%2C0%2C31&resize=540%2C304&order=crop%2Cresize",
    title: "Belleville police investigate shooting of boy, 4",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/c/b9/cb9cc18a-b0bd-4bc4-a3eb-4df5b8f51f1a/686714494f379.preview.jpg?crop=1763%2C992%2C0%2C91&resize=540%2C304&order=crop%2Cresize",
    title: "Police bust Jefferson County gas stations for alleged illegal gambling machines",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/b/4f/b4f32996-6200-4915-ada8-1acb78f16825/68670d363c1ea.preview.jpg?resize=540%2C304",
    title: "2 killed when vehicle is hit by driver fleeing police in Wood River",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/4/9b/49b141c0-8eb6-4017-ba0f-62b6ae6e3536/6866ef3e1daa2.preview.jpg?crop=1701%2C957%2C0%2C130&resize=540%2C304&order=crop%2Cresize",
    title: "Retired St. Louis Election Board employee named to board",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/0/a5/0a50d0d3-cd96-416e-b96f-04690386f94d/6866ed8ab2e8c.preview.jpg?crop=875%2C492%2C0%2C112&resize=540%2C304&order=crop%2Cresize",
    title: "Maryland Heights drug maker Sentio to expand, add jobs",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/2/92/292ada29-479c-4f80-8e9a-0ac4ff988c65/6866eb60388b8.preview.jpg?crop=620%2C349%2C0%2C9&resize=540%2C304&order=crop%2Cresize",
    title: "Moline Acres man charged in north St. Louis murder",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/8/5e/85e5605e-cfcf-41fc-81fe-27bfdae6f1da/6866df677ab56.preview.jpg?crop=620%2C349%2C0%2C9&resize=540%2C304&order=crop%2Cresize",
    title: "Florissant man wanted on murder charges in Alabama",
  },
];

const LatestNews = () => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      className="container-fluid py-5 bg-black"
      style={{
        backgroundColor: hovering ? "#0c141f" : "#060b12",
        transition: "background-color 0.3s ease",
      }}
    >
      <div className="mx-auto px-3" style={{ maxWidth: "1500px" }}>
        <h6 className="text-white mb-4 fw-bold">
          <span
            className="ps-5 me-2"
            style={{
              fontFamily: "Times New Roman, Times, serif",
              fontWeight: 700,
            }}
          >
            The
          </span>
          <em style={{ fontWeight: 600 }}>Latest</em>
        </h6>

        <div className="row g-4 justify-content-center">
          {news.map((item, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <div
                className="card border-0 text-white h-100 shadow"
                style={{
                  backgroundColor: "black",
                  fontFamily: "Times New Roman, Times, serif",
                  transition: "transform 0.2s ease",
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    cursor: "pointer",
                   
                  }}
                />
                <div className="card-body px-3 py-3">
                  <p
                    className="card-text fw-bold mb-0"
                    style={{
                      fontSize: "1.1rem",
                      color: "white",
                      cursor: "pointer",
                      lineHeight: "1.4rem",
                      minHeight: "60px",
                      userSelect: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "lightgray";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "white";
                    }}
                  >
                    {item.title}
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

export default LatestNews;
