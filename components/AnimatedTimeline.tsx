"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AnimatedTimeline({ steps }: { steps: any[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="timeline-wrapper" ref={containerRef}>
      {/* SVG Zig Zag Line for Desktop */}
      <svg className="zigzag-line-svg desktop-only" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path 
          d="M 25 12.5 L 75 37.5 L 25 62.5 L 75 87.5" 
          fill="none" 
          stroke="var(--cyan)" 
          strokeWidth="2" 
          strokeDasharray="6,6" 
          vectorEffect="non-scaling-stroke" 
          style={{ pathLength }}
        />
        <circle cx="25" cy="12.5" r="1.5" fill="var(--cyan)" vectorEffect="non-scaling-stroke" />
        <circle cx="75" cy="37.5" r="1.5" fill="var(--cyan)" vectorEffect="non-scaling-stroke" />
        <circle cx="25" cy="62.5" r="1.5" fill="var(--cyan)" vectorEffect="non-scaling-stroke" />
        <circle cx="75" cy="87.5" r="1.5" fill="var(--cyan)" vectorEffect="non-scaling-stroke" />
      </svg>
      
      {/* SVG Straight Line for Mobile */}
      <svg className="zigzag-line-svg mobile-only" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path 
          d="M 15 5 L 15 95" 
          fill="none" 
          stroke="var(--cyan)" 
          strokeWidth="2" 
          strokeDasharray="6,6" 
          vectorEffect="non-scaling-stroke" 
          style={{ pathLength }}
        />
        <circle cx="15" cy="12.5" r="1.5" fill="var(--cyan)" vectorEffect="non-scaling-stroke" />
        <circle cx="15" cy="37.5" r="1.5" fill="var(--cyan)" vectorEffect="non-scaling-stroke" />
        <circle cx="15" cy="62.5" r="1.5" fill="var(--cyan)" vectorEffect="non-scaling-stroke" />
        <circle cx="15" cy="87.5" r="1.5" fill="var(--cyan)" vectorEffect="non-scaling-stroke" />
      </svg>

      <div className="timeline-grid">
        {steps.map((step, index) => {
          const isEven = index % 2 !== 0;
          return (
            <motion.div 
              className={`timeline-row ${isEven ? 'row-right' : 'row-left'}`} 
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, type: "spring", bounce: 0.4 }}
            >
              <div className="timeline-card">
                <span className="step-badge">{step.num}</span>
                <h2>{step.title}</h2>
                <div className="timeline-card-desc-wrapper">
                  <div className="timeline-card-desc-inner">
                    <p>{step.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
