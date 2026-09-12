const fs = require('fs');
let css = fs.readFileSync('app/globals.css', 'utf8');

const newCSS = `

/* Image Marquee Section */
.image-marquee-section {
  padding: 60px 0 100px;
  background: var(--white);
  overflow: hidden;
  width: 100%;
}

.marquee-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.marquee-container {
  display: flex;
  width: max-content;
  animation: scrollMarquee 50s linear infinite;
}

.marquee-container:hover {
  animation-play-state: paused;
}

@keyframes scrollMarquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.marquee-item {
  width: 300px;
  height: 400px;
  margin: 0 12px;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0,0,0,0.05);
}
`;

fs.writeFileSync('app/globals.css', css + newCSS);
