import React from 'react';
import { Card, CardContent } from './ui/card';
import { Trophy, Target, Users, Star } from 'lucide-react';

const iconMap = {
  Trophy: Trophy,
  Target: Target,
  Users: Users,
  Star: Star
};

export const AchievementSection = ({ achievements }) => {
  return (
    <section className="section-padding bg-dark-pattern">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12 animate-fade-in-up">
          Guild <span className="text-gradient-gold">Achievements</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon];
            return (
              <Card 
                key={achievement.id}
                className="card-hover card-glass animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 flex gap-4">
                  <div className="icon-wrapper-achievement flex-shrink-0">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-purple-200">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 mb-3 leading-relaxed">
                      {achievement.description}
                    </p>
                    <div className="text-sm text-purple-400 font-semibold">
                      {achievement.date}
                    </div>
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
