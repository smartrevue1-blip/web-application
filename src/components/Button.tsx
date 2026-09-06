import type { ReactNode } from 'react'
type Props = { children: ReactNode; href?: string; variant?: 'primary' | 'dark' | 'light' }
export function Button({ children, href, variant = 'primary' }: Props) {
  const className = `btn btn-${variant}`
  return href ? <a className={className} href={href}>{children} <span aria-hidden="true">↗</span></a> : <button className={className}>{children}</button>
}
