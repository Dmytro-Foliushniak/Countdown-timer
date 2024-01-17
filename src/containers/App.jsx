import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers";
import React, {useState} from "react";
import {createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom";
import Root from "../pages/Root";
import InputDate from "../pages/InputDate";
import Countdown from "../pages/Countdown";

function App() {

    const [date, setDate] = useState(null);

    const inputChange = (value) => {
        setDate(value);
    };

    const router = createHashRouter([
            {
                path: '/',
                element: <Root />,
            },
            {
                path: '/date',
                element: (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <InputDate onChange={inputChange}/>
                    </LocalizationProvider>
                ),
            },
            {
                path: '/date/countdown',
                element: <Countdown date={date}/>,
            },
        ],
    );


    return (
            <RouterProvider router={router}/>
    );
}

export default App;
