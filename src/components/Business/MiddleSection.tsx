"use client";

import React from "react";

interface NewsItem {
  img: string;
  title: string;
  author?: string;
  sponsored?: boolean;
}

const newsItems: NewsItem[] = [
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/f/40/f40e9bfe-5869-57aa-ad11-31ecdbd79474/63cff79ac763b.preview.jpg?crop=1796%2C1010%2C0%2C71&resize=540%2C304&order=crop%2Cresize",
    title: "What’s being built near you? Search the latest St. Louis building permits",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/9/61/96112838-dac1-5a02-be01-30565f988369/5b804470f187a.image.jpg?crop=1779%2C1001%2C0%2C82&resize=540%2C304&order=crop%2Cresize",
    title: "O’Fallon Brewing pumpkin beer will soon be on tap at Urban Chestnut locations",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/8/f2/8f2fade7-ea2f-428c-8c32-56264e31ab44/68633b44db606.preview.jpg?resize=540%2C304",
    title: "MU Health Care and Anthem ‘have never been close’ to agreement, they tell Senate committee",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/6/a5/6a541c41-0abd-4e11-9ffe-ab8b345c129c/6862d23ed993e.preview.jpg?crop=1007%2C566%2C0%2C0&resize=540%2C304&order=crop%2Cresize",
    title: "HOK names new leader for St. Louis office",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/4/dd/4ddaaedd-6283-47aa-b700-67fe1c156eee/6862c0717e10d.preview.png?crop=494%2C278%2C68%2C0",
    title: "St. Louis County construction company expands with real estate firm",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/3/de/3ded0e6f-d0e4-435f-b0df-8492c8dcad45/6862bd5af0c19.preview.jpg?crop=620%2C349%2C0%2C0&resize=540%2C304&order=crop%2Cresize",
    title: "Downtown St. Louis property hits the market as hotel project stalls",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/9/26/926cb580-e1ff-4f2f-a66e-8afc797c5fa0/6862d46d6436a.preview.jpg?crop=1739%2C978%2C0%2C106&resize=540%2C304&order=crop%2Cresize",
    title: "St. Louis-area Boeing workers authorize strike if contract talks fail",
  },
  {
    img: "https://tpc.googlesyndication.com/simgad/2397079406876586769?",
    title: "A happier workforce leads to a successful business",
    sponsored: true,
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/f/40/f40e9bfe-5869-57aa-ad11-31ecdbd79474/63cff79ac763b.preview.jpg?crop=1796%2C1010%2C0%2C71&resize=540%2C304&order=crop%2Cresize",
    title: "What’s being built near you? Search the latest St. Louis building permits",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/9/61/96112838-dac1-5a02-be01-30565f988369/5b804470f187a.image.jpg?crop=1779%2C1001%2C0%2C82&resize=540%2C304&order=crop%2Cresize",
    title: "O’Fallon Brewing pumpkin beer will soon be on tap at Urban Chestnut locations",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/8/f2/8f2fade7-ea2f-428c-8c32-56264e31ab44/68633b44db606.preview.jpg?resize=540%2C304",
    title: "MU Health Care and Anthem ‘have never been close’ to agreement, they tell Senate committee",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/6/a5/6a541c41-0abd-4e11-9ffe-ab8b345c129c/6862d23ed993e.preview.jpg?crop=1007%2C566%2C0%2C0&resize=540%2C304&order=crop%2Cresize",
    title: "HOK names new leader for St. Louis office",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/4/dd/4ddaaedd-6283-47aa-b700-67fe1c156eee/6862c0717e10d.preview.png?crop=494%2C278%2C68%2C0",
    title: "St. Louis County construction company expands with real estate firm",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/3/de/3ded0e6f-d0e4-435f-b0df-8492c8dcad45/6862bd5af0c19.preview.jpg?crop=620%2C349%2C0%2C0&resize=540%2C304&order=crop%2Cresize",
    title: "Downtown St. Louis property hits the market as hotel project stalls",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/9/26/926cb580-e1ff-4f2f-a66e-8afc797c5fa0/6862d46d6436a.preview.jpg?crop=1739%2C978%2C0%2C106&resize=540%2C304&order=crop%2Cresize",
    title: "St. Louis-area Boeing workers authorize strike if contract talks fail",
  },
  {
    img: "https://tpc.googlesyndication.com/simgad/2397079406876586769?",
    title: "A happier workforce leads to a successful business",
    sponsored: true,
  },
];

const MiddleSection: React.FC = () => {
  return (
    <div className="bg-white w-100">
      <section className="container py-5">
        <div className="row g-4" style={{ marginTop: "100px" }}>
          {newsItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="h-100">
                  <div className="ratio ratio-16x9 overflow-hidden mb-2 position-relative">
                    <img
                      src={item.img}
                      alt={`News ${index + 1}`}
                      className="w-100 h-100 object-fit-cover"
                    />
                   
                  </div>
                  <h6
                    className="text-black"
                    style={{
                      fontFamily: "Times New Roman, serif",
                      fontWeight: 800,
                      fontSize: "1rem",
                    }}
                  >
                    {item.title}
                  </h6>
                  {item.author && <p className="text-muted small">{item.author}</p>}
                </div>
              </div>

              {/* Add 200px space after every 8 items (2 rows) */}
              {(index + 1) % 8 === 0 && (
                <div className="w-100" style={{ height: "200px" }}></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MiddleSection;
