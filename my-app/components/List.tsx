type ListProps = {
  title?: string;
  items: string[];
};

export default function List({ title, items }: ListProps) {
  return (
    <div className="my-6 px-5">
      {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
      <ul className="list-disc list-inside space-y-1">
        {items.map((item, index) => (
          <li key={index} className="text-white">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
