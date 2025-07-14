import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

// ✅ Import all category data
import businessData from "@/data/categories/business.json";
import SportsData from "@/data/categories/sports.json";
import HealthaData from "@/data/categories/health.json";
import Technology from "@/data/categories/technology.json";
import PoliticsData from "@/data/categories/politics.json";  
import Science from "@/data/categories/science.json";
import RecommendedSection from "@/components/RecommendedSection";

interface NewsItem {
  img: string;
  title: string;
  author?: string;
  badge?: string;
  sponsored?: boolean;
  slug?: string;
}

interface CategoryData {
  featured: NewsItem;
  businessNews: NewsItem[];
  middleSectionNews: NewsItem[];
  shopping: NewsItem[];
}

interface PageProps {
  params: Promise< {
    category: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { category: "business" },
    { category: "technology" },
    { category: "sports" },
    { category: "science" },
    { category: "health" },
    { category: "politics" },
  ];
}

export async function generateMetadata({ params }: PageProps) {
  const name = (await params).category.charAt(0).toUpperCase() + (await params).category.slice(1);
  return {
    title: `${name} - St. Louis Post-Dispatch`,
    description: `Latest ${name} news and updates from the St. Louis Post-Dispatch.`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } =await params;

  let categoryData: CategoryData | null = null;

  switch (category) {
    case "business":
      categoryData = businessData;
      break;
    case "sports":
      categoryData = SportsData;
      break;
    case "technology":
      categoryData = Technology;
      break;
    case "health":
      categoryData = HealthaData;
      break;
    case "science":
      categoryData = Science;
      break;
      case "politics":
      categoryData = PoliticsData;
      break;
   
    default:
      notFound();
  }

  if (!categoryData) return notFound();

  const { featured, businessNews, middleSectionNews, shopping } = categoryData;

  return (
    <div>
      {/* ✅ Hero + Business Section */}
      <section className="bg-black text-white py-5">
        <div className="container-fluid px-3 px-md-4">
          <div className="mb-5 text-center">
            <h3 className="fw-bold display-6 text-capitalize">{category}</h3>
          </div>

          <div className="row gx-4 gy-4">
            {/* Featured Item (Clickable) */}
            <div className="col-md-5">
              <Link href={`/${category}/${featured.slug}`} className="text-decoration-none text-white">
                <div className="overflow-hidden mb-3" style={{ height: "350px", position: "relative" }}>
                  <Image
                    src={featured.img}
                    alt={featured.title}
                    fill
                    className="object-fit-cover"
                  />
                </div>
                <h4 className="fw-bold">{featured.title}</h4>
                <p className="text-muted">{featured.author}</p>
              </Link>
            </div>

            {/* Business News Items */}
            <div className="col-md-7">
              <div className="row gx-4 gy-4">
                {businessNews?.map((item, idx) => (
                  <div className="col-6 col-md-6 col-lg-4" key={idx}>
                    <Link
                      href={`/${category}/${item.slug}`}
                      className="text-decoration-none text-dark"
                    >
                      <div className="position-relative" style={{ height: "200px" }}>
                        <Image
                          src={item.img}
                          alt={item.title}
                          fill
                          className="w-100 object-fit-cover rounded mb-2"
                        />
                      </div>
                      <h6 className="fw-bold">{item.title}</h6>
                      <p className="text-muted">{item.author}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <RecommendedSection/>

      {/* ✅ Middle Section */}
      {middleSectionNews?.length > 0 && (
        <div className="bg-white">
          
          <section className="container py-5">
            <div className="row g-4" style={{ marginTop: "100px" }}>
              {middleSectionNews.map((item, index) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                  <Link
                    href={`/${category}/${item.slug}`}
                    className="text-decoration-none text-dark"
                  >
                    <div className="ratio ratio-16x9 overflow-hidden mb-2 position-relative">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="w-100 h-100 object-fit-cover"
                      />
                    </div>
                    <h6 className="fw-bold text-black">{item.title}</h6>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* ✅ Shopping Section */}
      {shopping?.length > 0 && (
        <div className="w-100" style={{ backgroundColor: "#F7F7F7" }}>
          <section className="py-5 px-3 px-md-5">
            <h5 className="fw-bold mb-4 text-black">
              <span className="border-start border-4 border-primary pe-2 me-2"></span>
              Shopping
            </h5>
            <div className="row g-4">
              {shopping.map((item, index) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                  <Link
                    href={`/${category}/${item.slug}`}
                    className="text-decoration-none"
                  >
                    <div className="h-100 cursor-pointer">
                      <div
                        className="position-relative mb-2 overflow-hidden"
                        style={{ height: "230px" }}
                      >
                        <Image
                          src={item.img}
                          alt={item.title}
                          fill
                          className="w-100 h-100 object-fit-cover"
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
      )}

      {/* ✅ CTA */}
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
