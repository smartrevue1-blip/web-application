import type { ButtonHTMLAttributes, ReactNode } from 'react'
type Props = { children: ReactNode; href?: string; variant?: 'primary' | 'dark' | 'light' } & ButtonHTMLAttributes<HTMLButtonElement>
export function Button({ children, href, variant = 'primary', ...buttonProps }: Props) {
  const className = `btn btn-${variant}`
  return href ? <a className={className} href={href}>{children} <span aria-hidden="true">↗</span></a> : <button className={className} type="button" {...buttonProps}>{children}</button>
}
