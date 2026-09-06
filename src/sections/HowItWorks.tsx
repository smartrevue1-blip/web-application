import { SectionHeading } from '../components/SectionHeading'

const steps = [
  {
    number: '01',
    title: 'We listen',
    text: 'We learn about your shop, your customers and the moments that make people come back.',
    result: 'A plan built around your people',
    face: 'https://i.pravatar.cc/96?img=47',
    alt: 'Business owner smiling',
  },
  {
    number: '02',
    title: 'We make it easy',
    text: 'We place your Smart Revue QR where customers naturally see it, scan it and share feedback.',
    result: 'More feedback, less effort',
    face: 'https://i.pravatar.cc/96?img=32',
    alt: 'Customer smiling',
  },
  {
    number: '03',
    title: 'You grow',
    text: 'You understand what customers love, improve what matters and build a reputation people trust.',
    result: 'More trust. More customers.',
    face: 'https://i.pravatar.cc/96?img=12',
    alt: 'Shopkeeper smiling',
  },
]

export function HowItWorks() {
  return (
    <section className="section how-section" id="how-it-works">
      <div className="container">
        <SectionHeading
          eyebrow="How it works"
          title="Simple for your team. Natural for your customers."
          description="From the first scan to the final review, Smart Revue keeps the experience friendly, quick and genuinely useful."
          align="center"
        />
        <div className="steps">
          {steps.map((step) => (
            <article className="step" key={step.number}>
              <div className="step-top"><span>{step.number}</span><div className="people-stack"><img src={step.face} alt={step.alt} /><i>✦</i></div></div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <strong className="step-result">{step.result}</strong>
            </article>
          ))}
        </div>
        <div className="how-note"><span>“</span><p>When customers feel heard, they are much more likely to share what made their visit special.</p><strong>— The Smart Revue approach</strong></div>
      </div>
    </section>
  )
}
