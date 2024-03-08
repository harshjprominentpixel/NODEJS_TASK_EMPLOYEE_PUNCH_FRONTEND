import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeWithPunchDetails } from "../service/DataProvider";

function EmployeePunchTimes() {
  const { employeeId } = useParams();

  const fetchEmployeeDetails = async () => {
    const data = await getEmployeeWithPunchDetails(parseInt(employeeId!));
    console.log(data);
  };

  useEffect(() => {
    fetchEmployeeDetails();
  }, []);

  return <div>EmployeePunchTimes</div>;
}

export default EmployeePunchTimes;
