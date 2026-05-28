interface TagsProps {
  items: string[];
}

export function Tags({ items }: TagsProps) {
  if (items.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
