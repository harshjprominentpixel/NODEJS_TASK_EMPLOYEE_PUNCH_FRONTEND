import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeWithPunchDetails } from "../service/DataProvider";
import { Employee, PunchTimeDetails } from "../common/types/types";
import moment from "moment";
import DataTable from "./Table/DataTable";
import { GridColDef } from "@mui/x-data-grid";

function EmployeePunchTimes() {
  const { employeeId } = useParams();
  const [employeeData, setEmployeeData] = useState<Employee>();
  const [showData, setShowData] = useState<number>(1);

  const fetchEmployeeDetails = async () => {
    const employeeData = await getEmployeeWithPunchDetails(
      parseInt(employeeId!)
    );
    setEmployeeData(employeeData);
  };

  useEffect(() => {
    fetchEmployeeDetails();
  }, []);

  const columns: GridColDef[] = [
    {
      field: "in_time_ist",
      headerName: "Punch In Time",
      width: 350,
      headerClassName: "bg-blue-900 text-white font-mono",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "out_time_ist",
      headerName: "Punch Out Time",
      width: 350,
      headerClassName: "bg-blue-900 text-white font-mono",
      headerAlign: "center",
      align: "center",
    },
  ];

  return (
    <div className="flex-col items-center justify-center p-24 bg-cyan-50 h-screen">
      <h1 className="text-center text-3xl mb-4 text-blue-900">
        Employees Details
      </h1>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">
          <li className="me-2">
            <button
              id="about-tab"
              className={
                showData === 1
                  ? "inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500"
                  : "inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              }
              onClick={() => setShowData(1)}
            >
              Employee
            </button>
          </li>
          <li className="me-2">
            <button
              id="services-tab"
              className={
                showData === 2
                  ? "inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500"
                  : "inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              }
              onClick={() => setShowData(2)}
            >
              Punch Time Details
            </button>
          </li>
        </ul>
        <div id="defaultTabContent">
          {showData === 1 && (
            <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
              <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                {employeeData?.name.toUpperCase()}
              </h2>
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                <b>Date Of Birth : </b>
                {employeeData?.dob}
                <br />
                <b>Joining Date : </b>
                {moment(employeeData?.createdAt).format("LL").toString()}
              </p>
            </div>
          )}
          {showData === 2 && (
            <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
              <div className="flex items-center justify-center w-full">
                {employeeData?.getPunchTimes?.length! > 0 ? (
                  <DataTable
                    columns={columns}
                    rows={employeeData?.getPunchTimes}
                  />
                ) : (
                  <p>No Data Available</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-center w-full"></div>
    </div>
  );
}

export default EmployeePunchTimes;
