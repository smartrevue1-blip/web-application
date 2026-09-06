import { SectionHeading } from '../components/SectionHeading'
export function ReviewGrowth() {
  return (
    <section className="section green-section" id="review-growth">
      <div className="container split">
        <div className="dashboard-card growth-dashboard-card owner-dashboard">
          <div className="dash-top"><span>Owner growth dashboard</span><span className="live">● Live</span></div>
          <div className="dashboard-rating"><strong>4.9</strong><span className="stars">★★★★★</span><small>Average Google rating</small></div>
          <div className="chart"><span className="chart-line" /><i>Jan</i><i>Feb</i><i>Mar</i><i>Apr</i><i>May</i></div>
          <div className="owner-metrics">
            <div><strong>248</strong><small>Total reviews</small></div>
            <div><strong>+12</strong><small>Reviews today</small></div>
            <div><strong>32.8%</strong><small>Growth this month</small></div>
            <div><strong>18.4k</strong><small>People reached</small></div>
          </div>
          <div className="engagement-row"><span>Customer engagement</span><strong>↑ 24% this month</strong></div>
          <div className="activity-row"><span className="activity-dot" /> New 5★ review from a QR scan <small>2 min ago</small></div>
        </div>
        <div><SectionHeading eyebrow="Review growth" title="Turn every happy customer into your next opportunity." description="Smart Revue helps you collect honest Google reviews, understand customer sentiment and keep the conversation moving." /><a className="text-link light-link" href="#contact">Build your reputation <span>↗</span></a></div>
      </div>
    </section>
  )
}
