const fs = require('fs');
let css = fs.readFileSync('app/globals.css', 'utf8');

const idx = css.indexOf('.scroll-truck-icon {');
const endIdx = css.indexOf('.pan-india-banner-section {');

if(idx > -1 && endIdx > -1) {
  const perfect = `
.scroll-truck-icon {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.scroll-truck-icon img {
  width: 100%;
  height: auto;
  mix-blend-mode: multiply;
}

.zigzag-section {
  padding: 100px 0;
  position: relative;
  background: var(--white);
  z-index: 2;
}

.zigzag-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 100px;
}

.zigzag-row:last-child {
  margin-bottom: 0;
}

.zigzag-row.row-reversed {
  direction: rtl;
}

.zigzag-row.row-reversed > * {
  direction: ltr;
}

.zigzag-visual {
  aspect-ratio: 4/3;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(10, 15, 43, 0.05);
  position: relative;
  overflow: hidden;
}

.zigzag-content {
  padding: 20px;
}

.service-number {
  display: inline-block;
  font-size: 14px;
  font-weight: 800;
  color: var(--silver);
  margin-bottom: 16px;
  letter-spacing: 0.1em;
}

.zigzag-content h2 {
  font-size: 36px;
  font-weight: 800;
  color: var(--navy);
  margin-bottom: 20px;
  line-height: 1.2;
}

.zigzag-content p {
  font-size: 16px;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 24px;
}

.service-features {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.service-features li {
  font-size: 14px;
  font-weight: 600;
  color: var(--navy);
  display: flex;
  align-items: center;
  gap: 8px;
}

`;
  const newCss = css.substring(0, idx) + perfect + css.substring(endIdx);
  fs.writeFileSync('app/globals.css', newCss);
  console.log('FIXED!');
} else {
  console.log('Could not find markers', idx, endIdx);
}
