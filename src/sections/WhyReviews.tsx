import { ReviewCard } from '../components/ReviewCard'
import { SectionHeading } from '../components/SectionHeading'
import { testimonials } from '../data/services'
export function WhyReviews() { return <section className="section warm-section" id="why-reviews"><div className="container"><SectionHeading eyebrow="The proof is in the stars" title="People trust people." description="Reviews are more than a rating. They're the reason someone chooses you over the competition." /><div className="reviews-grid">{testimonials.map(review => <ReviewCard key={review.name} review={review} />)}</div></div></section> }
