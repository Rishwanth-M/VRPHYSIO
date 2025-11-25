import * as React from "react";

type Item = { question: string; answer: React.ReactNode };

export function SimpleAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = React.useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((it, i) => (
        <div key={i} className="rounded-2xl border border-gray-200">
          <button
            className="w-full text-left p-4 md:p-5 font-medium flex items-center justify-between"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{it.question}</span>
            <span className="ml-4">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <div className="px-4 pb-5 md:px-5 text-gray-700">
              {it.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
