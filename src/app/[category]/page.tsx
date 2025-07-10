// app/category/[category]/page.tsx

import Link from "next/link";

// Import all category data
import businessData from "../../../public/data/categories/business.json";
import politicsData from "../../../public/data/categories/politics.json";
import sportsData from "../../../public/data/categories/sports.json";
import technologyData from "../../../public/data/categories/technology.json";
import scienceData from "../../../public/data/categories/science.json";
import healthData from "../../../public/data/categories/health.json";

interface NewsItem {
  img: string;
  title: string;
  author?: string;
  badge?: string;
  sponsored?: boolean;
}

interface CategoryData {
  featured: NewsItem;
  businessNews: NewsItem[];
  middleSectionNews: NewsItem[];
  shopping: NewsItem[];
}

interface PageProps {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  return [
    { category: "business" },
    { category: "politics" },
    { category: "sports" },
    { category: "technology" },
    { category: "science" },
    { category: "health" },
  ];
}

export default function CategoryPage({ params }: PageProps) {
  const { category } = params;

  let categoryData: CategoryData;

  switch (category) {
    case "business":
      categoryData = businessData;
      break;
    case "politics":
      categoryData = politicsData;
      break;
    case "sports":
      categoryData = sportsData;
      break;
    case "technology":
      categoryData = technologyData;
      break;
    case "science":
      categoryData = scienceData;
      break;
    case "health":
      categoryData = healthData;
      break;
    default:
      return (
        <div className="p-5 text-center text-danger">
          Invalid category: <strong>{category}</strong>
        </div>
      );
  }

  const featured = categoryData.featured;
  const businessNews = categoryData.businessNews;
  const middleNews = categoryData.middleSectionNews;
  const shoppingNews = categoryData.shopping;

  return (
    <div>
      {/* Top Section */}
      <section className="bg-black text-white py-5">
        <div className="container-fluid px-3 px-md-4">
          <div className="mb-5 text-center">
            <h3 className="fw-bold display-6 text-capitalize">
              ST. LOUIS {category} NEWS
            </h3>
          </div>

          <div className="row gx-4 gy-4">
            <div className="col-md-5">
              <div className="overflow-hidden mb-3" style={{ height: "350px" }}>
                <img
                  src={featured.img}
                  alt="Featured"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              <h4 className="fw-bold">{featured.title}</h4>
              <p className="text-muted">{featured.author}</p>
            </div>

            <div className="col-md-7">
              <div className="row gx-4 gy-4">
                {businessNews.map((item, idx) => (
                  <div className="col-12 col-md-6 col-lg-4" key={idx}>
                    <img
                      src={item.img}
                      className="w-100 object-fit-cover rounded mb-2"
                      alt=""
                    />
                    <h6 className="fw-bold">{item.title}</h6>
                    <p className="text-muted">{item.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Section */}
      <div className="bg-white">
        <section className="container py-5">
          <div className="row g-4" style={{ marginTop: "100px" }}>
            {middleNews.map((item, index) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                <div className="ratio ratio-16x9 overflow-hidden mb-2">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <h6 className="fw-bold text-black">{item.title}</h6>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Shopping Section */}
      <div className="w-100" style={{ backgroundColor: "#F7F7F7" }}>
        <section className="py-5 px-3 px-md-5">
          <h5 className="fw-bold mb-4 text-black">
            <span className="border-start border-4 border-primary pe-2 me-2"></span>
            Shopping
          </h5>
          <div className="row g-4">
            {shoppingNews.map((item, index) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                <Link href={`/shopping/${index}`} className="text-decoration-none">
                  <div className="h-100 cursor-pointer">
                    <div
                      className="position-relative mb-2 overflow-hidden"
                      style={{ height: "230px" }}
                    >
                      <img
                        src={item.img}
                        alt={`Shopping ${index + 1}`}
                        className="w-100 h-100 object-fit-cover"
                        style={{ cursor: "pointer" }}
                      />
                      {item.badge && (
                        <span className="position-absolute bottom-0 start-0 bg-dark text-white px-2 py-1 small">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <h6
                      className="text-black"
                      style={{
                        fontFamily: "Times New Roman, serif",
                        fontSize: "1.07rem",
                        fontWeight: 900,
                      }}
                    >
                      {item.title}
                    </h6>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Section */}
      <div className="bg-white w-100 py-5">
        <div className="d-flex justify-content-center">
          <div className="border border-primary text-primary text-center bg-white py-2 px-4">
            More St. Louis {category} news
          </div>
        </div>
      </div>
    </div>
  );
}
