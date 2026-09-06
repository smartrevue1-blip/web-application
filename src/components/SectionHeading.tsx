type Props = { eyebrow?: string; title: string; description?: string; align?: 'left' | 'center' }
export function SectionHeading({ eyebrow, title, description, align = 'left' }: Props) {
  return <div className={`section-heading heading-${align}`}>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{description && <p>{description}</p>}</div>
}
