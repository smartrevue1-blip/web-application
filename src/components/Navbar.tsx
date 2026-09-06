import { useState } from 'react'
import { Button } from './Button'
export function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [['Services', '#services'], ['How it works', '#how-it-works'], ['Why reviews', '#why-reviews'], ['About us', '#why-smart-revue']]
  const logoPath = `${import.meta.env.BASE_URL}logo.svg`
  return <header className="navbar"><div className="container nav-inner"><a href="#" className="brand"><img src={logoPath} alt="Smart Revue" /></a><button className="menu-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>☰</button><nav className={open ? 'nav-links open' : 'nav-links'}>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<Button href="#contact">Let's talk</Button></nav></div></header>
}
