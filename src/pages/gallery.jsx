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
    id: 'gallery-hero',
    isHero: true,
    title: 'Gyuto Tantric Monastery Sanctuary & Himalayan Dhauladhar Range',
    category: 'monastery',
    categoryLabel: 'Monastery & Grounds',
    description: 'Surrounded by pine forests and the sacred peaks of the Dhauladhar range in Sidhbari, Gyuto Monastery stands as a premier seat of the Gelug Tantric lineage.',
    src: '/images/gallery/_DSC3778.jpg',
    aspect: 'wide'
  },
  {
    id: 'photo-1',
    title: 'Monastic Assembly & Morning Chanting Prayers',
    category: 'rituals',
    categoryLabel: 'Sacred Rituals & Chanting',
    description: 'Resident monks gathered in the main assembly hall for sacred morning prayers and continuous recitations.',
    src: '/images/gallery/761A7260.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-2',
    title: 'Novice Monks Engaged in Scriptural Studies',
    category: 'life',
    categoryLabel: 'Monastic Life & Assembly',
    description: 'Preserving the wisdom lineage through diligent study of Buddhist philosophy, root texts, and commentaries.',
    src: '/images/gallery/761A7277.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-3',
    title: 'Traditional Tantric Ritual Instruments (Dungchen)',
    category: 'rituals',
    categoryLabel: 'Sacred Rituals & Chanting',
    description: 'Blowing of ceremonial copper long horns sounding across the Himalayan foothills to signal sacred assemblies.',
    src: '/images/gallery/761A7320.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-4',
    title: 'Philosophical Debate & Dialectics (Tsennyi)',
    category: 'life',
    categoryLabel: 'Monastic Life & Assembly',
    description: 'Monks testing logical discernment in the debate courtyard through ancient analytical inquiry.',
    src: '/images/gallery/761A7394.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-5',
    title: 'Scholastic Dialectics in the Courtyard',
    category: 'life',
    categoryLabel: 'Monastic Life & Assembly',
    description: 'Animated exchange of philosophical points demonstrating mastery of Madhyamaka and Pramana logic.',
    src: '/images/gallery/761A7401.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-6',
    title: 'Rigorous Buddhist Dialectical Exegesis',
    category: 'life',
    categoryLabel: 'Monastic Life & Assembly',
    description: 'Standing debaters presenting philosophical queries with traditional clapping gestures and reasoning.',
    src: '/images/gallery/761A7402.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-7',
    title: 'Traditional Debate Gestures & Clapping',
    category: 'life',
    categoryLabel: 'Monastic Life & Assembly',
    description: 'The iconic right-hand clap upon the left palm symbolizing the union of wisdom and compassionate skillful means.',
    src: '/images/gallery/761A7411.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-8',
    title: 'Intensive Scriptural Recitation & Memorization',
    category: 'life',
    categoryLabel: 'Monastic Life & Assembly',
    description: 'Monks memorizing profound tantric treatises and sadhana liturgical texts.',
    src: '/images/gallery/761A7436.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-9',
    title: 'Tsuklakhang Main Temple Courtyard Gathering',
    category: 'monastery',
    categoryLabel: 'Monastery & Grounds',
    description: 'Monks congregated on the temple terrace under the shadow of the temple spires and golden finials.',
    src: '/images/gallery/761A7445.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-10',
    title: 'Senior Geshes and Masters Presiding over Assembly',
    category: 'rituals',
    categoryLabel: 'Sacred Rituals & Chanting',
    description: 'Senior lamas leading the community in elaborate tantric rites and meditation practices.',
    src: '/images/gallery/761A7459.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-11',
    title: 'Sacred Tantric Chanting & Ritual Bell Recitation',
    category: 'rituals',
    categoryLabel: 'Sacred Rituals & Chanting',
    description: 'Holding the vajra and ghanta (bell) while chanting the esoteric mandalas of Guhyasamaja, Chakrasamvara, and Yamantaka.',
    src: '/images/gallery/761A7469.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-12',
    title: 'Sacred Butter Sculptures (Torma) & Ceremonial Offerings',
    category: 'heritage',
    categoryLabel: 'Tantric Arts & Heritage',
    description: 'Exquisitely crafted colored butter sculptures prepared with devotion for annual prayer pujas.',
    src: '/images/gallery/761A7611.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-13',
    title: 'Ritual Mandala and Altar Preparations',
    category: 'heritage',
    categoryLabel: 'Tantric Arts & Heritage',
    description: 'Meticulous traditional mandala craft and holy shrine offerings embodying ancient sacred proportions.',
    src: '/images/gallery/761A7636.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-14',
    title: 'Traditional Monastic Butter Tea Service',
    category: 'life',
    categoryLabel: 'Monastic Life & Assembly',
    description: 'Monks serving hot Tibetan butter tea during intermission between intensive liturgical prayer sessions.',
    src: '/images/gallery/761A7672.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-15',
    title: 'Monastic Fellowship & Community Life',
    category: 'life',
    categoryLabel: 'Monastic Life & Assembly',
    description: 'The warmth, harmony, and dedicated daily companionship shared among the monastic Sangha.',
    src: '/images/gallery/761A7675.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-16',
    title: 'Golden Shakyamuni Buddha in Main Temple Sanctum',
    category: 'heritage',
    categoryLabel: 'Tantric Arts & Heritage',
    description: 'The serene and majestic central Buddha image radiating blessings inside the main Tsuklakhang sanctum.',
    src: '/images/gallery/761A7705.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-17',
    title: 'Sacred Lineage Deities & Tantric Murals',
    category: 'heritage',
    categoryLabel: 'Tantric Arts & Heritage',
    description: 'Traditional Tibetan wall frescoes and sacred iconography adorning the interior sanctuary walls.',
    src: '/images/gallery/761A7724.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-18',
    title: 'Golden Wheel of Dharma & Kneeling Deer Emblem',
    category: 'heritage',
    categoryLabel: 'Tantric Arts & Heritage',
    description: 'The golden Dharmachakra flanked by two deer atop the monastery roof, symbolizing the first turning of the Wheel of Dharma.',
    src: '/images/gallery/761A7725.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-19',
    title: 'Evening Butter Lamp Illuminations & Circumambulation',
    category: 'rituals',
    categoryLabel: 'Sacred Rituals & Chanting',
    description: 'Luminous butter lamps glowing at dusk along the sacred circumambulation kora path.',
    src: '/images/gallery/761A8107.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-20',
    title: 'Monastic Residence & Serene Garden Grounds',
    category: 'monastery',
    categoryLabel: 'Monastery & Grounds',
    description: 'Peaceful quarters and floral gardens nestled in the quiet Himalayan mountain surroundings.',
    src: '/images/gallery/IMG_6082.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-21',
    title: 'Panoramic View of Gyuto Tantric Monastery Complex',
    category: 'monastery',
    categoryLabel: 'Monastery & Grounds',
    description: 'Grand overview of the monastic complex in Sidhbari, Dharamshala against the lush Himalayan backdrop.',
    src: '/images/gallery/PNT_PHOTOGRAPHY-106.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-22',
    title: 'Sacred Inner Shrine Room & Altar Lamps',
    category: 'heritage',
    categoryLabel: 'Tantric Arts & Heritage',
    description: 'Quiet meditative inner shrine illuminated by traditional silver and brass butter lamps.',
    src: '/images/gallery/PNT_PHOTOGRAPHY-109.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-23',
    title: 'Scriptural Archives & Pecha Manuscripts Library',
    category: 'heritage',
    categoryLabel: 'Tantric Arts & Heritage',
    description: 'Preserving rare Tibetan Buddhist pechas, woodblock prints, and tantric commentaries for future generations.',
    src: '/images/gallery/PNT_PHOTOGRAPHY-63.jpg',
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

/**
 * Reusable Image with Skeleton Loading & Smooth Reveal
 */
function ImageWithSkeleton({
  src,
  alt,
  imgClassName = '',
  isHero = false,
  loading = 'lazy'
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`gt-img-skeleton-box ${isHero ? 'is-hero' : ''} ${isLoaded ? 'is-loaded' : 'is-loading'}`}>
      {!isLoaded && (
        <div className="gt-skeleton-shimmer" aria-hidden="true">
          <div className="gt-skeleton-glow" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${imgClassName} ${isLoaded ? 'gt-img-revealed' : 'gt-img-hidden'}`}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}

export default function Gallery({ onSwitchLanguage, onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [lightboxLoading, setLightboxLoading] = useState(true);

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
    if (idx !== -1) {
      setLightboxLoading(true);
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxLoading(true);
    setLightboxIndex((prev) => (prev + 1) % allPhotos.length);
  }, [lightboxIndex, allPhotos.length]);

  const prevPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxLoading(true);
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

  // Reset lightbox loading when active photo changes
  useEffect(() => {
    if (activePhoto) {
      setLightboxLoading(true);
    }
  }, [activePhoto?.id]);

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
                <ImageWithSkeleton
                  src={heroPhoto.src}
                  alt={heroPhoto.title}
                  imgClassName="gt-gallery-hero-img"
                  isHero={true}
                  loading="eager"
                />
                <div className="gt-gallery-hero-overlay">
                  <span className="gt-gallery-hero-badge">Featured Sanctuary</span>
                  <h2 className="gt-gallery-hero-title">{heroPhoto.title}</h2>
                </div>
                <div className="gt-gallery-hero-action" title="Click to view full photo">
                  <Maximize2 size={20} />
                </div>
              </div>
            )}

            {/* 12 Grid Photo Rectangles (3 columns x 4 rows) */}
            <div className="gt-gallery-grid">
              {gridPhotos.map((item, index) => (
                <div
                  key={item.id}
                  className="gt-gallery-item-wrap"
                  style={{ '--item-idx': index }}
                >
                  <div
                    className="gt-gallery-item-card"
                    onClick={() => openLightbox(item.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(item.id); }}
                    aria-label={`Open photo: ${item.title}`}
                  >
                    <ImageWithSkeleton
                      src={item.src}
                      alt={item.title}
                      imgClassName="gt-gallery-item-img"
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
                      src="/images/programmes/programmes-map.png"
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
              {lightboxLoading && (
                <div className="gt-lightbox-skeleton-loader" aria-hidden="true">
                  <div className="gt-lightbox-spinner" />
                </div>
              )}
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className={`gt-lightbox-img ${lightboxLoading ? 'gt-img-hidden' : 'gt-img-revealed'}`}
                onLoad={() => setLightboxLoading(false)}
              />
            </div>
            <div className="gt-lightbox-footer">
              <div className="gt-lightbox-info">
                <h3 className="gt-lightbox-title">{activePhoto.title}</h3>
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
