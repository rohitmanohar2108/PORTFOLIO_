import React from 'react';
import { Github, Twitter, Linkedin, Instagram, Codepen } from 'lucide-react';
import { siteConfig } from '../data/config';
import { SideElement } from './layouts/SideElement';

const iconComponents = {
  GitHub: Github,
  Twitter: Twitter,
  LinkedIn: Linkedin,
  Instagram: Instagram,
  Codepen: Codepen
};

export const SocialLinks = () => {
  return (
    <SideElement side="left">
      <ul className="flex flex-col items-center space-y-5">
        {siteConfig.socialLinks.map(({ name, url }) => {
          const IconComponent = iconComponents[name as keyof typeof iconComponents];
          return (
            <li key={name}>
              <a
                href={url}
                className="text-slate-400/70 hover:text-emerald-400 hover:-translate-y-1 transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {IconComponent && <IconComponent size={20} />}
              </a>
            </li>
          );
        })}
      </ul>
    </SideElement>
  );
};