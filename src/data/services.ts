import type { Service, Testimonial } from "../types";

export const services: Service[] = [
  {
    icon: "★",
    title: "Google Review Growth",
    description:
      "Turn customer experiences into genuine reviews and build a stronger online reputation.",
    features: [
      "QR-based review system",
      "AI-assisted review suggestions",
      "Customer feedback",
      "Review growth strategy",
    ],
  },
  {
    icon: "↗",
    title: "Paid Campaigns",
    description:
      "Reach the right audience with targeted advertising campaigns designed to generate measurable opportunities.",
    features: [
      "Google Ads",
      "Meta Ads",
      "Lead generation",
      "Campaign optimization",
    ],
  },
  {
    icon: "◎",
    title: "Social Media Marketing",
    description:
      "Build a memorable online presence with strategic content, creative campaigns and consistent engagement.",
    features: [
      "Content strategy",
      "Social media management",
      "Reels & creatives",
      "Brand growth",
    ],
  },
  {
    icon: "⌘",
    title: "Software Solutions",
    description:
      "Modern software and AI-powered solutions built around your business requirements.",
    features: [
      "Web applications",
      "Mobile applications",
      "Business software",
      "AI solutions",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "The haircut was exactly what I wanted. The staff were friendly, the salon was hygienic and the whole experience felt so welcoming.",
    name: "Priya Sharma",
    role: "Bluemoon Hair Salon customer",
    initials: "PS",
    source: "Google review example",
  },
  {
    quote: "Khana bahut accha tha, staff bahut friendly tha aur hygiene bhi ekdum top class thi. Family ke saath zaroor aayenge!",
    name: "Ravi Kumar",
    role: "Bluemoon Hair Salon customer",
    initials: "RK",
    source: "Google review example",
    language: "हिन्दी",
  },
  {
    quote: "Smart Revue makes feedback feel natural. Customers choose a rating, find the right words and share their experience in seconds.",
    name: "Amelia Brown",
    role: "Owner, Bloom & Co.",
    initials: "AB",
    source: "Customer feedback example",
  },
];