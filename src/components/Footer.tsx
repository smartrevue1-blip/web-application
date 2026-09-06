export function Footer() {
  const logoPath = `${import.meta.env.BASE_URL}logo.svg`
  return <footer className="footer"><div className="container footer-grid"><div><a href="#" className="brand"><img src={logoPath} alt="Smart Revue" /></a><p>Better reviews. Better reach.<br />Better business.</p></div><div><h3>Explore</h3><a href="#services">Services</a><a href="#how-it-works">How it works</a><a href="#why-smart-revue">About us</a></div><div><h3>Get in touch</h3><a href="mailto:hello@smartrevue.com">hello@smartrevue.com</a><a href="tel:+441onal">Book a discovery call</a></div></div><div className="container footer-bottom"><span>© 2025 Smart Revue. All rights reserved.</span><span>Made for businesses that care.</span></div></footer>
}
