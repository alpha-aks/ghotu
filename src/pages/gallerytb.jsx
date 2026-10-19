import React, { useState, useEffect, useCallback } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SupportSection from '../components/SupportSection';
import { Eye, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import './gallery.css';

/**
 * GYUTO MONASTERY GALLERY COLLECTION (Tibetan Language)
 */
const GALLERY_ITEMS_TB = [
  {
    id: 'hero',
    isHero: true,
    title: 'དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་དང་དྷོ་ལ་དྷར་ཧི་མ་ལ་ཡའི་རི་རྒྱུད།',
    category: 'monastery',
    categoryLabel: 'དགོན་པ་དང་ཁོར་ཡུག',
    description: 'ཧི་མ་ཅལ་མངའ་སྡེའི་སིདྷ་བཱ་རིར་བཞུགས་པའི་དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་གཟི་བརྗིད་ལྡན་པའི་བཀོད་པ།',
    src: '/images/home-hero.jpg',
    aspect: 'wide'
  },
  {
    id: 'photo-1',
    title: 'འདུ་ཁང་གཙོ་བོའི་སྟོན་པ་ཤཱཀྱ་ཐུབ་པའི་གསེར་སྐུ་དང་མཆོད་གཤམ།',
    category: 'heritage',
    categoryLabel: 'གསང་སྔགས་ཀྱི་སྒྱུ་རྩལ།',
    description: 'འདུ་ཁང་གཙོ་བོའི་ནང་བཞུགས་པའི་བྱིན་རླབས་ཅན་གྱི་སྟོན་པའི་སྐུ་བརྙན་དང་རྩ་གསུམ་ལྷ་ཚོགས།',
    src: '/images/news-hero.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-2',
    title: 'དགེ་འདུན་པ་རྣམས་ཀྱི་གསང་སྔགས་གསུང་ཆོག་དང་སྨོན་ལམ།',
    category: 'rituals',
    categoryLabel: 'ཆོས་ཕྱོགས་ཀྱི་མཛད་རིམ།',
    description: 'ལོ་ངོ་ ༥༠༠ ལྷག་གི་རིང་མ་ཉམས་པར་གནས་པའི་རྒྱུད་སྟོད་པའི་ཐུན་མོང་མ་ཡིན་པའི་དབྱངས་རྟ།',
    src: '/images/departments/departments-hero.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-3',
    title: 'དགེ་འདུན་པ་རྣམས་ཀྱི་ཉིན་རེའི་ཞོགས་ཚོགས།',
    category: 'life',
    categoryLabel: 'དགེ་འདུན་པའི་འཚོ་བ།',
    description: 'ཞོགས་པའི་སྨོན་ལམ་དང་གསུང་ཆོག་ལ་ཕེབས་བཞིན་པའི་དགེ་འདུན་པ་རྣམས།',
    src: '/images/hero-monks.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-4',
    title: 'ཆོས་སྤྱོད་ཀྱི་རོལ་མོ་དང་དུང་ཆེན་འབུད་པ།',
    category: 'rituals',
    categoryLabel: 'ཆོས་ཕྱོགས་ཀྱི་མཛད་རིམ།',
    description: 'ཚོགས་དང་སྒྲུབ་མཆོད་ཀྱི་དབུ་འཛུགས་མཚོན་པའི་དུང་ཆེན་གྱི་སྒྲ་དབྱངས།',
    src: '/images/about/dept-edu.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-5',
    title: 'དགེ་ཕྲུག་རྣམས་ཀྱི་ནང་ཆོས་དང་རིགས་ལམ་སློབ་གཉེར།',
    category: 'life',
    categoryLabel: 'དགེ་འདུན་པའི་འཚོ་བ།',
    description: 'དཔལ་ནཱ་ལེནྡྲའི་བསླབ་པ་སློབ་གཉེར་གྱི་སྲོལ་རྒྱུན་འཛིན་པའི་རིགས་ལམ་རྩོད་པ།',
    src: '/images/monks-education.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-6',
    title: 'དགོན་པའི་གནའ་བོའི་བཟོ་བཀོད་དང་རྒྱ་ཕིབས།',
    category: 'monastery',
    categoryLabel: 'དགོན་པ་དང་ཁོར་ཡུག',
    description: 'བོད་ཀྱི་ཐུན་མིན་བཟོ་རིག་རྩལ་གྱིས་ཕྱུག་པའི་ཆོས་འཁོར་དང་རི་དྭགས་ཀྱི་མཛེས་རྒྱན།',
    src: '/images/about/legacy-complex.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-7',
    title: 'ལོ་རེའི་ཚོགས་མཆོད་ཆེན་མོ་དང་སྒྲུབ་མཆོད།',
    category: 'rituals',
    categoryLabel: 'ཆོས་ཕྱོགས་ཀྱི་མཛད་རིམ།',
    description: 'དཀར་རྒྱན་དང་དམར་རྒྱན་གྱི་གཏོར་མ་གཟབ་གཤོམ་དང་བཅས་པའི་མཆོད་སྤྲིན།',
    src: '/images/programmes/programmes-hero.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-8',
    title: 'ལྷ་ཁང་ནང་མའི་མཆོད་མེ་དང་ལྡེབས་རིས།',
    category: 'heritage',
    categoryLabel: 'གསང་སྔགས་ཀྱི་སྒྱུ་རྩལ།',
    description: 'མ་རིག་མུན་པ་སེལ་བའི་མཚོན་བྱེད་མཆོད་མེའི་འོད་སྣང་རྒྱུན་མི་ཆད་པ།',
    src: '/images/about/legacy-temple.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-9',
    title: 'བོད་ཀྱི་དཔེ་ཆ་དང་ཤིང་དཔར་ཉར་ཚགས།',
    category: 'heritage',
    categoryLabel: 'གསང་སྔགས་ཀྱི་སྒྱུ་རྩལ།',
    description: 'དགེ་ལུགས་སྔགས་ཀྱི་དཔེ་རྙིང་དང་གསུང་འབུམ་ཁག་དཔེ་མཛོད་དུ་ཉར་ཚགས་ལེགས་པར་བྱས་པ།',
    src: '/images/admin-desk.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-10',
    title: 'དགོན་པའི་ཁྱམས་ར་དང་ཧི་མ་ལ་ཡའི་མཛེས་ལྗོངས།',
    category: 'monastery',
    categoryLabel: 'དགོན་པ་དང་ཁོར་ཡུག',
    description: 'ཞི་བདེ་དང་སྙིང་རྗེའི་ཉམས་ལེན་གྱི་གནས་མཆོག་དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་།',
    src: '/images/about/dept-health.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-11',
    title: 'དབུ་མཛད་ཀྱིས་གསང་སྔགས་ཀྱི་དབྱངས་རྟ་འདྲེན་པ།',
    category: 'rituals',
    categoryLabel: 'ཆོས་ཕྱོགས་ཀྱི་མཛད་རིམ།',
    description: 'རྒྱུད་སྟོད་པའི་ཐུན་མོང་མ་ཡིན་པའི་དབྱངས་གདངས་ཀྱིས་ཆོས་དབྱིངས་གསལ་བར་བྱེད་པ།',
    src: '/images/chant-preview.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-12',
    title: 'དགོན་པའི་སྨན་ཁང་དང་སྤྱི་ཚོགས་ཞབས་ཞུ།',
    category: 'life',
    categoryLabel: 'དགེ་འདུན་པའི་འཚོ་བ།',
    description: 'བྱམས་སྙིང་རྗེའི་ཉམས་ལེན་ལས་བྱུང་བའི་སྤྱི་ཚོགས་ཕན་བདེའི་ཞབས་ཞུ།',
    src: '/images/dept-healthcare.jpg',
    aspect: 'square'
  }
];

const CATEGORIES_TB = [
  { key: 'all', label: 'ཚང་མ།' },
  { key: 'monastery', label: 'དགོན་པ་དང་ཁོར་ཡུག' },
  { key: 'rituals', label: 'ཆོས་ཕྱོགས་ཀྱི་མཛད་རིམ།' },
  { key: 'life', label: 'དགེ་འདུན་པའི་འཚོ་བ།' },
  { key: 'heritage', label: 'གསང་སྔགས་ཀྱི་སྒྱུ་རྩལ།' }
];

/**
 * Reusable Image with Skeleton Loading & Smooth Reveal (Tibetan)
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

export default function GalleryTb({ onSwitchLanguage, onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [lightboxLoading, setLightboxLoading] = useState(true);

  const allPhotos = GALLERY_ITEMS_TB;
  const heroPhoto = GALLERY_ITEMS_TB[0];
  const gridPhotos = GALLERY_ITEMS_TB.slice(1).filter(item => {
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

  // Keyboard controls
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
    <div className="gt-gallery-page tibetan-text">
      {/* 1. Header with Tibetan Language & Gallery Active */}
      <Header
        lang="tb"
        active="gallery"
        onSwitchLanguage={onSwitchLanguage}
        onNavigate={onNavigate}
      />

      <main className="gt-gallery-main">
        {/* ====================================================================
            2. MAIN GALLERY SECTION (Figma Frame 1:1862)
            ==================================================================== */}
        <section className="gt-gallery-section">
          <div className="gt-gallery-container">
            {/* Header / Title Area */}
            <div className="gt-gallery-header-wrap">
              <div className="gt-gallery-title-row">
                <h1 className="gt-gallery-title">པར་མཛོད།</h1>
                <p className="gt-gallery-subtitle">
                  དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་དགེ་འདུན་པའི་འཚོ་བ་དང་། གསང་སྔགས་ཀྱི་ཆོས་ཕྱོགས་མཛད་རིམ། དགོན་པའི་གནས་མཆོག་བཅས་ཀྱི་སྐུ་པར་ཕྱོགས་བསྡུས།
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="gt-gallery-filters" role="tablist" aria-label="Photo categories">
                {CATEGORIES_TB.map(cat => {
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

            {/* Featured Hero Banner Photo (Rectangle 18598) */}
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
                  <span className="gt-gallery-hero-badge">དགོན་པའི་གནས་མཆོག</span>
                  <h2 className="gt-gallery-hero-title">{heroPhoto.title}</h2>
                  <p className="gt-gallery-hero-desc">{heroPhoto.description}</p>
                </div>
                <div className="gt-gallery-hero-action" title="Click to view full photo">
                  <Maximize2 size={20} />
                </div>
              </div>
            )}

            {/* 12 Grid Photo Rectangles */}
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
              <div className="gt-attend-text-col">
                <div className="gt-attend-text-block">
                  <h2 className="gt-attend-title">ཞུགས་མི་ལ་ལམ་སྟོན།</h2>
                  <p className="gt-attend-desc">
                    ལས་རིམ་ཁ་ཤས་དགེ་འདུན་པ་རྣམས་ཀྱི་ཆེད་དུ་དམིགས་བསལ་ཡིན་པ་དང་། གཞན་རྣམས་ཆོས་ཞུ་བ་དང་། སྐུ་མགྲོན། སྤྱི་མང་ལ་སྒོ་ཕྱེ་ཡོད།
                  </p>
                  <p className="gt-attend-desc">
                    མ་ཕེབས་གོང་ལས་རིམ་སོ་སོའི་གནས་ཚུལ་ལ་ཞིབ་འཇུག་གནང་རོགས། དུས་ཚོད་དང་། པར་ལེན་ཆོག་མིན། ཞུགས་སྟངས་བཅས་ལས་རིམ་སོ་སོར་མི་འདྲ་བ་ཡོད།
                  </p>
                </div>
                <button
                  type="button"
                  className="gt-attend-contact-btn"
                  onClick={() => onNavigate && onNavigate('contact')}
                >
                  འབྲེལ་གཏུགས།
                </button>
              </div>

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

        {/* 4. SUPPORT THE CONTINUITY OF THE TRADITION */}
        <SupportSection lang="tb" onNavigate={onNavigate} />
      </main>

      {/* 5. FOOTER */}
      <Footer lang="tb" onNavigate={onNavigate} />

      {/* 6. LIGHTBOX */}
      {lightboxIndex !== null && activePhoto && (
        <div
          className="gt-lightbox-backdrop"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
        >
          <button
            type="button"
            className="gt-lightbox-btn-close"
            onClick={closeLightbox}
            title="Close Lightbox (Esc)"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            className="gt-lightbox-btn-nav gt-lightbox-btn-prev"
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            title="Previous (Left Arrow)"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            type="button"
            className="gt-lightbox-btn-nav gt-lightbox-btn-next"
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            title="Next (Right Arrow)"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>

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
