import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef,
  createColumnHelper
} from "@tanstack/react-table";

import tableData from "./data.json"; // Adjust path accordingly


type RowData = {
  "S.no": number;          
  "Job Request": string;
  "submitted": string;
  "status": string;
  "submitter": string;
  "URL": string;
  "Assigned": string;
  "Priority": string;
  "Due Date": string;
  "Est. Value": string;
};

const columnHelper = createColumnHelper<RowData>();

const columns: ColumnDef<RowData>[] = [
  { accessorKey: "S.no", header: "S.No" },
  { accessorKey: "Job Request", header: "Job Request" },
  { accessorKey: "submitted", header: "Submitted" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "submitter", header: "Submitter" },
  { accessorKey: "URL", header: "URL" },
  { accessorKey: "Assigned", header: "Assigned" },
  { accessorKey: "Priority", header: "Priority" },
  { accessorKey: "Due Date", header: "Due Date" },
  { accessorKey: "Est. Value", header: "Est. Value" },
];


const Table: React.FC =() =>{
  const table = useReactTable({
    data: tableData,
    columns : columns,
    getCoreRowModel: getCoreRowModel(),
  }); 


  return (
    <div style={{ overflowX: "auto", margin: "20px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "#f4f4f4" }}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{
                    padding: "12px",
                    border: "1px solid black",
                    textAlign: "left",
                  }}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  style={{
                    padding: "12px",
                    border: "1px solid black",
                    fontSize: "14px",
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
