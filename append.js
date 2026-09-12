const fs = require('fs');
let css = fs.readFileSync('app/globals.css', 'utf8');

const newCSS = `

/* Interactive Timeline Card Hover Effect */
.timeline-card {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
}

.timeline-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(10, 15, 43, 0.1);
  border-color: rgba(79, 184, 214, 0.4);
}

.timeline-card h2 {
  margin-bottom: 0;
  transition: margin-bottom 0.3s ease;
}

.timeline-card:hover h2 {
  margin-bottom: 16px;
}

.timeline-card-desc-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: grid-template-rows 0.4s ease, opacity 0.3s ease 0.1s;
}

.timeline-card:hover .timeline-card-desc-wrapper {
  grid-template-rows: 1fr;
  opacity: 1;
}

.timeline-card-desc-inner {
  overflow: hidden;
}

.timeline-card-desc-inner p {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
}
`;

fs.writeFileSync('app/globals.css', css + newCSS);
