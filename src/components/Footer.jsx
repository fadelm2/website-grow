import React from 'react';
import { MessageCircle, Youtube, Github } from 'lucide-react';

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
                <a href="#top-stronger" className="text-gray-400 hover:text-purple-300 transition-colors">
                  Top Stronger
                </a>
              </li>
              <li>
                <a href="#members" className="text-gray-400 hover:text-purple-300 transition-colors">
                  Core Members
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-purple-300 transition-colors">
                  Grand Chase Gallery
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
              {guildInfo.facebookLink && (
                <a 
                  href={guildInfo.facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook Group
                </a>
              )}
              <a 
                href={guildInfo.githubLink || "https://github.com/fadelm2"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-yellow-300 transition-colors"
              >
                <Github className="h-5 w-5" />
                Developer GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-900/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <div className="text-center sm:text-left">
            <p>&copy; {currentYear} Guild GROW - Grand Chase Classic. All rights reserved.</p>
            <p className="mt-1 text-xs text-gray-600">Grow Together. Chase Stronger.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">Developer:</span>
            <a
              href={guildInfo.githubLink || "https://github.com/fadelm2"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/60 hover:bg-purple-900/80 border border-purple-500/30 hover:border-yellow-400 text-gray-300 hover:text-white transition-all duration-200 group shadow-md"
            >
              <Github className="h-4 w-4 text-purple-300 group-hover:text-yellow-300 transition-colors" />
              <span className="text-xs font-semibold text-gradient-gold">fadelm2</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
