import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

export const metadata = {
  title: "About Us | Assam Express Cargo Movers",
  description: "Learn more about Assam Express Cargo Movers, our mission, and our founders Sameer Shaikh and Samser Alam.",
};

export default function AboutPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main className="about-page">
        {/* Page Header */}
        <section className="about-hero">
          <div className="container">
            <div className="section-tag reveal">Our Story</div>
            <h1 className="reveal">
              Pioneering direct logistics between <span>Assam and Pune</span> since 2003.
            </h1>
            <p className="about-hero-copy reveal">
              We specialize in dependable and hassle-free cargo moving solutions. With our own professional packing team and dedicated trucks, we maintain direct control over the entire process-ensuring safety, quality, and timely delivery.
            </p>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="leadership-section">
          <div className="container">
            <h2 className="section-title reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
              Meet Our Leadership
            </h2>

            <div className="team-grid">
              {/* Founder: Samser Alam */}
              <div className="team-card reveal">
                <div className="team-image-wrapper">
                  <img src="/images/samser.jpg" alt="Samser Alam" className="team-img" />
                </div>
                <div className="team-content">
                  <h3>Samser Alam</h3>
                  <div className="team-role">Founder</div>
                  <div className="team-bio">
                    <p>
                      Hi, I’m Samser Alam, the Founder of Assam Express Cargo Movers, proudly serving customers since 2003. I started this business with a vision to provide safe, reliable, and professional cargo transportation and moving services across India.
                    </p>
                    <p>
                      We specialize in Pune to anywhere in Assam, offering dependable and hassle-free cargo moving solutions. What makes us different is that we have our own professional packing team and our own dedicated trucks, allowing us to maintain direct control over the entire process—from packing and loading to transportation and final delivery.
                    </p>
                    <p>
                      With everything managed under our own company, we ensure better cargo safety, packing quality, timely transportation, and customer satisfaction. Our goal is to build Assam Express Cargo Movers into a trusted and respected name in the logistics and moving industry.
                    </p>
                  </div>
                </div>
              </div>

              {/* Co-Founder: Sameer Shaikh */}
              <div className="team-card reversed reveal" style={{ animationDelay: '0.1s' }}>
                <div className="team-image-wrapper">
                  <img src="/images/sameer.jpg" alt="Sameer Shaikh" className="team-img" />
                </div>
                <div className="team-content">
                  <h3>Sameer Shaikh</h3>
                  <div className="team-role">Co-Founder</div>
                  <div className="team-bio">
                    <p>
                      Hi, I’m Sameer Shaikh, the Co-Founder of Assam Express Cargo Movers, proudly serving customers since 2003. I look after the company’s technical, billing, and digital operations, helping ensure that our business processes remain organized, efficient, and transparent.
                    </p>
                    <p>
                      My responsibilities include billing and documentation, digital management, customer coordination, technical operations, and improving our business systems. I work closely with our transport and packing team to ensure that every shipment is managed smoothly from booking to final delivery.
                    </p>
                    <p>
                      Our company specializes in Pune to anywhere in Assam, with our own packing team and dedicated trucks. My goal is to bring technology, efficiency, and professional management into our traditional logistics business while continuing to deliver reliable service to every customer.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="vision-section" style={{ padding: '60px 0', background: '#ffffff', color: '#101936' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '0 20px' }}>
            
            <div className="section-tag" style={{ display: 'inline-block', marginBottom: '24px' }}>
              Our Vision
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '40px', fontWeight: 800, color: '#101936', lineHeight: 1.2 }}>
              Redefining the standard of <br/><span style={{ color: '#45B5D8' }}>Interstate Logistics</span>
            </h2>

            <div style={{ maxWidth: '750px', margin: '0 auto' }}>
              <p style={{ fontSize: '17px', color: '#61708A', lineHeight: 1.85, marginBottom: '32px' }}>
                Our vision is to build Assam Express Cargo Movers into the most trusted and respected name in the logistics industry. By bridging the critical route between Western India and the Northeast, we strive to eliminate the anxiety of long-distance moving.
              </p>
              <p style={{ fontSize: '17px', color: '#61708A', lineHeight: 1.85 }}>
                We aim to seamlessly blend traditional, hard-working freight operations with modern technology, transparency, and professional management to provide an unmatched, reliable experience for every customer.
              </p>
            </div>
            
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
