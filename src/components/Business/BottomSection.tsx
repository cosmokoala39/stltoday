"use client";

import React from "react";

const BottomSection: React.FC = () => {
  return (
    <div className="bg-white w-100 py-5">
      <div className="d-flex justify-content-center">
        <div
          className="border border-primary text-primary text-center bg-white py-2 px-4"
          style={{
            borderRadius: "2px",
            fontSize: "1rem",
          }}
        >
          More St. Louis business news
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
