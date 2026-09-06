import { SectionHeading } from '../components/SectionHeading'
export function ReviewGrowth() {
  return (
    <section className="section green-section" id="review-growth">
      <div className="container split">
        <div className="dashboard-card growth-dashboard-card">
          <div className="dash-top"><span>Review growth dashboard</span><span className="live">● Live</span></div>
          <div className="dashboard-rating"><strong>4.9</strong><span className="stars">★★★★★</span><small>Average Google rating</small></div>
          <div className="chart"><span className="chart-line" /><i>Jan</i><i>Feb</i><i>Mar</i><i>Apr</i><i>May</i></div>
          <div className="dash-stats"><b>+128 <small>new reviews</small></b><b>+42% <small>profile views</small></b><b>86% <small>engagement</small></b></div>
          <div className="engagement-row"><span>Customer engagement</span><strong>↑ 24% this month</strong></div>
        </div>
        <div><SectionHeading eyebrow="Review growth" title="Turn every happy customer into your next opportunity." description="Smart Revue helps you collect honest Google reviews, understand customer sentiment and keep the conversation moving." /><a className="text-link light-link" href="#contact">Build your reputation <span>↗</span></a></div>
      </div>
    </section>
  )
}
