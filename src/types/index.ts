export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  href?: string;
}

export interface Review {
  name: string;
  business: string;
  rating: number;
  text: string;
}

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};