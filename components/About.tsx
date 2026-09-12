export default function About() {
  const points = [
    {
      title: "Direct Assam ⇄ Pune Linehaul",
      desc: "No unnecessary depot delays. Direct trucks between Guwahati & Pune.",
    },
    {
      title: "Assam & Pune Hubs",
      desc: <>Dedicated ground staff and warehouses. <b>All locations across Pune and Assam are available for loading and unloading.</b></>,
    },
    {
      title: "Real-Time Journey Updates",
      desc: "Direct communication and milestone alerts across the ~2,400 km route.",
    },
    {
      title: "Launching PAN India Soon",
      desc: "Expanding to all 28 states with the same standard of trust and care.",
    },
  ];

  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="visual reveal">
          <div className="visual-inner">
            <div className="visual-kicker">Assam ⇄ Pune Lifeline</div>
            <h3>Connecting East &amp; West India with unmatched reliability.</h3>
          </div>
          <svg className="route-map" viewBox="0 0 500 350" fill="none" aria-hidden="true">
            <path d="M50 310 C140 260 220 280 320 210 C380 160 420 180 460 120" />
            <circle cx="50" cy="310" r="8" fill="#FFFFFF" stroke="#4FA0E8" strokeWidth="3" />
            <circle cx="460" cy="120" r="8" fill="#FFFFFF" stroke="#4FA0E8" strokeWidth="3" />
          </svg>
        </div>

        <div>
          <div className="section-tag reveal"></div>
          <h2 className="section-title reveal">
            Your Dedicated Transport Partner on the <span>Assam ⇄ Pune Corridor.</span>
          </h2>
          <p className="section-copy reveal">
            We specialize in connecting the economic heartbeat of Pune with Assam and the Northeast.
            Every truck is handled with care, every dispatch is coordinated with speed, and our PAN-India
            expansion is launching soon.
          </p>
          <div className="about-points">
            {points.map((point, index) => (
              <div className="point reveal" key={index}>
                <div className="check">✓</div>
                <div>
                  <b>{point.title}</b>
                  <p>{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
