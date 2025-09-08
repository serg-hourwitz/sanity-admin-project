'use client';

import { useState } from 'react';

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="border rounded-md divide-y">
      {items.map((item, index) => (
        <div key={index}>
          <button
            className="w-full text-left p-4 font-semibold hover:cursor-pointer"
            onClick={() => toggle(index)}
          >
            {item.title}
          </button>
          {openIndex === index && (
            <div className="p-4">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
