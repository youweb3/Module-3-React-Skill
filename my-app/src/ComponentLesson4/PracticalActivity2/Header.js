import React from "react";
const logoUrl =
  "https://images.crowdspring.com/blog/wp-content/uploads/2022/09/07052811/62bc6f6a390333d37a7dade0_crcylyhu0siddlfjdxeamvr0efuchnzholbpc6h3hml4c1uqha8fvsiezh5wbthchjzg8iioall-05vxozodt5clzcprhvjlz46a4uvdolfn-cyf8vyclyd3nlrtq1t3fbxo8lenoewo89pdfq.png";
export const Header = () => {
  return (
    <div style={{ background: "yellow", padding: "10px" }}>
      <header style={{ display: "flex"}}>
        <img src={logoUrl} alt="Logo" style={{ height: "50px" }} />
        <h4>module 4/ Lesson 2 Practice</h4>
      </header>
    </div>
  );
};
