import React from 'react';
import { useTable} from 'react-table'
import { columns } from './columns';

export const DataTable = ({ data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="overflow-x-auto">
      <table {...getTableProps()} className="min-w-full table-auto">
        <thead className="bg-gray-100">
          {headerGroups.map(headerGroup => (
            // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
<tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
<th {...column.getHeaderProps()} className="px-6 py-3 text-left">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
<tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
<td {...cell.getCellProps()} className="px-6 py-4">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
