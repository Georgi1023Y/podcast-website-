import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: 'mdi:instagram',
      url: 'https://www.instagram.com/bbojidarssirakov/',
      label: 'Instagram',
    },
    {
      icon: 'mdi:youtube',
      url: 'https://www.youtube.com/@bbojidarssirakov',
      label: 'YouTube',
    },
  ];

  return (
    <footer className="footer flex items-center justify-center bg-base-200 text-base-content">
      <div className="px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-square rounded-full hover:bg-primary hover:bg-opacity-10 transition-all"
                aria-label={link.label}
              >
                <Icon 
                  icon={link.icon} 
                  className="w-6 h-6" 
                  style={{ color: 'currentColor' }}
                />
              </a>
            ))}
          </div>
          <p className="text-sm opacity-70 text-center">
            {currentYear} Топкаста на Божидар. Всички права са запазени.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;