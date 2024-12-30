import React from 'react';
import { siteConfig } from '../data/config';
import { SideElement } from './layouts/SideElement';

export const Email = () => {
  return (
    <SideElement side="right">
      <a
        href={`mailto:${siteConfig.email}`}
        className="font-mono text-sm text-slate-400/70 hover:text-emerald-400 hover:-translate-y-1 transition-all duration-200 vertical-rl"
      >
        {siteConfig.email}
      </a>
    </SideElement>
  );
};