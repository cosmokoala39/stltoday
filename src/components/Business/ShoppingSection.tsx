'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ShoppingItem {
  img: string;
  title: string;
  badge?: string;
}

const shoppingItems: ShoppingItem[] = [
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/7/f7/7f74da19-32ec-5d35-9179-07372918cf57/685ed08ae0cb7.preview.jpg?crop=1762%2C991%2C0%2C92&resize=540%2C304&order=crop%2Cresize",
    title: "Credit Card Debt Relief Options: From Balance Transfers to Debt Settlement",
    badge: "PROVIDED",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/7/1a/71a29f39-f883-5f65-8675-eeb171eca2c4/685d7c9159494.preview.jpg?crop=1763%2C992%2C0%2C92&resize=540%2C304&order=crop%2Cresize",
    title: "Top 5 Debt Relief Programs of 2025: What’s Best for Your Financial Situation?",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/e/be/ebe4120a-ca46-594d-88de-b56102729321/685c3158736bf.preview.jpg?crop=1763%2C992%2C0%2C92&resize=540%2C304&order=crop%2Cresize",
    title: "Best Debt Relief Companies Reviewed: What Real Customers Are Saying in 2025",
  },
  {
    img: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/4/35/435d896e-ba06-5014-8fb9-6c7082e9cbde/685c229a360b2.preview.jpg?crop=1762%2C991%2C0%2C92&resize=540%2C304&order=crop%2Cresize",
    title: "Is Debt Relief Right for You? A Guide to Choosing the Right Path Out of Debt",
  },
];

const ShoppingSection: React.FC = () => {
  return (
    <div className="w-100" style={{ backgroundColor: '#F7F7F7' }}>
      <section className="py-5 px-3 px-md-5">
        <h5 className="fw-bold mb-4 text-black">
          <span className="border-start border-4 border-primary pe-2 me-2"></span>
          Shopping
        </h5>
        <div className="row g-4">
          {shoppingItems.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <Link href={`/shopping/${index}`} className="text-decoration-none">
                <div className="h-100">
                  <div className="position-relative mb-2 overflow-hidden" style={{ height: '230px' }}>
                    <Image
                      src={item.img}
                      alt={`Shopping ${index + 1}`}
                      fill
                      className="object-fit-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                      unoptimized
                      style={{ objectFit: 'cover', cursor: 'pointer' }}
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
                      fontFamily: 'Times New Roman, serif',
                      fontSize: '1.07rem',
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
  );
};

export default ShoppingSection;
