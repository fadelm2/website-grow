import React from 'react';
import { Card, CardContent } from './ui/card';
import { Zap, TrendingUp, MessageCircle, Shield } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';

const iconMap = {
  Zap: Zap,
  TrendingUp: TrendingUp,
  MessageCircle: MessageCircle,
  Shield: Shield
};

export const RequirementsSection = ({ requirements }) => {
  return (
    <section className="section-padding bg-dark-pattern">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12 animate-fade-in-up">
          Join <span className="text-gradient-gold">Requirements</span>
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {requirements.map((req, index) => {
            const IconComponent = iconMap[req.icon];
            return (
              <Card 
                key={req.id}
                className="card-hover card-glass animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 flex gap-4">
                  <div className="icon-wrapper-small flex-shrink-0">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-purple-200 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-400" />
                      {req.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {req.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
