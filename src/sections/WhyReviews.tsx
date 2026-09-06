import { ReviewCard } from '../components/ReviewCard'
import { SectionHeading } from '../components/SectionHeading'
import { testimonials } from '../data/services'
export function WhyReviews() { return <section className="section warm-section" id="why-reviews"><div className="container"><SectionHeading eyebrow="The proof is in the stars" title="Real words from happy customers." description="Reviews are more than a rating. They are the human proof that helps a new customer choose you with confidence." /><div className="reviews-grid">{testimonials.map(review => <ReviewCard key={review.name} review={review} />)}</div></div></section> }
