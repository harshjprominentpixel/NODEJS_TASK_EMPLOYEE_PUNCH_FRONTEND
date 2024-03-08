import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeWithPunchDetails } from "../service/DataProvider";
import { Employee } from "../common/types/types";

function EmployeePunchTimes() {
  const { employeeId } = useParams();
  const [employeeData, setEmployeeData] = useState<Employee>();

  const fetchEmployeeDetails = async () => {
    const employeeData = await getEmployeeWithPunchDetails(
      parseInt(employeeId!)
    );
    setEmployeeData(employeeData);
  };

  useEffect(() => {
    fetchEmployeeDetails();
  }, []);

  return <div className="">EmployeePunchTimes</div>;
}

export default EmployeePunchTimes;
