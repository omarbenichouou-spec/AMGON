import { Plus } from "lucide-react";
import type { Faq } from "@/lib/site";

export function FaqAccordion({ items }: { items: Faq[] }) {
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <details key={item.question} className="faq-item" open={index === 0}>
          <summary><span>{item.question}</span><Plus size={21} aria-hidden="true" /></summary>
          <div className="faq-answer"><p>{item.answer}</p></div>
        </details>
      ))}
    </div>
  );
}
