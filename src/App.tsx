import React, { useEffect, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "./Components/Table/DataTable";
import { getAllEmployees } from "./service/DataProvider";

function App() {
  const [rows, setRows] = useState([]);

  const fetchEmployees = async () => {
    const data = await getAllEmployees();
    console.log(data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 120,
      headerClassName: "bg-blue-900 text-white font-mono",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      headerClassName: "bg-blue-900 text-white font-mono",
    },
    {
      field: "dob",
      headerName: "Date Of Birth",
      width: 170,
      headerClassName: "bg-blue-900 text-white font-mono",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "createdAt",
      headerName: "Joining Date",
      width: 180,
      headerClassName: "bg-blue-900 text-white font-mono",
      align: "center",
      headerAlign: "center",
    },
  ];

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
