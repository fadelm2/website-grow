import React from 'react';
import { Card, CardContent } from './ui/card';
import { Crown, Star, User } from 'lucide-react';

const getRoleIcon = (role) => {
  if (role === "Guild Master") return Crown;
  if (role === "Vice Leader" || role === "Officer") return Star;
  return User;
};

export const MemberShowcase = ({ members }) => {
  return (
    <section className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-center mb-12 animate-fade-in-up">
          Core <span className="text-gradient-gold">Members</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {members.map((member, index) => {
            const RoleIcon = getRoleIcon(member.role);
            return (
              <Card 
                key={member.id}
                className="card-hover card-glass animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  {/* Member Avatar Placeholder */}
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center border-2 border-purple-400/50">
                    <RoleIcon className="h-10 w-10 text-purple-200" />
                  </div>

                  {/* Member Info */}
                  <h3 className="text-xl font-bold text-center mb-2 text-purple-100">
                    {member.name}
                  </h3>
                  <div className="text-center mb-3">
                    <span className="inline-block px-3 py-1 bg-purple-500/30 rounded-full text-sm text-purple-300 border border-purple-400/30">
                      {member.role}
                    </span>
                  </div>
                  <div className="text-center text-gray-400 text-sm space-y-1">
                    <div>Level: <span className="text-gold-400 font-bold">{member.level}</span></div>
                    <div className="text-gray-500">{member.specialty}</div>
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
