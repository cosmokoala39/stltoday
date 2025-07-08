import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Business {
  name: string;
  address: string;
  website?: string;
}

const businesses: Business[] = [
  {
    name: "Allison's Comforts Shoes",
    address: "4225 S State Route 159, Glen Carbon, IL 62034",
  },
  {
    name: "Zollinger Furniture Co, H R",
    address: "4821 FAIRVIEW, ST LOUIS, MO 63116",
  },
  {
    name: "Keller Williams - Jay Cammon",
    address: "10936 MANCHESTER ROAD, Kirkwood, MO 63122",
  },
];

const BusinessList = () => {
  return (
    <div
      className="container-fluid py-4 px-2"
      style={{ backgroundColor: "#d6dfdd" }}
    >
      <div style={{ marginLeft: "30px", marginTop:"30px " , marginBottom:"30px" }}>
        <h5 className="fw-bold text-black mb-4">
          <i className="bi bi-square-fill text-primary me-2"></i>
          Local Businesses
        </h5>

        <div className="d-flex flex-column gap-3">
          {businesses.map((biz, index) => (
            <div
              key={index}
              className="position-relative border-bottom pb-3 d-flex align-items-start"
              style={{ maxWidth: "400px" }} // ⬅️ decreased width
            >
              <div className="flex-grow-1">
                <h6 className="fw-bold text-black mb-1">{biz.name}</h6>
                <p className="mb-1 text-primary">{biz.address}</p>
                {biz.website && (
                  <p className="mb-0 text-muted small">
                    <i className="bi bi-globe me-1"></i>
                    <a
                      href={biz.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted text-decoration-none"
                    >
                      Website
                    </a>
                  </p>
                )}
              </div>

              {/* Star Ribbon */}
              <div
                className="position-absolute"
                style={{
                  top: "0",
                  right: "0",
                  width: "0",
                  height: "0",
                  borderTop: "40px solid #67b82f",
                  borderLeft: "40px solid transparent",
                }}
              >
                <span
                  className="position-absolute text-white"
                  style={{ top: "-30px", right: "6px", fontSize: "14px" }}
                >
                  ★
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessList;
