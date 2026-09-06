import { Button } from "../components/Button";

export default function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="container hero-container">

        <div className="hero-content">

          <div className="hero-badge">
            <span>✦</span>
            AI-Powered Business Growth
          </div>

          <h1>
            Smart
            <br />
            <span>Revue</span>
          </h1>

          <p>
            Real Reviews. Smart Decisions.{" "}
            <strong>Better Business.</strong>
          </p>

          <div className="hero-buttons">

            <Button href="#contact">
              Let's Boost Your Business →
            </Button>

            <Button
              href="#why-reviews"
              variant="light"
            >
              Explore Smart Revue
            </Button>

          </div>

          <div className="hero-trust">

            <span>✓</span>
            AI-Assisted Reviews

            <span>✓</span>
            Marketing

            <span>✓</span>
            Technology

          </div>

        </div>

        <div className="hero-visual">

          <div className="dashboard-card">

            <div className="dashboard-header">

              <div>

                <small>GOOGLE REVIEW GROWTH</small>

                <h3>
                  Review performance
                </h3>

              </div>

              <span className="growth-pill">
                ↗ 32.8%
              </span>

            </div>

            <div className="mini-chart">

              <div className="chart-line">

                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />

              </div>

            </div>

            <div className="dashboard-stats">

              <div>
                <strong>4.9★</strong>
                <span>Google rating</span>
              </div>

              <div>
                <strong>248</strong>
                <span>New reviews</span>
              </div>

              <div>
                <strong>+42%</strong>
                <span>Engagement</span>
              </div>

            </div>

          </div>

          <div className="floating-review">

            <div className="google-icon">
              G
            </div>

            <div>
              <strong>
                New 5★ Review
              </strong>

              <span>
                AI-assisted
              </span>
            </div>

            <div className="small-stars">
              ★★★★★
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}