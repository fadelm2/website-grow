import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Youtube } from 'lucide-react';

export const HeroSection = ({ guildInfo, logoUrl }) => {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514539079130-25950c84af65?w=1920&q=80" 
          alt="Fantasy Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Guild Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src={logoUrl} 
            alt="GROW Guild Logo"
            className="w-64 h-64 md:w-80 md:h-80 mx-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Title */}
        <h1 className="hero-title text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
          GUILD <span className="text-gradient-gold">GROW</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-purple-300 mb-6 animate-fade-in-up animation-delay-200">
          Grand Chase Classic
        </h2>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-fade-in-up animation-delay-400 font-light tracking-wide">
          {guildInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
          <Button 
            size="lg"
            className="btn-primary group"
            onClick={() => window.open(guildInfo.discordLink, '_blank')}
          >
            Join Discord
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="btn-secondary group"
            onClick={() => window.open(guildInfo.youtubeLink, '_blank')}
          >
            <Youtube className="mr-2 h-5 w-5" />
            Watch Guides
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};
