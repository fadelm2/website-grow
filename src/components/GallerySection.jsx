import React, { useState, useEffect, useCallback } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, X, Maximize2, ArrowRight } from 'lucide-react';

export const GallerySection = ({ images = [], guildInfo }) => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const handleOpen = (idx) => {
    setSelectedIdx(idx);
  };

  const handleClose = useCallback(() => {
    setSelectedIdx(null);
  }, []);

  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, handleClose, handlePrev, handleNext]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedIdx]);

  return (
    <section id="gallery" className="section-padding relative overflow-hidden bg-black/90">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title animate-fade-in-up">
            Grand Chase <span className="text-gradient-gold">Gallery</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl animate-fade-in-up animation-delay-200">
            Jelajahi keindahan dunia Aernas, aksi pertempuran epik, dan momen kebersamaan Guild GROW.
          </p>
        </div>

        {/* 6 Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((item, idx) => (
            <Card
              key={item.id || idx}
              onClick={() => handleOpen(idx)}
              className="card-glass group relative overflow-hidden rounded-2xl border border-purple-500/30 hover:border-yellow-400/60 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-purple-900/40 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              {/* Image Container */}
              <div className="aspect-video w-full overflow-hidden relative bg-purple-950/40">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-900/80 text-purple-200 border border-purple-400/30 backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                {/* Quick Zoom Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  <div className="p-2 rounded-full bg-black/60 border border-yellow-400/40 text-yellow-300 backdrop-blur-md">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                </div>

                {/* Bottom Content on Card */}
                <div className="absolute bottom-0 inset-x-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold text-white group-hover:text-yellow-300 transition-colors duration-200 drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-1 mt-1 opacity-80 group-hover:opacity-100">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Facebook Link & Call-to-Action Bar */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="card-glass p-6 md:p-8 rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-950/40 via-black/60 to-purple-950/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-bold text-gradient-gold mb-1">
                Koleksi & Kegiatan Komunitas di Facebook
              </h4>
              <p className="text-sm text-gray-400">
                Temukan screenshot raid terbaru, keseruan member, dan update event kami di Facebook!
              </p>
            </div>

            <Button
              size="lg"
              className="btn-primary-large whitespace-nowrap flex items-center gap-2 group px-6 py-3 cursor-pointer"
              onClick={() => window.open(guildInfo?.facebookLink || 'https://www.facebook.com', '_blank')}
            >
              {/* Facebook Icon */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Lihat di Facebook</span>
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1.5 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox / Modal with Interactive Navigation Arrows */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={handleClose}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            aria-label="Tutup Galeri"
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-black/70 hover:bg-purple-900/80 text-gray-300 hover:text-white border border-purple-500/40 hover:border-yellow-400 transition-all duration-200 shadow-lg cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrev}
            aria-label="Foto Sebelumnya"
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 md:p-4 rounded-full bg-black/70 hover:bg-purple-900/90 text-yellow-300 hover:text-yellow-200 border border-purple-500/50 hover:border-yellow-400 hover:scale-110 transition-all duration-200 shadow-xl cursor-pointer"
          >
            <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNext}
            aria-label="Foto Selanjutnya"
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 md:p-4 rounded-full bg-black/70 hover:bg-purple-900/90 text-yellow-300 hover:text-yellow-200 border border-purple-500/50 hover:border-yellow-400 hover:scale-110 transition-all duration-200 shadow-xl cursor-pointer"
          >
            <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-5xl w-full flex flex-col items-center z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Box */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/40 shadow-2xl shadow-purple-900/50 bg-black max-h-[75vh] flex items-center justify-center">
              <img
                src={images[selectedIdx]?.src}
                alt={images[selectedIdx]?.title}
                className="max-h-[75vh] w-auto max-w-full object-contain select-none"
              />
            </div>

            {/* Caption & Info Bar */}
            <div className="w-full mt-4 p-4 rounded-xl bg-purple-950/60 border border-purple-500/30 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-1">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-yellow-400/20 text-yellow-300 border border-yellow-400/30">
                    {images[selectedIdx]?.category}
                  </span>
                  <span className="text-xs text-gray-400">
                    {selectedIdx + 1} / {images.length}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white">
                  {images[selectedIdx]?.title}
                </h4>
                <p className="text-xs md:text-sm text-gray-300 mt-0.5">
                  {images[selectedIdx]?.description}
                </p>
              </div>

              {/* Action link in modal */}
              <Button
                size="sm"
                variant="outline"
                className="btn-secondary whitespace-nowrap flex items-center gap-2 group"
                onClick={() => window.open(guildInfo?.facebookLink || 'https://www.facebook.com', '_blank')}
              >
                <span>Bagikan ke Facebook</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default GallerySection;
