'use client';

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Article {
  title: string;
  author: string;
  img: string;
}

const NewsGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isFeaturedHovered, setIsFeaturedHovered] = useState(false);

  const featuredArticle: Article = {
    title: "Abortions can resume in Missouri after new ruling, Planned Parenthood says",
    author: "Kacen Bayless | Kansas City Star (TNS)",
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/5/bf/5bf46d21-1599-4fa8-84c7-b954344fa479/6867230c38fab.preview.jpg?crop=1763%2C992%2C0%2C91&resize=990%2C557&order=crop%2Cresize",
  };

  const sideArticles: Article[] = [
    {
      title: "Her advocacy for disabled students got her demoted, former Hazelwood teacher says in lawsuit",
      author: "Monica Obradovic | Post-Dispatch",
      img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/4/11/41139945-092c-42b5-bd4d-bb64e8b5e052/6866ce3813e22.preview.jpg?resize=540%2C304",
    },
    {
      title: "How the Blues landed center Pius Suter and how he fits into a (finished?) Blues roster",
      author: "Matthew DeFranks | Post-Dispatch",
      img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/0/95/09570c8d-7602-488c-b282-b19c8d1e2114/6866d708e643f.preview.jpg?crop=1826%2C1027%2C0%2C53&resize=540%2C304&order=crop%2Cresizeg",
    },
    {
      title: "Federal budget megabill would shift billions in cost to Missouri taxpayers",
      author: "Rudi Keller | Missouri Independent",
      img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/d/21/d2105659-34df-4049-afa1-7910fcdd4798/6308411417129.image.jpg?crop=1774%2C998%2C0%2C85&resize=540%2C304&order=crop%2Cresize",
    },
    {
      title: "Removal case against Sheriff Alfred Montgomery gets a judge, hearing date",
      author: "Katie Kull | Post-Dispatch",
      img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/2/9b/29b34d77-66f1-5c0a-abcb-953b333f5a43/664e63e835b2f.image.jpg?crop=1754%2C987%2C0%2C97&resize=540%2C304&order=crop%2Cresize",
    },
    {
      title: "Missouri AG to investigate statewide electric project, calls pitch ‘speculative’",
      author: "Bryce Gray | Post-Dispatch",
      img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/4/12/4121c66d-8ee7-4dbd-b5c0-0afa71b636cf/6865b4956f628.preview.jpg?crop=1763%2C992%2C0%2C91&resize=400%2C225&order=crop%2Cresize",
    },
    {
      title: "Black dandyism: Meet 3 St. Louisans leading the culture and fashion movement",
      author: "Pat Eby | Special to the Post-Dispatch",
      img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/c/fd/cfd78931-9b35-4367-9c8c-4092aa18a3bf/6865d0ab7b407.preview.jpg?crop=1096%2C617%2C255%2C59&resize=400%2C225&order=crop%2Cresize",
    },
  ];

  return (
   <div
  className="container-fluid text-light py-5 px-3 px-lg-4"
  style={{ backgroundColor: "#010922" }}
>

      <div className="row g-4">
        {/* Featured Article */}
        <div
          className="col-lg-6"
          style={{ cursor: "pointer" }}
          onMouseEnter={() => setIsFeaturedHovered(true)}
          onMouseLeave={() => setIsFeaturedHovered(false)}
        >
          <img
            src={featuredArticle.img}
            alt="Featured"
            className="img-fluid w-100 "
            style={{
              height: "auto",
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
          />
          <h2
            className="mt-3 fw-bold"
            style={{
              fontSize: "1.95rem",
              fontFamily: "Times New Roman, Times",
              color: isFeaturedHovered ? "#b0b0b0" : "#ffffff",
            }}
          >
            {featuredArticle.title}
          </h2>
          <p
            style={{
              fontFamily: "Times New Roman, Times",
              fontSize: "1rem",
              color: isFeaturedHovered ? "#b0b0b0" : "#d3d3d3",
            }}
          >
            {featuredArticle.author}
          </p>
        </div>

        {/* Side Articles */}
        <div className="col-lg-6">
          <div className="row g-3">
            {sideArticles.map((article, index) => (
              <div
                className="col-6 col-md-4"
                key={index}
                style={{ cursor: "pointer" }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="h-100 d-flex flex-column">
                  <img
                    src={article.img}
                    alt={`news-${index}`}
                    className="img-fluid mb-2 "
                    style={{
                      width: "100%",
                      height: "auto",
                      aspectRatio: "16/9",
                      objectFit: "cover",
                    }}
                  />
                  <h5
                    className="fw-semibold"
                    style={{
                      fontSize: "1rem",
                      fontFamily: "Times New Roman, Times, serif",
                      flexGrow: 1,
                      color: hoveredIndex === index ? "#b0b0b0" : "#ffffff",
                    }}
                  >
                    {article.title}
                  </h5>
                  <p
                    style={{
                      fontFamily: "Times New Roman, Times, serif",
                      fontSize: "0.85rem",
                      color: hoveredIndex === index ? "#b0b0b0" : "#d3d3d3",
                      marginBottom: 0,
                    }}
                  >
                    {article.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsGrid;
