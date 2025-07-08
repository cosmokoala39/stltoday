import React from "react";
import Sports from "./news/Sports";
import Video from "./news/Video";
import Life from "./news/Life";
import Opinion from "./news/Opinion";
import Partner from "./news/Partner";
import Stl from "./news/Stl";
import Business from "./news/Business";

import Intract from "./news/Interact";
import Nation from "./news/Nation";
import Events from "./news/Events";
import LocalBusiness from "./news/Localbusiness";
import BusinessList from "./news/Localbusiness";
import Shopping from "./news/ShopHome";

function News() {
  return (
    <div>
      <Sports />
      <Video />
      <Life />
      <Partner />
      <Opinion />
      <Stl />
      <Business />
      <Nation />
      <Intract />
      <Events />
      <Shopping />
      <BusinessList />
    </div>
  );
}

export default News;
