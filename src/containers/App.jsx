import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import Root from "../pages/Root/Root";
import InputDate from "../pages/InputDate/InputDate";
import Countdown from "../pages/Countdown/Countdown";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/set-date",
      element: (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <InputDate />
        </LocalizationProvider>
      ),
    },
    {
      path: "/countdown",
      element: <Countdown />,
    },
    {
      path: "/set-date/countdown/",
      element: <Countdown />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
