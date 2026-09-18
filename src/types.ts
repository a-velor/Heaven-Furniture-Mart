export interface FurnitureItem {
  id: string;
  name: string;
  category: 'living' | 'bedroom' | 'dining' | 'office' | 'bespoke';
  categoryLabel: string;
  image: string;
  description: string;
  woodType: string;
  materials: string[];
  dimensions: string;
  isCustomizable: boolean;
  highlightTag?: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  quote: string;
  projectType: string;
  rating: number;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface BespokeInquiry {
  name: string;
  phone: string;
  email: string;
  roomType: string;
  woodPreference: string;
  dimensionsNote: string;
  budgetRange: string;
  message: string;
}

export interface CompletedProject {
  id: string;
  title: string;
  category: string;
  location: string;
  completionYear: string;
  leadTime: string;
  woodType: string;
  beforeImage: string;
  beforeLabel: string;
  afterImage: string;
  afterLabel: string;
  summary: string;
  challenge: string;
  solution: string;
  craftsmanshipHighlights: string[];
  materials: string[];
  dimensions: string;
  clientName: string;
  testimonialSnippet: string;
}
