const fs = require('fs');
let css = fs.readFileSync('app/globals.css', 'utf8');

const newCSS = `

/* Scroll Truck Route Animation */
.truck-route-wrapper {
  position: relative;
  width: 100%;
}

.scroll-truck-track {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  border-left: 3px dashed rgba(79, 184, 214, 0.5);
  z-index: 10;
}

.scroll-truck-icon {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  background: var(--white);
  border: 3px solid var(--navy);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 25px rgba(10, 15, 43, 0.2);
  z-index: 20;
}

.scroll-truck-icon img {
  width: 40px;
  height: auto;
  transform: rotate(90deg); /* Points truck downwards */
}

@media (max-width: 992px) {
  .scroll-truck-track {
    left: 20px;
  }
  .scroll-truck-icon {
    left: 20px;
  }
}

@media (max-width: 768px) {
  .scroll-truck-track {
    display: none;
  }
  .scroll-truck-icon {
    display: none;
  }
}
`;

fs.writeFileSync('app/globals.css', css + newCSS);
