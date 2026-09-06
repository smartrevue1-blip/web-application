import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { Services } from './sections/Services'
import { ReviewGrowth } from './sections/ReviewGrowth'
import { HowItWorks } from './sections/HowItWorks'
import { WhyReviews } from './sections/WhyReviews'
import { PaidCampaigns } from './sections/PaidCampaigns'
import { SocialMedia } from './sections/SocialMedia'
import { SoftwareServices } from './sections/SoftwareServices'
import { WhySmartRevue } from './sections/WhySmartRevue'
import { Contact } from './sections/Contact'

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ReviewGrowth />
        <HowItWorks />
        <WhyReviews />
        <PaidCampaigns />
        <SocialMedia />
        <SoftwareServices />
        <WhySmartRevue />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
