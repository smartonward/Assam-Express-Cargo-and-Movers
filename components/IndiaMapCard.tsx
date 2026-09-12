"use client";

import dynamic from 'next/dynamic';

const RouteMapFree = dynamic(() => import('./RouteMapFree'), {
  ssr: false,
  loading: () => (
    <div style={{ width: '100%', height: '460px', borderRadius: '20px', backgroundColor: '#0A0F2B', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(79, 184, 214, 0.2)' }}>
      <p style={{ color: '#4FB8D6', fontSize: '14px', fontWeight: 'bold' }}>Loading Map...</p>
    </div>
  )
});

export default function IndiaMapCard() {
  return (
    <div className="india-map-card">
      {/* Card Header with Assam <-> Pune & Pan-India Status */}
      <div className="map-card-head">
        <div>
          <span className="map-badge">
            <span className="live-dot" /> ACTIVE CORRIDOR: ASSAM ⇄ PUNE
          </span>
          <h3 className="map-headline">Direct Express Linehaul</h3>
        </div>
        <div className="hq-tag">
          <strong>ROUTE LIVE</strong>
          <span>Guwahati ⇄ Pune</span>
        </div>
      </div>

      <p className="map-tagline">
        Dedicated fleet moving between Assam &amp; Pune daily. <strong style={{ color: "#4FA0E8" }}>Launching PAN India Soon!</strong>
      </p>

      {/* Real Free Interactive Map showing Driving Route */}
      <RouteMapFree />

      {/* Corridor Metrics Bar */}
      <div className="map-metrics-bar">
        <div className="map-metric-item">
          <b>Assam ⇄ Pune</b>
          <span>Direct Daily Route</span>
        </div>
        <div className="map-metric-item">
          <b>5-7 days</b>
          <span>Express Transit</span>
        </div>
        <div className="map-metric-item">
          <b>PAN-India</b>
          <span>Launching Soon 🚀</span>
        </div>
      </div>

      {/* Embedded Pan-India & Corridor Banner */}
      <div className="pan-india-banner">
        <span className="banner-icon">🚛</span>
        <div className="banner-text">
          <strong>Assam ⇄ Pune Direct Express Route</strong>
          <span>Regular Linehaul • Expanding PAN-India Soon</span>
        </div>
        <span className="banner-tag">ACTIVE ROUTE</span>
      </div>
    </div>
  );
}
