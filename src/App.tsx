import React, { useEffect, useState } from "react";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import DataTable from "./Components/Table/DataTable";
import { getAllEmployees } from "./service/DataProvider";
import Loading from "./Components/Loading";
import { Button } from "@mui/material";
import moment from "moment";

function App() {
  const [rows, setRows] = useState([]);

  const fetchEmployees = async () => {
    const allEmployeeData = await getAllEmployees();
    setRows(allEmployeeData);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const columns: GridColDef[] = [
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
      renderCell: (params: GridRenderCellParams) => {
        const dob = moment(params.value).format("DD-MM-YYYY");
        return <>{dob}</>;
      },
    },
    {
      field: "createdAt",
      headerName: "Joining Date",
      width: 180,
      headerClassName: "bg-blue-900 text-white font-mono",
      align: "center",
      headerAlign: "center",
      renderCell: (params: GridRenderCellParams) => {
        const joiningDate = moment(params.value).format("LL");
        return <>{joiningDate}</>;
      },
    },
    {
      field: "id",
      headerName: "Get Punch Times",
      width: 200,
      headerClassName: "bg-blue-900 text-white font-mono",
      align: "center",
      headerAlign: "center",
      renderCell: (params: GridRenderCellParams) => {
        return (
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get Punch Details
          </button>
        );
      },
    },
  ];

  return (
    <>
      <Loading />
      <div className="flex-col items-center justify-center p-24 bg-cyan-50 h-screen">
        <h1 className="text-center text-3xl mb-4 text-blue-900">
          All Employees
        </h1>
        <div className="flex items-center justify-center w-full">
          <DataTable columns={columns} rows={rows} />
        </div>
      </div>
    </>
  );
}

export default App;
