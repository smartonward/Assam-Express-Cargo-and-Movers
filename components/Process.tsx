import AnimatedTimeline from "./AnimatedTimeline";

export default function Process() {
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
    <section className="timeline-section" id="process" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="container">
        <div className="section-tag reveal">Direct & Streamlined</div>
        <h2 className="section-title reveal" style={{ marginBottom: '60px' }}>
          Four simple steps. <span style={{ color: "var(--cyan)" }}>Direct Assam ⇄ Pune Movement.</span>
        </h2>
        <AnimatedTimeline steps={steps} />
      </div>
    </section>
  );
}
