export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container inner">
        <div>
          <span className="route-badge">◉ Assam (Guwahati) ⇄ Pune (Maharashtra)</span>
          <span className="pan-india-tag">✦ Direct Corridor · Launching PAN India Soon</span>
        </div>
        <div className="right">
          <span>Daily Linehaul Express</span>
          <a href="tel:+919006097444">
            <span>+91 90060 97444</span>
          </a>
          <span style={{ margin: "0 6px", opacity: 0.5 }}>|</span>
          <a href="tel:+918969641695">
            <span>+91 89696 41695</span>
          </a>
        </div>
      </div>
    </div>
  );
}
