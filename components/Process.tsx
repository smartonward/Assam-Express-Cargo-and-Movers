export default function Process() {
  const steps = [
    {
      num: "01 / BOOK",
      title: "Share Cargo Details",
      desc: "Tell us pickup location in Assam or Pune, weight, cargo type and timeline.",
    },
    {
      num: "02 / DISPATCH",
      title: "Dedicated Pickup",
      desc: "Our Guwahati or Pune hub team organizes prompt loading and dispatch.",
    },
    {
      num: "03 / DIRECT TRANSIT",
      title: "Express Linehaul",
      desc: "Your shipment moves non-stop across the corridor with active milestone tracking.",
    },
    {
      num: "04 / DELIVER",
      title: "Safe Handover",
      desc: "Direct doorstep delivery at your Pune or Assam destination without damage.",
    },
  ];

  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-tag reveal">Direct &amp; Streamlined</div>
        <h2 className="section-title reveal">
          Four simple steps. <span style={{ color: "#4FA0E8" }}>Direct Assam ⇄ Pune Movement.</span>
        </h2>
        <p className="section-copy reveal">
          No complex multi-handling. Direct linehaul from origin to destination across the Assam-Pune corridor.
        </p>
        <div className="process-grid">
          {steps.map((step, index) => (
            <div className="step reveal" key={index}>
              <span className="step-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
