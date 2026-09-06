import type { Service } from '../types'
export function ServiceCard({ service }: { service: Service }) { return <a className="card service-card" href={service.href}><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.description}</p><span className="arrow" aria-hidden="true">↗</span></a> }
