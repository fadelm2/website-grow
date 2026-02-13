import React from 'react';
import { Button } from './ui/button';
import { MessageCircle, Youtube } from 'lucide-react';

export const MediaLinksSection = ({ guildInfo }) => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1553434320-e9f5757140b1?w=1920&q=80" 
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-center mb-12 animate-fade-in-up">
          Connect With <span className="text-gradient-gold">Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Discord Card */}
          <div className="card-glass p-8 rounded-xl text-center animate-fade-in-up animation-delay-200 hover:scale-105 transition-transform duration-300">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-purple-600/30 flex items-center justify-center border-2 border-purple-400/50">
              <MessageCircle className="h-10 w-10 text-purple-300" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-purple-200">Discord Community</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
             Join our Discord server for coordination, sharing information, and chatting with other members
            </p>
            <Button 
              size="lg"
              className="btn-primary w-full"
              onClick={() => window.open(guildInfo.discordLink, '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Join Discord
            </Button>
          </div>

          {/* YouTube Card */}
          <div className="card-glass p-8 rounded-xl text-center animate-fade-in-up animation-delay-400 hover:scale-105 transition-transform duration-300">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-600/30 flex items-center justify-center border-2 border-red-400/50">
              <Youtube className="h-10 w-10 text-red-300" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-purple-200">YouTube Guides</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Watch guides, tips & tricks, and Grand Chase Classic content on our YouTube channel as well
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="btn-secondary w-full"
              onClick={() => window.open(guildInfo.youtubeLink, '_blank')}
            >
              <Youtube className="mr-2 h-5 w-5" />
              Youtube
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
