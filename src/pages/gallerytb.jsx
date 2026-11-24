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
    id: 'gallery-hero',
    isHero: true,
    title: 'དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་དང་དྷོ་ལ་དྷར་ཧི་མ་ལ་ཡའི་རི་རྒྱུད།',
    category: 'monastery',
    categoryLabel: 'དགོན་པ་དང་ཁོར་ཡུག',
    description: 'ཧི་མ་ཅལ་མངའ་སྡེའི་སིདྷ་བཱ་རིར་བཞུགས་པའི་དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་གཟི་བརྗིད་ལྡན་པའི་བཀོད་པ།',
    src: '/images/gallery/_DSC3778.jpg',
    aspect: 'wide'
  },
  {
    id: 'photo-1',
    title: 'འདུ་ཁང་ཆེན་མོར་དགེ་འདུན་འདུས་པའི་ཞོགས་ཚོགས།',
    category: 'rituals',
    categoryLabel: 'ཆོས་ཕྱོགས་ཀྱི་མཛད་རིམ།',
    description: 'འདུ་ཁང་གཙོ་བོའི་ནང་ཞོགས་པའི་སྨོན་ལམ་དང་གསུང་ཆོག་གནང་བཞིན་པའི་དགེ་འདུན་པ་རྣམས།',
    src: '/images/gallery/761A7260.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-2',
    title: 'དགེ་ཕྲུག་རྣམས་ཀྱི་གཞུང་ཆེན་སློབ་གཉེར།',
    category: 'life',
    categoryLabel: 'དགེ་འདུན་པའི་འཚོ་བ།',
    description: 'ནང་ཆོས་ཀྱི་གཞུང་ལུགས་ལ་གསན་བསམ་སློབ་གཉེར་གནང་བཞིན་པའི་དགེ་ཕྲུག་རྣམས།',
    src: '/images/gallery/761A7277.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-3',
    title: 'ཆོས་སྤྱོད་ཀྱི་རོལ་མོ་དང་དུང་ཆེན་འབུད་པ།',
    category: 'rituals',
    categoryLabel: 'ཆོས་ཕྱོགས་ཀྱི་མཛད་རིམ།',
    description: 'ཚོགས་དང་སྒྲུབ་མཆོད་ཀྱི་དབུ་འཛུགས་མཚོན་པའི་དུང་ཆེན་གྱི་སྒྲ་དབྱངས།',
    src: '/images/gallery/761A7320.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-4',
    title: 'ཆོས་རྭ་ཆེན་མོར་རིགས་ལམ་རྩོད་པ།',
    category: 'life',
    categoryLabel: 'དགེ་འདུན་པའི་འཚོ་བ།',
    description: 'དཔལ་ནཱ་ལེནྡྲའི་བསླབ་པ་སློབ་གཉེར་གྱི་སྲོལ་རྒྱུན་འཛིན་པའི་རིགས་ལམ་རྩོད་པ།',
    src: '/images/gallery/761A7394.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-5',
    title: 'དགེ་འདུན་པ་རྣམས་ཀྱི་བགྲོ་གླེང་དང་དྲི་བརྡར།',
    category: 'life',
    categoryLabel: 'དགེ་འདུན་པའི་འཚོ་བ།',
    description: 'དབུ་ཚད་ཕར་ཕྱིན་གྱི་གཞུང་ལ་བགྲོ་གླེང་གནང་བཞིན་པ།',
    src: '/images/gallery/761A7401.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-6',
    title: 'གཞུང་ཆེན་རིགས་པའི་ལམ་ནས་དཔྱད་ཞིབ།',
    category: 'life',
    categoryLabel: 'དགེ་འདུན་པའི་འཚོ་བ།',
    description: 'དྲི་བ་འདེབས་མཁན་དང་ལན་འདེབས་མཁན་གྱི་རྩོད་པའི་རྣམ་པ།',
    src: '/images/gallery/761A7402.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-7',
    title: 'རྩོད་པའི་ཐལ་མོ་རྡེབ་པའི་ཕྱག་རྒྱ།',
    category: 'life',
    categoryLabel: 'དགེ་འདུན་པའི་འཚོ་བ།',
    description: 'ཐབས་དང་ཤེས་རབ་ཟུང་འབྲེལ་མཚོན་པའི་རྩོད་པའི་ཐལ་མོ།',
    src: '/images/gallery/761A7411.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-8',
    title: 'དཔེ་ཀློག་དང་བློ་འཛིན་གྱི་སྦྱོང་བརྡར།',
    category: 'life',
    categoryLabel: 'དགེ་འདུན་པའི་འཚོ་བ།',
    description: 'གསང་སྔགས་ཀྱི་ཆོ་ག་ཕྱག་ལེན་དང་གཞུང་ཆེན་བློ་འཛིན་གནང་བ།',
    src: '/images/gallery/761A7436.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-9',
    title: 'གཙུག་ལག་ཁང་གི་ཁྱམས་རའི་མདུན་ལྗོངས།',
    category: 'monastery',
    categoryLabel: 'དགོན་པ་དང་ཁོར་ཡུག',
    description: 'གཙུག་ལག་ཁང་གི་སྒོ་འགྲམ་དུ་དགེ་འདུན་པ་རྣམས་བཞུགས་པའི་རྣམ་པ།',
    src: '/images/gallery/761A7445.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-10',
    title: 'དགེ་བཤེས་དང་བླ་མ་རྣམས་ཀྱིས་དབུ་བཞུགས་གནང་བ།',
    category: 'rituals',
    categoryLabel: 'ཆོས་ཕྱོགས་ཀྱི་མཛད་རིམ།',
    description: 'ཆོས་ཕྱོགས་ཀྱི་མཛད་སྒོ་ཆེན་མོར་དབུ་བཞུགས་གནང་བཞིན་པའི་བླ་སྤྲུལ་རྣམས།',
    src: '/images/gallery/761A7459.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-11',
    title: 'རྡོ་རྗེ་དྲིལ་བུ་བསྣམས་པའི་གསང་སྔགས་གསུང་ཆོག',
    category: 'rituals',
    categoryLabel: 'ཆོས་ཕྱོགས་ཀྱི་མཛད་རིམ།',
    description: 'རྒྱུད་སྟོད་པའི་ཐུན་མིན་གསང་བདེ་འཇིགས་གསུམ་གྱི་ཆོ་ག་ཕྱག་ལེན།',
    src: '/images/gallery/761A7469.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-12',
    title: 'དཀར་རྒྱན་དམར་རྒྱན་གྱི་གཏོར་མ་བཤམས་པ།',
    category: 'heritage',
    categoryLabel: 'གསང་སྔགས་ཀྱི་སྒྱུ་རྩལ།',
    description: 'མར་ཚོན་གྱིས་བཟོས་པའི་རྩེ་ཕྲའི་མཆོད་གཏོར་དང་མཆོད་རྫས།',
    src: '/images/gallery/761A7611.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-13',
    title: 'དཀྱིལ་འཁོར་དང་མཆོད་གཤོམ་བཀོད་པ།',
    category: 'heritage',
    categoryLabel: 'གསང་སྔགས་ཀྱི་སྒྱུ་རྩལ།',
    description: 'དཀྱིལ་འཁོར་གྱི་ཐིག་རྩ་དང་མཆོད་རྫས་སྒྲིག་བཀོད་ལེགས་པར་བྱས་པ།',
    src: '/images/gallery/761A7636.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-14',
    title: 'དགོན་པའི་གསོལ་ཇ་བཞེས་བཞིན་པའི་དགེ་འདུན་པ།',
    category: 'life',
    categoryLabel: 'དགེ་འདུན་པའི་འཚོ་བ།',
    description: 'ཆོས་མཚམས་སུ་དགོན་པའི་སྲོལ་རྒྱུན་བོད་ཇ་བཞེས་པའི་རྣམ་པ།',
    src: '/images/gallery/761A7672.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-15',
    title: 'དགེ་འདུན་འདུས་པའི་མཐུན་ལམ་དང་མཉམ་གནས།',
    category: 'life',
    categoryLabel: 'དགེ་འདུན་པའི་འཚོ་བ།',
    description: 'དམ་ཚིག་གཙང་མའི་དགེ་འདུན་པའི་ཉིན་རེའི་འཚོ་བའི་རྣམ་པ།',
    src: '/images/gallery/761A7675.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-16',
    title: 'འདུ་ཁང་ནང་གི་སྟོན་པ་ཤཱཀྱ་ཐུབ་པའི་གསེར་སྐུ།',
    category: 'heritage',
    categoryLabel: 'གསང་སྔགས་ཀྱི་སྒྱུ་རྩལ།',
    description: 'གཙུག་ལག་ཁང་གཙོ་བོའི་ནང་བཞུགས་པའི་བྱིན་རླབས་ཅན་གྱི་སྟོན་པའི་སྐུ་བརྙན།',
    src: '/images/gallery/761A7705.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-17',
    title: 'བཀའ་བརྒྱུད་བླ་བརྒྱུད་ཀྱི་ལྡེབས་རིས་དང་ཐང་ག',
    category: 'heritage',
    categoryLabel: 'གསང་སྔགས་ཀྱི་སྒྱུ་རྩལ།',
    description: 'འདུ་ཁང་གི་གྱང་ལྡེབས་སུ་བཀོད་པའི་གསང་ཆེན་རྒྱུད་སྡེའི་ལྷ་ཚོགས་ཀྱི་ལྡེབས་རིས།',
    src: '/images/gallery/761A7724.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-18',
    title: 'རྒྱ་ཕིབས་ཀྱི་ཆོས་འཁོར་དང་རི་དྭགས་ཕོ་མོ།',
    category: 'heritage',
    categoryLabel: 'གསང་སྔགས་ཀྱི་སྒྱུ་རྩལ།',
    description: 'དགོན་པའི་རྒྱ་ཕིབས་སྟེང་གི་གསེར་ཟངས་ཀྱི་ཆོས་འཁོར་དང་རི་དྭགས།',
    src: '/images/gallery/761A7725.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-19',
    title: 'དགོང་མོའི་མཆོད་མེ་དང་སྐོར་ལམ།',
    category: 'rituals',
    categoryLabel: 'ཆོས་ཕྱོགས་ཀྱི་མཛད་རིམ།',
    description: 'ས་སྲོད་དུས་སུ་མཆོད་མེའི་འོད་སྣང་འབར་བའི་དགོན་པའི་སྐོར་ལམ།',
    src: '/images/gallery/761A8107.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-20',
    title: 'གྲྭ་ཤག་དང་མེ་ཏོག་ལྡུམ་རའི་མཛེས་ལྗོངས།',
    category: 'monastery',
    categoryLabel: 'དགོན་པ་དང་ཁོར་ཡུག',
    description: 'དྷ་རམ་ས་ལཱའི་རི་འདབས་ཀྱི་ཞི་བདེ་ལྡན་པའི་གྲྭ་ཤག་དང་ར་བ།',
    src: '/images/gallery/IMG_6082.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-21',
    title: 'དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་ཀུན་གཟིགས་མཐོང་སྣང་།',
    category: 'monastery',
    categoryLabel: 'དགོན་པ་དང་ཁོར་ཡུག',
    description: 'སིདྷ་བཱ་རིར་བཞུགས་པའི་དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་ཡུལ་ལྗོངས་ཡོངས་རྫོགས།',
    src: '/images/gallery/PNT_PHOTOGRAPHY-106.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-22',
    title: 'ལྷ་ཁང་ནང་མའི་མཆོད་མེ་དང་མཆོད་གཤམ།',
    category: 'heritage',
    categoryLabel: 'གསང་སྔགས་ཀྱི་སྒྱུ་རྩལ།',
    description: 'ཏིང་ངེ་འཛིན་སྒྲུབ་པའི་ལྷ་ཁང་ནང་གི་མཆོད་མེའི་འོད་སྣང་།',
    src: '/images/gallery/PNT_PHOTOGRAPHY-109.jpg',
    aspect: 'square'
  },
  {
    id: 'photo-23',
    title: 'དཔེ་མཛོད་ཁང་གི་ཤིང་དཔར་དང་དཔེ་ཆ་ཉར་ཚགས།',
    category: 'heritage',
    categoryLabel: 'གསང་སྔགས་ཀྱི་སྒྱུ་རྩལ།',
    description: 'དགེ་ལྡན་སྔགས་ཀྱི་གཞུང་ལུགས་དང་གསུང་འབུམ་ཉར་ཚགས་གནང་བའི་དཔེ་མཛོད།',
    src: '/images/gallery/PNT_PHOTOGRAPHY-63.jpg',
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
                aria-label="View featured photo"
              >
                <ImageWithSkeleton
                  src={heroPhoto.src}
                  alt={heroPhoto.title}
                  imgClassName="gt-gallery-hero-img"
                  isHero={true}
                  loading="eager"
                />
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
                    aria-label="Open photo"
                  >
                    <ImageWithSkeleton
                      src={item.src}
                      alt=""
                      imgClassName="gt-gallery-item-img"
                      loading="lazy"
                    />
                    <div className="gt-gallery-item-overlay">
                      <div className="gt-gallery-item-zoom-icon">
                        <Eye size={20} />
                      </div>
                    </div>
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
