import React from 'react';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/heverton-daniel',
    icon: <FaLinkedin />,
    color: '#0077B5',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/heverton-mendes',
    icon: <FaGithub />,
    color: '#ffffff',
  },
  {
    name: 'Medium',
    url: 'https://hevertondaniel.medium.com',
    icon: <FaMedium />,
    color: '#ffffff',
  },
];
