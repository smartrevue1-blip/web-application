import type { Service, Testimonial } from '../types'

export const services: Service[] = [
  { icon: '✦', title: 'Review Growth', description: 'Turn happy customers into your most powerful marketing channel.', href: '#review-growth' },
  { icon: '◎', title: 'Paid Campaigns', description: 'Reach the right people with campaigns built to convert.', href: '#paid-campaigns' },
  { icon: '◌', title: 'Social Media', description: 'Show up consistently with content people want to share.', href: '#social-media' },
  { icon: '▱', title: 'Software Services', description: 'Smart tools and technology that keep your business moving.', href: '#software-services' },
]

export const testimonials: Testimonial[] = [
  { quote: 'Smart Revue helped us become the highest-rated business in our area. The difference in new enquiries was immediate.', name: 'Sarah Mitchell', role: 'Founder, The Kindred Clinic', initials: 'SM' },
  { quote: 'Finally, a team that makes marketing feel simple. We have more five-star reviews and more time to focus on our customers.', name: 'James Patel', role: 'Director, Oak & Stone', initials: 'JP' },
]
