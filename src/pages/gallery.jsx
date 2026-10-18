import React, { useState, useEffect, useCallback } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SupportSection from '../components/SupportSection';
import { Eye, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import './gallery.css';

/**
 * GYUTO MONASTERY GALLERY COLLECTION
 * Featured Hero + 12 High-Res Grid Photos matching Figma 1:1862 layout
 */
const GALLERY_ITEMS = [
  {
    id: 'hero',
    isHero: true,
    title: 'Gyuto Tantric Monastery Sanctuary & Himalayan Dhauladhar Range',
    category: 'monastery',
    categoryLabel: 'Monastery & Grounds',
    description: 'Surrounded by the pine forests and snow-capped peaks of Sidhbari, Dharamshala, Gyuto Monastery stands as a premier seat of the Gelug Tantric lineage.',
    src: '/images/homepagebanner.jpg',
    aspect: 'wide'
  },
  {
    id: 'photo-1',
    title: 'Main Prayer Hall (Dukhang) Golden Statues & Sacred Altar',
    category: 'heritage',
    categoryLabel: 'Tantric Arts & Heritage',
    description: 'The monumental Shakyamuni Buddha and lineage deities housed within the grand temple sanctum.',
    src: '/images/fe0aad809007f1da6b0ce01ba90bb260a5398ef3.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-2',
    title: 'Monks in Assembly during Deep Chanting & Tantric Chod Rituals',
    category: 'rituals',
    categoryLabel: 'Sacred Rituals & Chanting',
    description: 'The unique deep-throat overtone chanting resonance preserved faithfully for over 500 years since 1474.',
    src: '/images/b04b5d7f35d624ff9102de32aef1c84495911838.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-3',
    title: 'Monastic Brotherhood & Daily Morning Gathering',
    category: 'life',
    categoryLabel: 'Monastic Life & Assembly',
    description: 'Resident monks and lamas congregated in traditional maroon woolen robes before sacred morning prayers.',
    src: '/images/hero-monks.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-4',
    title: 'Traditional Tantric Instruments & Ritual Horns (Dungchen)',
    category: 'rituals',
    categoryLabel: 'Sacred Rituals & Chanting',
    description: 'Blowing of sacred ceremonial long horns announcing the commencement of tantric pujas and meditations.',
    src: '/images/f9d689f8bd2de48c9b1ad48eca6a30192f40c07a.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-5',
    title: 'Young Novice Monks in Buddhist Philosophy & Dialectics',
    category: 'life',
    categoryLabel: 'Monastic Life & Assembly',
    description: 'Preserving the intellectual rigor of ancient Nalanda through rigorous logic, debate, and foundational textual studies.',
    src: '/images/monks-education.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-6',
    title: 'Monastery Architecture & Traditional Tibetan Pagoda Roofs',
    category: 'monastery',
    categoryLabel: 'Monastery & Grounds',
    description: 'Exquisite Tibetan architectural motifs, golden deer and wheel of dharma ornaments adorning the temple spires.',
    src: '/images/about/legacy-complex.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-7',
    title: 'Grand Tsok Offering & Annual Monastic Prayer Festival',
    category: 'rituals',
    categoryLabel: 'Sacred Rituals & Chanting',
    description: 'Elaborate ritual tormas, butter sculptures, and sacred offerings prepared with utmost devotion and precision.',
    src: '/images/d594bef9060cd9ba9ae4f54484b4984234ba0ffe.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-8',
    title: 'Sacred Inner Shrine Room with Butter Lamps & Murals',
    category: 'heritage',
    categoryLabel: 'Tantric Arts & Heritage',
    description: 'Continuous butter lamp flames burning as luminous symbols of wisdom dispelling the darkness of ignorance.',
    src: '/images/about/legacy-temple.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-9',
    title: 'Preservation of Sacred Woodblock Texts & Manuscripts',
    category: 'heritage',
    categoryLabel: 'Tantric Arts & Heritage',
    description: 'Centuries-old Buddhist scriptures, pecha texts, and tantric commentaries meticulously preserved in the monastic library.',
    src: '/images/admin-desk.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-10',
    title: 'Monastery Courtyard under Himalayan Skies',
    category: 'monastery',
    categoryLabel: 'Monastery & Grounds',
    description: 'Peaceful pathways where monks, scholars, and visiting practitioners reflect upon impermanence and compassion.',
    src: '/images/e1cfc47bbf22f670089f57ec652369ff61c5b791.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-11',
    title: 'Tantric Master Leading the Low-Tone Chanting Resonance',
    category: 'rituals',
    categoryLabel: 'Sacred Rituals & Chanting',
    description: 'The Umdze (Chant Master) guiding the monastery assembly in the esoteric chordal vocalizations of Gyuto.',
    src: '/images/chant-preview.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-12',
    title: 'Community Care & Tibetan Medicine Dispensary at Gyuto',
    category: 'life',
    categoryLabel: 'Monastic Life & Assembly',
    description: 'Extending loving-kindness into practical social action, healthcare assistance, and community welfare.',
    src: '/images/healthcare.jpg',
    aspect: 'square'
  }
];

const CATEGORIES = [
  { key: 'all', label: 'All Photos' },
  { key: 'monastery', label: 'Monastery & Grounds' },
  { key: 'rituals', label: 'Sacred Rituals & Chanting' },
  { key: 'life', label: 'Monastic Life & Assembly' },
  { key: 'heritage', label: 'Tantric Arts & Heritage' }
];

export default function Gallery({ onSwitchLanguage, onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // All photos including hero for lightbox sequence
  const allPhotos = GALLERY_ITEMS;

  // Filtered grid photos (excluding hero if filtered by category or keep hero accessible)
  const heroPhoto = GALLERY_ITEMS[0];
  const gridPhotos = GALLERY_ITEMS.slice(1).filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const openLightbox = (id) => {
    const idx = allPhotos.findIndex(item => item.id === id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev + 1) % allPhotos.length);
  }, [lightboxIndex, allPhotos.length]);

  const prevPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev - 1 + allPhotos.length) % allPhotos.length);
  }, [lightboxIndex, allPhotos.length]);

  // Keyboard controls for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextPhoto, prevPhoto]);

  // Disable background scrolling when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [lightboxIndex]);

  const activePhoto = lightboxIndex !== null ? allPhotos[lightboxIndex] : null;

  return (
    <div className="gt-gallery-page">
      {/* 1. Header with 'GALLERY' Active */}
      <Header
        lang="en"
        active="gallery"
        onSwitchLanguage={onSwitchLanguage}
        onNavigate={onNavigate}
      />

      <main className="gt-gallery-main">
        {/* ====================================================================
            2. MAIN GALLERY CONTENT (Figma Frame 1:1862)
            ==================================================================== */}
        <section className="gt-gallery-section">
          <div className="gt-gallery-container">
            {/* Header / Title Area */}
            <div className="gt-gallery-header-wrap">
              <div className="gt-gallery-title-row">
                <h1 className="gt-gallery-title">Photo Gallery</h1>
                <p className="gt-gallery-subtitle">
                  Visual reflections of monastic life, sacred tantric rituals, grand spiritual festivals, and the historic sanctuary of Gyuto Tantric Monastery in the Himalayas.
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="gt-gallery-filters" role="tablist" aria-label="Photo categories">
                {CATEGORIES.map(cat => {
                  const count = cat.key === 'all'
                    ? allPhotos.length
                    : allPhotos.filter(p => p.category === cat.key).length;
                  return (
                    <button
                      key={cat.key}
                      role="tab"
                      aria-selected={activeCategory === cat.key}
                      className={`gt-gallery-filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
                      onClick={() => setActiveCategory(cat.key)}
                    >
                      <span>{cat.label}</span>
                      <span className="gt-gallery-filter-count">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Featured Hero Banner Photo (Rectangle 18598: 1280px x 659px) */}
            {(activeCategory === 'all' || activeCategory === heroPhoto.category) && (
              <div
                className="gt-gallery-hero-card"
                onClick={() => openLightbox(heroPhoto.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(heroPhoto.id); }}
                aria-label={`View photo: ${heroPhoto.title}`}
              >
                <img
                  src={heroPhoto.src}
                  alt={heroPhoto.title}
                  className="gt-gallery-hero-img"
                  loading="eager"
                />
                <div className="gt-gallery-hero-overlay">
                  <span className="gt-gallery-hero-badge">Featured Sanctuary</span>
                  <h2 className="gt-gallery-hero-title">{heroPhoto.title}</h2>
                  <p className="gt-gallery-hero-desc">{heroPhoto.description}</p>
                </div>
                <div className="gt-gallery-hero-action" title="Click to view full photo">
                  <Maximize2 size={20} />
                </div>
              </div>
            )}

            {/* 12 Grid Photo Rectangles (3 columns x 4 rows) */}
            <div className="gt-gallery-grid">
              {gridPhotos.map((item) => (
                <div key={item.id} className="gt-gallery-item-wrap">
                  <div
                    className="gt-gallery-item-card"
                    onClick={() => openLightbox(item.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(item.id); }}
                    aria-label={`Open photo: ${item.title}`}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="gt-gallery-item-img"
                      loading="lazy"
                    />
                    <div className="gt-gallery-item-overlay">
                      <div className="gt-gallery-item-top">
                        <span className="gt-gallery-item-tag">{item.categoryLabel}</span>
                        <div className="gt-gallery-item-zoom-icon">
                          <Eye size={18} />
                        </div>
                      </div>
                      <div className="gt-gallery-item-meta">
                        <h3 className="gt-gallery-item-title">{item.title}</h3>
                        <p className="gt-gallery-item-caption">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Caption below image */}
                  <div className="gt-gallery-caption-below">
                    <p className="gt-gallery-caption-below-category">{item.categoryLabel}</p>
                    <h3 className="gt-gallery-caption-below-title">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            3. BEFORE YOU ATTEND SECTION (Figma Frame 625811: #FFD781)
            ==================================================================== */}
        <section className="gt-attend-section">
          <div className="gt-attend-container">
            <div className="gt-attend-grid">
              {/* Left Column: Text & Button (Figma Frame 625782) */}
              <div className="gt-attend-text-col">
                <div className="gt-attend-text-block">
                  <h2 className="gt-attend-title">Before You Attend</h2>
                  <p className="gt-attend-desc">
                    Some programmes are intended exclusively for the monastic community, while others may be open to practitioners, visitors, or the wider public.
                  </p>
                  <p className="gt-attend-desc">
                    Please check the individual programme details before attending. Access, timings, photography, participation, and visitor requirements may vary between events.
                  </p>
                </div>
                <button
                  type="button"
                  className="gt-attend-contact-btn"
                  onClick={() => onNavigate && onNavigate('contact')}
                >
                  CONTACT US
                </button>
              </div>

              {/* Right Column: Google Maps Card of Gyuto Tantric Monastery */}
              <div className="gt-attend-map-col">
                <div className="gt-attend-map-card">
                  <a
                    href="https://maps.google.com/?q=Gyuto+Tantric+Monastery+Sidhbari+Dharamshala"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open Gyuto Tantric Monastery in Google Maps"
                  >
                    <img
                      src="/images/gyuto-maps-location-real.png"
                      alt="Google Map showing Gyuto Tantric Monastery in Sidhbari, Dharamshala"
                      className="gt-attend-map-img"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            4. SUPPORT THE CONTINUITY OF THE TRADITION (Universal Frame 625810)
            ==================================================================== */}
        <SupportSection lang="en" onNavigate={onNavigate} />
      </main>

      {/* 5. FOOTER */}
      <Footer lang="en" onNavigate={onNavigate} />

      {/* ====================================================================
          6. ACCESSIBLE LIGHTBOX MODAL
          ==================================================================== */}
      {lightboxIndex !== null && activePhoto && (
        <div
          className="gt-lightbox-backdrop"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
        >
          {/* Close Button */}
          <button
            type="button"
            className="gt-lightbox-btn-close"
            onClick={closeLightbox}
            title="Close Lightbox (Esc)"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {/* Previous Button */}
          <button
            type="button"
            className="gt-lightbox-btn-nav gt-lightbox-btn-prev"
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            title="Previous Photo (Left Arrow)"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next Button */}
          <button
            type="button"
            className="gt-lightbox-btn-nav gt-lightbox-btn-next"
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            title="Next Photo (Right Arrow)"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>

          {/* Lightbox Dialog Content */}
          <div className="gt-lightbox-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="gt-lightbox-img-wrap">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="gt-lightbox-img"
              />
            </div>
            <div className="gt-lightbox-footer">
              <div className="gt-lightbox-info">
                <h3 className="gt-lightbox-title">{activePhoto.title}</h3>
                <p className="gt-lightbox-caption">{activePhoto.description}</p>
              </div>
              <div className="gt-lightbox-counter">
                {lightboxIndex + 1} / {allPhotos.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
