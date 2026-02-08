import React from 'react';
import { MessageCircle, Youtube } from 'lucide-react';

export const Footer = ({ guildInfo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/80 border-t border-purple-900/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Guild Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gradient-gold">GROW</h3>
            <p className="text-gray-400 mb-4">
              Guild Grand Chase Classic yang fokus pada progress bersama dan community yang solid.
            </p>
            <div className="text-sm text-gray-500">
              Game: Grand Chase Classic
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-purple-300">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-300 transition-colors">
                  Tentang Guild
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-purple-300 transition-colors">
                  Guild Focus
                </a>
              </li>
              <li>
                <a href="#requirements" className="text-gray-400 hover:text-purple-300 transition-colors">
                  Join Requirements
                </a>
              </li>
              <li>
                <a href="#members" className="text-gray-400 hover:text-purple-300 transition-colors">
                  Core Members
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-purple-300">Connect</h4>
            <div className="space-y-3">
              <a 
                href={guildInfo.discordLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-purple-300 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                Discord Community
              </a>
              <a 
                href={guildInfo.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors"
              >
                <Youtube className="h-5 w-5" />
                {guildInfo.youtubeChannel}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-900/30 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Guild GROW - Grand Chase Classic. All rights reserved.</p>
          <p className="mt-2">Grow Together. Chase Stronger.</p>
        </div>
      </div>
    </footer>
  );
};
