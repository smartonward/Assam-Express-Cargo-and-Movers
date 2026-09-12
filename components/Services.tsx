import Link from "next/link";

export default function Services() {
  const serviceList = [
    {
      num: "01",
      title: "Full Truck Load (Assam ⇄ Pune)",
      desc: "Dedicated non-stop linehaul vehicle movement connecting Assam (Guwahati) and Pune for major shipments.",
    },
    {
      num: "02",
      title: "Part Load & Parcel Cargo",
      desc: "Flexible, cost-effective transport for commercial parcels and medium consignments between Assam and Pune.",
    },
    {
      num: "03",
      title: "Direct Express Linehaul",
      desc: "Priority movement with direct scheduled transit avoiding unnecessary multi-city transshipment delays.",
    },
    {
      num: "04",
      title: "B2B Commercial Logistics",
      desc: "Scheduled supply-chain and recurring cargo distribution between Western India industrial hubs and the Northeast.",
    },
    {
      num: "05",
      title: "Secure Loading & Handling",
      desc: "Specialized care, waterproof tarpaulin protection, and attentive cargo monitoring from origin to destination.",
    },
    {
      num: "06",
      title: "Launching PAN India Soon",
      desc: "Currently focused on the high-demand Assam ⇄ Pune lifeline, expanding with nationwide state networks soon!",
      isUpcoming: true,
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-tag reveal">Our Corridors</div>
        <h2 className="section-title reveal">
          Specialized Cargo Solutions for
          <br />
          <span>Assam ⇄ Pune &amp; Beyond.</span>
        </h2>
        <p className="section-copy reveal">
          Dependable cargo transportation engineered around the high-volume Assam to Pune route,
          backed by responsive dispatch and personalized support.
        </p>
        <div className="service-grid">
          {serviceList.slice(0, 3).map((service) => (
            <article
              className={`service reveal ${service.isUpcoming ? "upcoming-service" : ""}`}
              key={service.num}
            >
              <small>{service.num}</small>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </article>
          ))}
        </div>
        
        <div className="reveal" style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/services" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            View All Services <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
