import React from "react";
import Sports from "./news/Sports";
import BusinessList from "./news/Localbusiness";
import Shopping from "./news/ShopHome";
import Science from "./news/Science";
import Technologia from "./news/Technlogy";

function News() {
  return (
    <div>
      <Sports />
      <Science />
      <Technologia />
      <Shopping />
      <BusinessList />
    </div>
  );
}

export default News;
