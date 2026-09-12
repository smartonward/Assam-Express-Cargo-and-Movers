"use client";

import { useEffect, useRef } from "react";


export default function ScrollTruck() {
  const trackRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let currentProgress = 0;
    let targetProgress = 0;

    const updatePosition = () => {
      currentProgress += (targetProgress - currentProgress) * 0.1;
      
      if (iconRef.current) {
        iconRef.current.style.top = `${currentProgress * 100}%`;
        
        if (currentProgress > 0.95) {
          const fade = 1 - ((currentProgress - 0.95) * 20);
          iconRef.current.style.opacity = Math.max(0, fade).toString();
        } else {
          iconRef.current.style.opacity = '1';
        }
      }
      
      animationFrameId = requestAnimationFrame(updatePosition);
    };
    
    animationFrameId = requestAnimationFrame(updatePosition);

    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const trackTop = rect.top;
      const trackHeight = rect.height;
      const start = windowHeight / 2; 
      
      const distance = start - trackTop;
      let progress = distance / trackHeight;
      
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;
      
      targetProgress = progress;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={trackRef} className="scroll-truck-track">
      <div ref={iconRef} className="scroll-truck-icon">
        <img src="/images/truck.png" alt="Delivery Truck" />
      </div>
    </div>
  );
}
