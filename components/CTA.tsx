"use client";

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className="cta-box reveal">
          <div>
            <h2>
              Moving Cargo Between Assam &amp; Pune?
              <br />
              Let&apos;s get it moving today.
            </h2>
            <p>
              Direct trucks, verified dispatch times, and dedicated care for your commercial or personal goods.
              Expanding with nationwide PAN-India routes soon!
            </p>
          </div>
          <button 
            className="btn btn-primary" 
            onClick={() => window.dispatchEvent(new Event("openQuoteModal"))}
          >
            Get Assam ⇄ Pune Quote <span>↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}
