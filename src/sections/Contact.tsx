import { useState, type FormEvent } from 'react'
import { Button } from '../components/Button'

type Lead = {
  name: string
  email: string
  phone: string
  message: string
}

export function Contact() {
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const lead: Lead = {
      name: String(form.get('name') ?? ''),
      email: String(form.get('email') ?? ''),
      phone: String(form.get('phone') ?? ''),
      message: String(form.get('message') ?? ''),
    }
    const existing = JSON.parse(localStorage.getItem('smart-revue-contact-leads') ?? '[]') as Lead[]
    localStorage.setItem('smart-revue-contact-leads', JSON.stringify([...existing, { ...lead, createdAt: new Date().toISOString() }]))
    setSubmitted(true)
    event.currentTarget.reset()
  }

  function closeModal() {
    setIsOpen(false)
    setSubmitted(false)
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-box">
        <span className="eyebrow">Ready when you are</span>
        <h2>Let’s start a conversation.</h2>
        <p>Choose the way that feels easiest. We’ll listen to your goals and help you find the right next step.</p>
        <div className="contact-options">
          <a href="mailto:hello@smartrevue.com"><span>✉</span><strong>Email us<small>hello@smartrevue.com</small></strong></a>
          <a href="tel:+441234567890"><span>⌕</span><strong>Call us<small>+44 1234 567 890</small></strong></a>
          <a href="https://wa.me/441234567890" target="_blank" rel="noreferrer"><span>◌</span><strong>WhatsApp<small>Message our team</small></strong></a>
          <a href="mailto:hello@smartrevue.com?subject=Smart%20Revue%20discovery%20call"><span>↗</span><strong>Book a chat<small>Free discovery call</small></strong></a>
        </div>
        <Button onClick={() => setIsOpen(true)}>Start a conversation</Button>
      </div>

      {isOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && closeModal()}>
          <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
            <button className="modal-close" type="button" aria-label="Close contact form" onClick={closeModal}>×</button>
            {submitted ? (
              <div className="modal-success"><span>✓</span><h3>Thanks, we’ll be in touch.</h3><p>Your message has been captured. We’ll connect the database once the collection details are ready.</p><Button onClick={closeModal}>Close</Button></div>
            ) : (
              <>
                <span className="eyebrow">Tell us about you</span>
                <h3 id="contact-modal-title">Let’s talk about your growth.</h3>
                <p className="modal-intro">Share your details and a little about what you need. We’ll get back to you shortly.</p>
                <form onSubmit={handleSubmit}>
                  <div className="modal-form-row">
                    <label>Name<input name="name" type="text" placeholder="Your name" required /></label>
                    <label>Email<input name="email" type="email" placeholder="you@example.com" required /></label>
                  </div>
                  <label>Contact number<input name="phone" type="tel" placeholder="+91 98765 43210" required /></label>
                  <label>Message<textarea name="message" rows={4} placeholder="Tell us about your shop or business..." required /></label>
                  <Button type="submit">Submit enquiry</Button>
                </form>
                <small className="form-note">Your details stay private and are only used to contact you about Smart Revue.</small>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
