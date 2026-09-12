import React from 'react';
import { Card, CardContent } from './ui/card';
import { Swords, Flame, Trophy, Shield, Zap } from 'lucide-react';

const getRankBadge = (rank) => {
  if (rank === 1) {
    return {
      bg: 'bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600',
      textColor: 'text-black',
      border: 'border-yellow-300',
      glow: 'shadow-yellow-500/30',
      label: 'RANK #1',
      icon: Trophy
    };
  }
  if (rank === 2) {
    return {
      bg: 'bg-gradient-to-r from-slate-300 via-gray-200 to-slate-400',
      textColor: 'text-black',
      border: 'border-slate-200',
      glow: 'shadow-slate-400/30',
      label: 'RANK #2',
      icon: Swords
    };
  }
  if (rank === 3) {
    return {
      bg: 'bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800',
      textColor: 'text-white',
      border: 'border-amber-500',
      glow: 'shadow-amber-600/30',
      label: 'RANK #3',
      icon: Flame
    };
  }
  return {
    bg: 'bg-purple-900/80',
    textColor: 'text-purple-200',
    border: 'border-purple-400/40',
    glow: 'shadow-purple-700/20',
    label: `RANK #${rank}`,
    icon: Zap
  };
};

export const TopStrongerSection = ({ members = [] }) => {
  return (
    <section id="top-stronger" className="section-padding relative overflow-hidden bg-black/95">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-xs font-semibold mb-4 animate-fade-in">
            <Swords className="h-4 w-4" />
            <span>HALL OF POWER</span>
          </div>
          <h2 className="section-title animate-fade-in-up">
            Top <span className="text-gradient-gold">Stronger</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl animate-fade-in-up animation-delay-200">
            6 Anggota Terkuat Guild GROW dengan kekuatan tempur dan dedikasi tertinggi di Grand Chase Classic.
          </p>
        </div>

        {/* 6 Top Stronger Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {members.map((member, index) => {
            const badge = getRankBadge(member.rank || index + 1);
            const BadgeIcon = badge.icon;
            const isTop3 = (member.rank || index + 1) <= 3;

            return (
              <Card
                key={member.id || index}
                className={`card-hover card-glass relative overflow-hidden rounded-2xl border transition-all duration-300 animate-fade-in-up ${
                  isTop3
                    ? 'border-yellow-500/40 hover:border-yellow-400 shadow-lg hover:shadow-yellow-500/20'
                    : 'border-purple-500/30 hover:border-purple-400'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Top Rank Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-black tracking-wider px-3 py-1 rounded-full border shadow-md ${badge.bg} ${badge.textColor} ${badge.border}`}
                  >
                    <BadgeIcon className="h-3.5 w-3.5" />
                    {badge.label}
                  </span>
                </div>

                <CardContent className="p-6 pt-14">
                  {/* Avatar / Emblem Circle */}
                  <div className="relative mx-auto mb-4 w-20 h-20">
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center border-2 transition-transform duration-300 hover:scale-105 ${
                        isTop3
                          ? 'bg-gradient-to-br from-yellow-600/40 to-purple-900/60 border-yellow-400/80 shadow-lg shadow-yellow-500/30'
                          : 'bg-gradient-to-br from-purple-700/40 to-purple-950/60 border-purple-400/60 shadow-md'
                      }`}
                    >
                      <Swords className={`h-9 w-9 ${isTop3 ? 'text-yellow-300' : 'text-purple-300'}`} />
                    </div>
                  </div>

                  {/* Member Name */}
                  <h3 className="text-2xl font-bold text-center mb-1 text-white group-hover:text-yellow-300 transition-colors">
                    {member.name}
                  </h3>

                  {/* Title / Role */}
                  <div className="text-center mb-4">
                    <span className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-400/20">
                      {member.title}
                    </span>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 mb-3 text-center">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-gray-400">Total Attack</div>
                      <div className="text-base font-extrabold text-gradient-gold">
                        {member.totalAttack}
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-gray-400">Level</div>
                      <div className="text-base font-extrabold text-purple-200">
                        {member.level}
                      </div>
                    </div>
                  </div>

                  {/* Main Hero & Specialty */}
                  <div className="space-y-1 text-center text-xs text-gray-400">
                    <div>
                      <span className="text-gray-500">Main: </span>
                      <span className="text-purple-300 font-medium">{member.mainHero}</span>
                    </div>
                    <div className="text-gray-400 italic line-clamp-1">
                      {member.specialty}
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
export default TopStrongerSection;
