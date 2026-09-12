const fs = require('fs');
let css = fs.readFileSync('app/globals.css', 'utf8');

const newCSS = `

/* Premium Contact Section Styles */
.contact-column {
  max-width: 320px;
  text-align: left;
}

.contact-heading {
  color: #FFFFFF;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.contact-label {
  display: block;
  color: #A0ADC0;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
}

.contact-text,
.contact-text a {
  display: block;
  color: #71819B;
  font-size: 14px;
  line-height: 1.6;
  text-decoration: none;
  font-style: normal;
  transition: color 0.3s ease;
}

.contact-text a:hover {
  color: #A0ADC0;
}

.contact-cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: #A0ADC0;
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 4px;
  padding: 0;
  cursor: pointer;
  transition: color 0.3s ease;
  margin-top: 24px;
}

.contact-cta span {
  transition: transform 0.3s ease;
}

.contact-cta:hover {
  color: #FFFFFF;
}

.contact-cta:hover span {
  transform: translateX(4px);
}
`;

fs.writeFileSync('app/globals.css', css + newCSS);
