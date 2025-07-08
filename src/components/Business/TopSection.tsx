"use client";

import React from "react";

interface NewsItem {
  img: string;
  title: string;
  author: string;
}

const featured: NewsItem = {
  img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/9/4b/94b206e9-5655-461d-be5b-ca9ca8dd9faf/6866ea9c1fdad.preview.jpg?crop=1008%2C567%2C1%2C0&resize=990%2C557&order=crop%2Cresize",
  title:
    "St. Louis County woman claims an AI-generated score kept her from renting a house",
  author: "Steph Kukuljan | Post-Dispatch",
};

const newsItems: NewsItem[] = [
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/9/2a/92a8d0d6-88ee-57cb-a57c-b5ac5064928d/677868a22cb1a.image.jpg?resize=400%2C225",
    title:
      "St. Louis-area patients in limbo as BJC, Cigna extend negotiations through July",
    author: "Jack Suntrup | Post-Dispatch",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/a/ef/aef248a7-c448-487e-b665-e4023c98c661/686440898de02.preview.png?crop=889%2C500%2C5%2C0&resize=400%2C225&order=crop%2Cresize",
    title:
      "People in Business: St. Louis Arc promotes; Gray Design adds; Lawrence Group hires",
    author: "Jack Suntrup | Post-Dispatch",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/0/a5/0a50d0d3-cd96-416e-b96f-04690386f94d/6866ed8ab2e8c.preview.jpg?crop=875%2C492%2C0%2C112&resize=400%2C225&order=crop%2Cresize",
    title: "Maryland Heights drug maker Settle to expand, add jobs",
    author: "Sam Terman | Post-Dispatch",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/4/12/4121c66d-8ee7-4dbd-b5c0-0afa71b636cf/6865b4956f628.preview.jpg?crop=1763%2C992%2C0%2C91&resize=400%2C225&order=crop%2Cresize",
    title:
      "Missouri AG to investigate statewide electric project, calls pitch ‘speculative’",
    author: "Jack Suntrup | Post-Dispatch",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/1/44/1444291e-8329-5a0a-b2d6-2a1ca2861f2f/6088ae3057229.image.jpg?crop=1769%2C995%2C0%2C87&resize=400%2C225&order=crop%2Cresize",
    title: "Centene stock tumbles after Clayton company scrapes 2025 forecast",
    author: "Jack Suntrup | Post-Dispatch",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/f/33/f339f039-3510-57c2-8516-598a9d4d66fa/681ba7e529ec3.image.jpg?crop=1763%2C992%2C0%2C91&resize=400%2C225&order=crop%2Cresize",
    title:
      "McBride Homes, Chesterfield contractor reach settlement over defect claims",
    author: "Steph Kukuljan | Post-Dispatch",
  },
];

const TopSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-5">
      <div className="container-fluid px-3 px-md-4">
        {/* Header */}
        <div className="mb-5 text-center">
          <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
            <span className="badge bg-dark px-3 py-2">Local</span>
            <span className="badge bg-dark px-3 py-2">National</span>
            <span className="badge bg-dark px-3 py-2">Top Workplaces</span>
            <span className="badge bg-dark px-3 py-2">Submit a Tip</span>
          </div>
         <h3
  className="fw-bold display-6"
  style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" }}
>
  ST. LOUIS BUSINESS NEWS
</h3>

        </div>

        <div className="row gx-4 gy-4">
          {/* Featured News */}
          <div className="col-md-5">
            <div
  className="overflow-hidden mb-3"
  style={{
    height: "350px",           // Increased height
    marginLeft: "0px",         // Remove or decrease left margin
  }}
>
  <img
    src={featured.img}
    alt="Featured News"
    className="w-100 h-100 object-fit-cover "
  />
</div>

            <h4
              className="fw-bold"
              style={{
                fontSize: "2.3rem",
                fontFamily: "Times New Roman, serif",
                fontWeight: 900,
              }}
            >
              {featured.title}
            </h4>
            <p
              className="text-muted"
              style={{
                fontSize: "1rem",
                fontFamily: "Times New Roman, serif",
                fontWeight: 500,
              }}
            >
              {featured.author}
            </p>
          </div>

          {/* News Grid */}
          <div className="col-md-7">
            <div className="row gx-4 gy-4">
              {newsItems.map((item, idx) => (
                <div className="col-12 col-md-6 col-lg-4" key={idx}>
                  <div
                    className="overflow-hidden mb-2"
                    style={{ aspectRatio: "16 / 9" }}
                  >
                    <img
                      src={item.img}
                      alt={`News: ${item.title}`}
                      className="w-100 h-100 object-fit-cover rounded"
                    />
                  </div>
                  <h6
                    style={{
                      fontSize: "1.2rem",
                      fontFamily: "Times New Roman, serif",
                      fontWeight: 700,
                      lineHeight: "1",
                    }}
                  >
                    {item.title}
                  </h6>
                  <p
              className="text-muted"
              style={{
                fontSize: "1rem",
                fontFamily: "Times New Roman, serif",
                fontWeight: 500,
              }}
            >
              {item.author}
            </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
