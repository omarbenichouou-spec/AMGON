import { Breadcrumbs, type BreadcrumbItem } from "./Breadcrumbs";

export function PageHero({ eyebrow, title, description, breadcrumbs }: { eyebrow: string; title: string; description?: string; breadcrumbs: BreadcrumbItem[] }) {
  return (
    <section className="page-hero">
      <div className="page-hero__graphic" aria-hidden="true"><span /><span /><span /></div>
      <div className="container page-hero__inner">
        <Breadcrumbs items={breadcrumbs} light />
        <span className="eyebrow eyebrow--light"><span />{eyebrow}</span>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
