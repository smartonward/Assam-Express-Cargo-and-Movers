export default function Logo({ className = "" }: { className?: string; light?: boolean }) {
  return (
    <div className={`brand-logo-container ${className}`}>
      {/* Exact uploaded Assam Express Logo */}
      <img
        src="/images/new-logo.png"
        alt="Assam Express Cargo Movers"
        className="brand-logo-img"
      />
    </div>
  );
}
