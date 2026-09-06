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
    quote: "Smart Revue helped us become the highest-rated business in our area. The difference in new enquiries was immediate.",
    name: "Sarah Mitchell",
    role: "Founder, The Kindred Clinic",
    initials: "SM",
    source: "Google review example",
  },
  {
    quote: "Finally, a team that makes marketing feel simple. We have more five-star reviews and more time to focus on our customers.",
    name: "James Patel",
    role: "Director, Oak & Stone",
    initials: "JP",
    source: "Google review example",
  },
  {
    quote: "The team listened first, then made it easy for our customers to leave honest feedback. It feels personal, not pushy.",
    name: "Amelia Brown",
    role: "Owner, Bloom & Co.",
    initials: "AB",
    source: "Customer feedback example",
  },
];