import React from 'react';

// Sacred Gyuto Monastery Circular Emblem Seal (Figma Logo)
export function GyutoEmblem({ size = 110, className = "gt-emblem-seal" }) {
  return (
    <img
      src="/images/logo.jpg"
      alt="Gyuto Tantric Monastery Seal"
      width={size}
      height={size}
      className={className}
      style={{
        borderRadius: "50%",
        objectFit: "cover",
      }}
    />
  );
}

// Sacred Tibetan Vajra (Dorje) - Exact match to user screenshot and Figma Layer_x0020_1
export function TibetanVajra({ width = 72, height = 24, className = '' }) {
  return (
    <img
      src="/images/tibetan-vajra.png"
      alt="Sacred Tibetan Dorje Vajra"
      width={width}
      height={height}
      className={`gt-vajra-icon ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        objectFit: 'contain',
        display: 'inline-block',
        verticalAlign: 'middle',
        flexShrink: 0
      }}
    />
  );
}

// Ashtamangala Right-Whorled White Conch (Dungkar)
export function RightWhorlConch({ width = 48, height = 80 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', margin: '0 auto' }}
    >
      <path
        d="M24 4 C14 8, 8 20, 8 36 C8 52, 16 68, 24 76 C32 68, 40 52, 40 36 C40 20, 34 8, 24 4 Z"
        fill="#FFFFFF"
        stroke="#2D2A28"
        strokeWidth="2.5"
      />
      <path
        d="M24 4 C28 14, 30 26, 26 38 C22 48, 14 56, 18 68 C20 72, 23 75, 24 76"
        stroke="#2D2A28"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M20 18 C28 22, 34 32, 32 44 C30 52, 24 58, 22 66"
        stroke="#2D2A28"
        strokeWidth="1.8"
        fill="none"
      />
      <path
        d="M12 40 C6 44, 4 52, 6 60 C8 56, 10 50, 14 48"
        fill="#FFD5D5"
        stroke="#2D2A28"
        strokeWidth="1.2"
      />
      <path
        d="M36 40 C42 44, 44 52, 42 60 C40 56, 38 50, 34 48"
        fill="#FFD5D5"
        stroke="#2D2A28"
        strokeWidth="1.2"
      />
    </svg>
  );
}

// Tibetan Endless Knot (Shrivatsa - 1280px-Endlessknot.svg in Figma: 102px × 80px)
export function EndlessKnot({ width = 102, height = 80, color = "#92060F" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 102 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <path
        d="M51 6 L78 28 L66 38 L51 25 L36 38 L24 28 Z"
        stroke={color}
        strokeWidth="4"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M51 74 L24 52 L36 42 L51 55 L66 42 L78 52 Z"
        stroke={color}
        strokeWidth="4"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M24 28 L10 39 L26 52 L38 42 L26 31 Z"
        stroke={color}
        strokeWidth="4"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M78 28 L92 39 L76 52 L64 42 L76 31 Z"
        stroke={color}
        strokeWidth="4"
        strokeLinejoin="round"
        fill="none"
      />
      <rect
        x="40"
        y="28"
        width="22"
        height="22"
        transform="rotate(45 51 39)"
        stroke={color}
        strokeWidth="4"
        fill="none"
      />
    </svg>
  );
}

// Dharma Wheel Watermark for Library Section (1280px-Dharma_Cakra.svg in Figma: 622px x 484px)
export function DharmachakraWatermark({ width = 580, height = 450 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 622 484"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.55, pointerEvents: 'none' }}
    >
      <circle cx="311" cy="230" r="170" stroke="#FDF1D7" strokeWidth="5" strokeOpacity="0.85" />
      <circle cx="311" cy="230" r="152" stroke="#FDF1D7" strokeWidth="3" strokeOpacity="0.6" strokeDasharray="8 8" />
      <circle cx="311" cy="230" r="138" stroke="#FDF1D7" strokeWidth="4.5" strokeOpacity="0.8" />

      {/* Center Hub */}
      <circle cx="311" cy="230" r="48" stroke="#FDF1D7" strokeWidth="5" strokeOpacity="0.9" />
      <circle cx="311" cy="230" r="20" fill="#FDF1D7" fillOpacity="0.3" stroke="#FDF1D7" strokeWidth="3" />

      {/* 8 Spokes */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 311 230)`}>
          <line x1="311" y1="182" x2="311" y2="78" stroke="#FDF1D7" strokeWidth="6" strokeOpacity="0.85" />
          <circle cx="311" cy="50" r="8" fill="#FDF1D7" fillOpacity="0.9" />
        </g>
      ))}

      {/* Lotus Pedestal Base */}
      <path
        d="M180 390 C240 370, 380 370, 442 390 C410 440, 212 440, 180 390 Z"
        stroke="#FDF1D7"
        strokeWidth="4"
        strokeOpacity="0.75"
        fill="#FDF1D7"
        fillOpacity="0.08"
      />
      <path
        d="M210 405 C260 390, 360 390, 412 405"
        stroke="#FDF1D7"
        strokeWidth="3"
        strokeOpacity="0.6"
      />
      <path
        d="M245 425 C280 415, 340 415, 375 425"
        stroke="#FDF1D7"
        strokeWidth="3"
        strokeOpacity="0.5"
      />
    </svg>
  );
}

// Sacred Tibetan Divider Motif (Center Vajra with horizontal hairlines)
export function TibetanDividerMotif({ inverted = false, className = '' }) {
  return (
    <div
      className={`gt-divider-bar ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        margin: '28px 0',
        opacity: inverted ? 0.8 : 1
      }}
    >
      <div style={{ flex: 1, height: '1px', background: '#8F8A84', opacity: 0.55 }} />
      <div style={{ margin: '0 16px', display: 'flex', alignItems: 'center' }}>
        <TibetanVajra width={64} height={22} />
      </div>
      <div style={{ flex: 1, height: '1px', background: '#8F8A84', opacity: 0.55 }} />
    </div>
  );
}

