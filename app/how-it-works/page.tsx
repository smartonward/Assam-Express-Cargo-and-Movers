import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function HowItWorksPage() {
  const steps = [
    {
      num: "01 / BOOK",
      title: "Share Cargo Details",
      desc: "Tell us pickup location in Assam or Pune, weight, cargo type and timeline.",
      imgSrc: "/how-it-works/step1.jpg"
    },
    {
      num: "02 / DISPATCH",
      title: "Dedicated Pickup",
      desc: "Our Guwahati or Pune hub team organizes prompt loading and dispatch.",
      imgSrc: "/how-it-works/step2.jpg"
    },
    {
      num: "03 / DIRECT TRANSIT",
      title: "Express Linehaul",
      desc: "Your shipment moves non-stop across the corridor with active milestone tracking.",
      imgSrc: "/how-it-works/step3.jpg"
    },
    {
      num: "04 / DELIVER",
      title: "Safe Handover",
      desc: "Direct doorstep delivery at your Pune or Assam destination without damage.",
      imgSrc: "/how-it-works/step4.jpg"
    },
  ];

  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main className="how-it-works-page">
        {/* Page Header */}
        <section className="about-hero">
          <div className="container">
            <div className="section-tag reveal">Direct & Streamlined</div>
            <h1 className="reveal">
              Four simple steps. <span>Direct Assam ⇄ Pune Movement.</span>
            </h1>
            <p className="about-hero-copy reveal">
              No complex multi-handling. Direct linehaul from origin to destination across the Assam-Pune corridor.
            </p>
          </div>
        </section>

        {/* Zig-Zag Timeline Section */}
        <section className="timeline-section">
          <div className="container">
            <div className="timeline-wrapper">
              {/* SVG Zig Zag Line for Desktop */}
              <svg className="zigzag-line-svg desktop-only" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path 
                  d="M 25 12.5 L 75 37.5 L 25 62.5 L 75 87.5" 
                  fill="none" 
                  stroke="var(--cyan)" 
                  strokeWidth="2" 
                  strokeDasharray="6,6" 
                  vectorEffect="non-scaling-stroke" 
                />
                <circle cx="25" cy="12.5" r="1.5" fill="var(--cyan)" vectorEffect="non-scaling-stroke" />
                <circle cx="75" cy="37.5" r="1.5" fill="var(--cyan)" vectorEffect="non-scaling-stroke" />
                <circle cx="25" cy="62.5" r="1.5" fill="var(--cyan)" vectorEffect="non-scaling-stroke" />
                <circle cx="75" cy="87.5" r="1.5" fill="var(--cyan)" vectorEffect="non-scaling-stroke" />
              </svg>
              
              {/* SVG Straight Line for Mobile */}
              <svg className="zigzag-line-svg mobile-only" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path 
                  d="M 15 5 L 15 95" 
                  fill="none" 
                  stroke="var(--cyan)" 
                  strokeWidth="2" 
                  strokeDasharray="6,6" 
                  vectorEffect="non-scaling-stroke" 
                />
                <circle cx="15" cy="12.5" r="1.5" fill="var(--cyan)" vectorEffect="non-scaling-stroke" />
                <circle cx="15" cy="37.5" r="1.5" fill="var(--cyan)" vectorEffect="non-scaling-stroke" />
                <circle cx="15" cy="62.5" r="1.5" fill="var(--cyan)" vectorEffect="non-scaling-stroke" />
                <circle cx="15" cy="87.5" r="1.5" fill="var(--cyan)" vectorEffect="non-scaling-stroke" />
              </svg>

              <div className="timeline-grid">
                {steps.map((step, index) => {
                  const isEven = index % 2 !== 0;
                  return (
                    <div className={`timeline-row reveal ${isEven ? 'row-right' : 'row-left'}`} key={index}>
                      <div className="timeline-card">
                        <span className="step-badge">{step.num}</span>
                        <h2>{step.title}</h2>
                        <div className="timeline-card-desc-wrapper">
                          <div className="timeline-card-desc-inner">
                            <p>{step.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
