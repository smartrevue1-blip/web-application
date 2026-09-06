import { ReviewCard } from '../components/ReviewCard'
import { SectionHeading } from '../components/SectionHeading'
import { testimonials } from '../data/services'
export function WhyReviews() {
  return (
    <section className="section warm-section" id="why-reviews">
      <div className="container">
        <SectionHeading eyebrow="The proof is in the stars" title="Make every customer voice count." description="Your customer scans a QR code, chooses how their visit felt and gets a helpful starting point for an honest Google review." />
        <div className="review-workflow">
          <div className="workflow-steps">
            <div className="qr-panel"><div className="qr-code" aria-label="Sample Smart Revue QR code"><span>▦</span></div><strong>Scan to share your experience</strong><small>One simple QR code for your counter, receipt or table.</small></div>
            <div className="workflow-step"><span>01</span><strong>Choose your rating</strong><small>Customers tap 1–5 stars in seconds.</small></div>
            <div className="workflow-step"><span>02</span><strong>Get a helpful suggestion</strong><small>English or Hindi prompts match their experience.</small></div>
            <div className="workflow-step"><span>03</span><strong>Post on Google</strong><small>They review your business while the experience is fresh.</small></div>
          </div>
          <div className="review-preview">
            <div className="preview-header"><span className="preview-avatar">B</span><div><strong>Bluemoon Hair Salon</strong><small>Your feedback matters to us</small></div><span className="preview-google">G</span></div>
            <p className="preview-question">How was your experience today?</p>
            <div className="rating-picker" aria-label="Selected five star rating"><button>★</button><button>★</button><button>★</button><button>★</button><button>★</button></div>
            <div className="feedback-tags"><span>Clean & hygienic</span><span>Friendly staff</span><span>Great service</span></div>
            <div className="suggested-copy"><small>Suggested review · हिन्दी + English</small><p>“Service bahut acchi thi, staff friendly tha aur salon bilkul clean tha.”</p></div>
            <a className="preview-button" href="#contact">Continue to Google review <span>↗</span></a>
          </div>
        </div>
        <div className="reviews-grid">{testimonials.map(review => <ReviewCard key={review.name} review={review} />)}</div>
      </div>
    </section>
  )
}
