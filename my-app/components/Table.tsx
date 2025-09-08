type TableProps = {
  title: string;
  columns: string[];
  rows: string[][];
};

export default function Table({ title, columns, rows }: TableProps) {
  return (
    <div className="my-6">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <table className="border-collapse border border-gray-400 w-full">
        <thead>
          <tr>
            {columns.map((col, i) => (
              <th
                key={i}
                className="border border-gray-400 px-2 py-1 text-start"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="border border-gray-400 px-2 py-1">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
