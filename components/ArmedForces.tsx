import { ShieldCheck } from "lucide-react";

export default function ArmedForces() {
  return (
    <section className="armed-forces-section reveal">
      <div className="container">
        <div className="armed-forces-card">
          <div className="armed-forces-icon">
            <ShieldCheck size={48} color="#4FB8D6" strokeWidth={1.5} />
          </div>
          <div className="armed-forces-content">
            <span className="section-tag" style={{ marginBottom: "12px", display: "inline-block" }}>Dedicated Services</span>
            <h2>Proudly Serving Our Armed Forces</h2>
            <p>
              We provide full-fledged, specialized relocation and cargo services for personnel in the <strong>Army, Navy, and Air Force</strong>. 
              With 23+ years of trusted experience, we ensure safe, priority, and secure transit of personal belongings and official cargo for our soldiers across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
