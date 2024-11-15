import type { Column } from "react-table";

interface RowData {
  name: string,
  email: string,
  role: string,
  status: string,
}

export const columns: Column<RowData>[] = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Role',
    accessor: 'role',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Actions',
    Cell: ({ row }: { row: { original: RowData } }) => (
      // biome-ignore lint/a11y/useButtonType: <explanation>
      <button
        className="text-blue-500"
        onClick={() => handleEdit(row.original)}
      >
        Edit
      </button>
    ),
  },
];

function handleEdit(orginal: RowData): void {
  console.log('Editing row:', orginal);
  // Editing logic to be added later --> Leaving it empty for now 
}
