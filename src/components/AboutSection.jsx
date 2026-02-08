import React from 'react';
import { Card } from './ui/card';

export const AboutSection = ({ guildInfo }) => {
  return (
    <section className="section-padding bg-dark-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-12 animate-fade-in-up">
            Tentang <span className="text-gradient-gold">GROW</span>
          </h2>
          
          <Card className="card-glass p-8 md:p-12 animate-fade-in-up animation-delay-200">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
              {guildInfo.description}
            </p>
            
            <div className="mt-8 pt-8 border-t border-purple-500/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="stat-item">
                  <div className="text-4xl font-bold text-gradient-gold mb-2">50+</div>
                  <div className="text-gray-400">Active Members</div>
                </div>
                <div className="stat-item">
                  <div className="text-4xl font-bold text-gradient-gold mb-2">Top 10</div>
                  <div className="text-gray-400">Guild Ranking</div>
                </div>
                <div className="stat-item">
                  <div className="text-4xl font-bold text-gradient-gold mb-2">100%</div>
                  <div className="text-gray-400">Weekly Clear</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
