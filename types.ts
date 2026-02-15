import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  // Fix: Added React import to resolve the "Cannot find namespace 'React'" error
  icon: React.ReactNode;
  bgImage?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}