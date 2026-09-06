import { SectionHeading } from '../components/SectionHeading'
import { ServiceCard } from '../components/ServiceCard'
import { services } from '../data/services'
export function Services() { return <section className="section services-section" id="services"><div className="container"><SectionHeading eyebrow="What we do" title="Everything you need to get noticed." description="From your next five-star review to your next hundred customers, we bring the strategy, creativity and technology to make it happen." /><div className="grid services-grid">{services.map(service => <ServiceCard key={service.title} service={service} />)}</div></div></section> }
