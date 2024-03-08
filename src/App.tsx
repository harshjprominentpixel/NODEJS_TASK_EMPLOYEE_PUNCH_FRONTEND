import React from "react";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "./Table/DataTable";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 120,
    headerClassName: "bg-blue-900 text-white font-mono",
    align:"center",
    headerAlign:"center"
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 200,
    headerClassName: "bg-blue-900 text-white font-mono",
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 170,
    headerClassName: "bg-blue-900 text-white font-mono",
    align:"left",
    headerAlign:"left"
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 120,
    headerClassName: "bg-blue-900 text-white font-mono",
    align:"center",
    headerAlign:"center"
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

function App() {
  return (
    <div className="flex-col items-center justify-center p-24 bg-cyan-50 h-screen">
      <h1 className="text-center text-3xl mb-4 text-blue-900">All Employees</h1>
      <div className="flex items-center justify-center w-full">
        <DataTable columns={columns} rows={rows} />
      </div>
    </div>
  );
}

export default App;
