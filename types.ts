import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  initial: string;
}

export interface Advisor {
  id: string;
  role: string;
  fullName: string;
  description: string;
  bullets: string[];
}