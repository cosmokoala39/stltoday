'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ShoppingDetailPage = () => {
  return (
    <div className="w-100">
      {/* Hero Section */}
      <div className="bg-black text-white py-5" style={{ minHeight: '490px' }}>
        <div className="container" style={{ marginLeft: '200px' }}>
          <h1 className="hero-title mb-3">
            Credit Card Debt Relief Options: <br />
            From Balance Transfers to Debt Settlement
          </h1>
          <p className="mb-1"><small>PROVIDED CONTENT  SHOPPING</small></p>

          <p className="mt-4 d-flex align-items-center flex-wrap text-secondary small">
            <span className="me-3 fw-semibold text-white">
              Content by Dan Sherman, contributing writer
            </span>
            <span className="me-3">Jun 27, 2025</span>
            <span className="me-3 d-flex align-items-center">
              <i className="bi bi-chat-left-text me-1"></i> 0
            </span>
            <span className="d-flex align-items-center">
              <i className="bi bi-journal-text me-1"></i> 3 min to read
            </span>
          </p>
        </div>
      </div>

      {/* Main Article Section */}
      <div className="bg-white" style={{ paddingTop: '40px' }}>
        <div className="container p-4 bg-white" style={{ marginTop: '-200px', width: '1000px' }}>
          
          {/* Share Buttons */}
          <div className="d-flex gap-2 mb-4">
            <button className="btn btn-primary btn-sm"><i className="bi bi-facebook"></i></button>
            <button className="btn btn-dark btn-sm"><i className="bi bi-twitter-x"></i></button>
            <button className="btn btn-info btn-sm"><i className="bi bi-bug-fill"></i></button>
            <button className="btn btn-secondary btn-sm"><i className="bi bi-envelope-fill"></i></button>
            <button className="btn btn-light btn-sm"><i className="bi bi-printer-fill"></i></button>
            <button className="btn btn-dark btn-sm"><i className="bi bi-share-fill"></i></button>
            <button className="btn btn-danger btn-sm"><i className="bi bi-bookmark-fill"></i></button>
          </div>

          {/* Audio Player */}
          <div className="mb-4">
            <div className="fw-medium small">🎧 Playing article</div>
            <div className="small text-black mb-2">Powered by <strong>Trinity Audio</strong></div>
            <div className="d-flex align-items-center gap-2 px-3 py-2 rounded" style={{ background: 'white' }}>
              <button className="btn btn-outline-dark btn-sm rounded-circle px-2 py-1">
                <i className="bi bi-play-fill"></i>
              </button>
              <span className="small">00:00</span>
              <div className="flex-grow-1">
                <div className="progress" style={{ height: '6px' }}>
                  <div className="progress-bar bg-dark" style={{ width: '0%' }}></div>
                </div>
              </div>
              <span className="small">05:22</span>
              <div className="d-flex align-items-center gap-2 ms-2 text-muted small">
                <span className="border px-1">A🌐</span>
                <i className="bi bi-arrow-counterclockwise"></i>
                <i className="bi bi-arrow-clockwise"></i>
                <span className="border rounded px-1">1.0x</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <Image
            src="https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/b/16/b16e3169-9bbb-5b84-9bfe-c1a353d66723/685ed08aaf898.image.jpg?resize=1333%2C890"
            alt="Happy couple reading document"
            width={1000}
            height={600}
            className="img-fluid mb-2"
          />

          <p className="small fst-italic">
            <strong className="text-black">
              If you make a purchase after clicking on links within this article, Lee Enterprises may earn affiliate commissions. The news and editorial departments had no role in the creation or display of this content. All opinions and views are of the advertiser
            </strong>
          </p>

          <h1 className="text-blue">Freedom Debt Relief</h1>

          {/* Article Body */}
          <div className="article-text text-black">
            <p>If you&apos;re drowning beneath a quickly growing credit card balance and wondering how it got this bad, you&apos;re not alone and out of options.</p>
            <p>Minimum payments barely chip away at the principal. Interest piles on like a late fee snowstorm. At some point, it stops feeling like a financial problem and starts to feel like a full-time job.</p>
            <p>Let&apos;s break down what people are actually doing to get out — what works, what doesn&apos;t, and how to tell the difference. Because real credit card debt relief doesn&apos;t start with a promise. It starts with a plan.</p>

            <h5 className="mt-4">Option 1: Balance Transfer Credit Cards</h5>
            <p><em>Best for: Short-term breathing room for people with good credit</em></p>
            <p>Some cards offer a 0% intro APR on transferred balances for 12 to 18 months. That can be a game changer if you qualify.</p>

            <p><strong>Upside:</strong></p>
            <ul>
              <li>Temporarily stops interest</li>
              <li>Gives you a runway to knock down debt faster</li>
            </ul>

            <p><strong>Downside:</strong></p>
            <ul>
              <li>Requires a strong credit score to qualify</li>
              <li>After the intro period, interest usually skyrockets</li>
              <li>Fees for the transfer can still cost you</li>
            </ul>

            <p>Good for short bursts of progress. But not a long-term fix.</p>

            <h5 className="mt-4">Option 2: Debt Consolidation Loan</h5>
            <p><em>Best for: People juggling several cards with high APRs</em></p>
            <p>This is where you borrow a lump sum to pay off all your cards, leaving you with one monthly payment – ideally at a lower rate.</p>
          </div>

          {/* Comment & Newsletter Section */}
          <div className="text-center mt-5 pt-4 border-top">
            <div className="mb-4">
              <button className="btn btn-primary">💬 0 Comments</button>
            </div>

            <h5 className="fw-bold text-black">Be the first to know</h5>
            <p className="text-muted mb-3">Get local news delivered to your inbox!</p>

            <form className="d-flex justify-content-center align-items-center gap-2 flex-wrap mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                style={{ maxWidth: '800px' }}
              />
              <button type="submit" className="btn btn-danger">Sign up!</button>
            </form>

            <p className="text-muted small mb-0">
              * I understand and agree that registration on or use of this site constitutes agreement to its{' '}
              <Link href="#">user agreement</Link> and <Link href="#">privacy policy</Link>.
            </p>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .hero-title {
          font-family: 'Georgia', serif;
          font-size: 2.7rem;
          font-weight: bold;
          line-height: 1.2;
        }
        .article-box {
          max-width: 850px;
          margin: auto;
          font-family: 'Georgia', serif;
          font-size: 1.05rem;
          line-height: 1.75;
        }
        .audio-bar {
          background-color: #f2f2f2;
          height: 50px;
        }
        .play-icon {
          width: 20px;
          height: 20px;
          background-color: #ccc;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default ShoppingDetailPage;
