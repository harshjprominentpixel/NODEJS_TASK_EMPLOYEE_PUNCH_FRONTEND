import React from "react";
import AllEmployees from "./Components/AllEmployees";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EmployeePunchTimes from "./Components/EmployeePunchTimes";

function App() {
  const router = createBrowserRouter([
    {
      index: true,
      path: "/",
      element: <AllEmployees />,
    },
    {
      path: "employeePunchTimes/:employeeId",
      element: <EmployeePunchTimes />,
    },
    {
      path: "*",
      element: <AllEmployees />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
