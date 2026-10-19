import React, { useState, useEffect, useRef } from 'react';

/**
 * HeroParallax Component
 * Creates an authentic Tibetan Himalayan parallax experience:
 * - Separates the background into pristine Himalayan sky, left mountain ridge,
 *   and right snow-capped Dhauladhar peak.
 * - On scroll and mouse movement, the mountains gently move towards the sides,
 *   revealing the sacred celestial sky while the Gyuto Monastery and assembly
 *   of monks stay majestically anchored in the foreground.
 */
export default function HeroParallax({
  alt = "Gyuto Tantric Monastery Assembly of Monks with Himalayan Mountains",
  lang = "en"
}) {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const rafId = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        if (!containerRef.current) {
          rafId.current = null;
          return;
        }
        const rect = containerRef.current.getBoundingClientRect();
        const heroHeight = rect.height || 600;
        // Calculate progress from 0 to 1 as the hero scrolls out of view
        const scrollY = window.scrollY || window.pageYOffset || 0;
        const progress = Math.min(1.2, Math.max(0, scrollY / heroHeight));
        setScrollProgress(progress);
        rafId.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Normalized coordinates from -1 (left/top) to +1 (right/bottom)
    const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMouseOffset({
      x: Math.max(-1, Math.min(1, normX)),
      y: Math.max(-1, Math.min(1, normY))
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMouseOffset({ x: 0, y: 0 });
  };

  // Mountain horizontal separation: moves towards sides as user scrolls
  // Left mountain shifts left (negative X)
  // Right mountain shifts right (positive X)
  const scrollShift = scrollProgress * 55; // max 55px on scroll
  const mouseShiftX = isHovered ? mouseOffset.x * 18 : 0;
  const mouseShiftY = isHovered ? mouseOffset.y * 10 : 0;

  const leftMountainX = -scrollShift - mouseShiftX;
  const leftMountainY = scrollProgress * 12 - mouseShiftY * 0.5;

  const rightMountainX = scrollShift + mouseShiftX;
  const rightMountainY = scrollProgress * 12 - mouseShiftY * 0.5;

  const skyY = scrollProgress * 24 + (isHovered ? mouseOffset.y * 6 : 0);
  const fgY = scrollProgress * 6 + (isHovered ? mouseOffset.y * -3 : 0);
  const fgX = isHovered ? mouseOffset.x * -4 : 0;

  return (
    <div
      ref={containerRef}
      className="gt-hero-parallax-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label={alt}
    >
      {/* 1. Deepest Background: Himalayan Sky */}
      <img
        src="/images/home-hero-sky.jpg"
        alt=""
        aria-hidden="true"
        className="gt-parallax-layer gt-parallax-sky"
        style={{
          transform: `translate3d(0, ${skyY.toFixed(2)}px, 0) scale(1.04)`
        }}
        loading="eager"
      />

      {/* 2. Left Mountain Ridge (moves towards left side) */}
      <img
        src="/images/home-hero-mountain-left.png"
        alt=""
        aria-hidden="true"
        className="gt-parallax-layer gt-parallax-mountain-left"
        style={{
          transform: `translate3d(${leftMountainX.toFixed(2)}px, ${leftMountainY.toFixed(2)}px, 0) scale(1.06)`
        }}
        loading="eager"
      />

      {/* 3. Right Snow Mountain Peak (moves towards right side) */}
      <img
        src="/images/home-hero-mountain-right.png"
        alt=""
        aria-hidden="true"
        className="gt-parallax-layer gt-parallax-mountain-right"
        style={{
          transform: `translate3d(${rightMountainX.toFixed(2)}px, ${rightMountainY.toFixed(2)}px, 0) scale(1.06)`
        }}
        loading="eager"
      />

      {/* 4. Foreground: Monastic Assembly & Temple */}
      <img
        src="/images/home-hero-foreground.png"
        alt={alt}
        className={`gt-parallax-layer gt-parallax-foreground gt-hero-${lang}`}
        style={{
          transform: `translate3d(${fgX.toFixed(2)}px, ${fgY.toFixed(2)}px, 0)`
        }}
        loading="eager"
      />

      {/* Fallback standard image for no-js or assistive devices */}
      <noscript>
        <img
          src="/images/home-hero.jpg"
          alt={alt}
          className="gt-hero-img"
        />
      </noscript>
    </div>
  );
}
