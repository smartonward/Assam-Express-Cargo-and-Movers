import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import AnimatedTimeline from "@/components/AnimatedTimeline";

export default function HowItWorksPage() {
  const steps = [
    {
      num: "BOOK",
      title: "Share Cargo Details",
      desc: "Tell us pickup location in Assam or Pune, weight, cargo type and timeline.",
      imgSrc: "/how-it-works/step1.jpg"
    },
    {
      num: "DISPATCH",
      title: "Dedicated Pickup",
      desc: "Our Guwahati or Pune hub team organizes prompt loading and dispatch.",
      imgSrc: "/how-it-works/step2.jpg"
    },
    {
      num: "DIRECT TRANSIT",
      title: "Express Linehaul",
      desc: "Your shipment moves non-stop across the corridor with active milestone tracking.",
      imgSrc: "/how-it-works/step3.jpg"
    },
    {
      num: "DELIVER",
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
              <AnimatedTimeline steps={steps} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
