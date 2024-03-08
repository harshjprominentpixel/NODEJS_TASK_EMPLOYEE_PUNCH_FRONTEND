import React from "react";
import AllEmployees from "./Components/AllEmployees";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EmployeePunchTimes from "./Components/EmployeePunchTimes";
import Loading from "./Components/Loading";

function App() {
  const router = createBrowserRouter([
    {
      index: true,
      path: "/",
      element: (
        <>
          <Loading />
          <AllEmployees />
        </>
      ),
    },
    {
      path: "employeePunchTimes/:employeeId",
      element: (
        <>
          <Loading />
          <EmployeePunchTimes />
        </>
      ),
    },
    {
      path: "*",
      element: <AllEmployees />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
