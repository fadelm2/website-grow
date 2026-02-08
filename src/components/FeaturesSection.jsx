import React from 'react';
import { Card, CardContent } from './ui/card';
import { Users, Swords, BookOpen, Heart } from 'lucide-react';

const iconMap = {
  Users: Users,
  Swords: Swords,
  BookOpen: BookOpen,
  Heart: Heart
};

export const FeaturesSection = ({ features }) => {
  return (
    <section className="section-padding relative">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=1920&q=80" 
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-center mb-12 animate-fade-in-up">
          Guild <span className="text-gradient-gold">Focus</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <Card 
                key={feature.id} 
                className="card-hover card-glass animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="icon-wrapper mx-auto mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-purple-200">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
