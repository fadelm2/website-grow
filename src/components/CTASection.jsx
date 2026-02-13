import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CTASection = ({ guildInfo }) => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-black"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fade-in-up">
            <Sparkles className="h-12 w-12 mx-auto text-gold-400 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up animation-delay-200">
            <span className="text-gradient-gold">Start Small,</span>
             
            <br />
            <span className="text-purple-300">Leave Bigger.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up animation-delay-400 font-light">
            Grow with GROW
          </p>

          <p className="text-lg text-gray-400 mb-12 animate-fade-in-up animation-delay-600 max-w-2xl mx-auto leading-relaxed">
            Join a solid community, grow together with other players, and achieve the highest accomplishments in Grand Chase Classic. It’s time to upgrade from a solo player to becoming part of a legendary guild.
          </p>

          <Button 
            size="lg"
            className="btn-primary-large group animate-fade-in-up animation-delay-800"
            onClick={() => window.open(guildInfo.discordLink, '_blank')}
          >
            Join Guild GROW Now
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
