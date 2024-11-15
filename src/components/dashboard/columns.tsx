export const columns = [
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
      Cell: ({ row }) => (
        // biome-ignore lint/a11y/useButtonType: <explanation>
<button
          className="text-blue-500"
          onClick={() => handleEdit(row.original)}>
          Edit
        </button>
      ),
    },
  ];

function handleEdit(original: any): void {
    throw new Error("Function not implemented.");
}
  