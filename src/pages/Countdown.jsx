import '../styles/Countdown.css'
import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {calculateTime} from "../utils/countdownUtils";
import {HomeButton} from "../components/HomeButton";

export default function Countdown ({date}){
    const { state } = useLocation();
    const [inputDate, setInputDate] = useState(date)
    const [leftTime, setLeftTime] = useState(calculateTime(inputDate, state.date))

    const currentYear = {
        birthday: Math.floor(new Date().getFullYear() - new Date(inputDate).getFullYear()),
        newYear: new Date().getFullYear() + 1,
        anniversary: Math.floor(new Date().getFullYear() - new Date(inputDate).getFullYear())

    }

    const title = {
        birthday: 'до Дня Народження залишилось:',
        newYear: 'до Нового року залишилось:',
        anniversary: 'до Річниці залишилось:',
        womenDay: 'до 8-го березня залишилось:',
        others: 'до Дати залишилось'
    }

    useEffect(() => {
        if (inputDate){
            const dateString = inputDate.toISOString()
            sessionStorage.setItem('MY_APP_STATE', dateString);
        }
    }, [inputDate]);


    useEffect(() => {
        const saveDataSting = sessionStorage.getItem('MY_APP_STATE')
        if (saveDataSting){
            setInputDate(new Date(saveDataSting));
        }
    }, []);


    useEffect(() => {
            const interval = setInterval(() => {
                setLeftTime(calculateTime(inputDate, state.date));
            }, 1000);
            return () => clearInterval(interval);
    }, [inputDate, state.date]);

    return (
        <div className={`countdown ${'countdown__' + state.type +'-background'}`}>
            <HomeButton/>
            <div className={`countdown__box`}>
                <h1 className="countdown__title">{title[state.type]}</h1>
                <div id="year" className="year">{currentYear[state.type]}</div>
                <ul className="countdown__timer">
                    <li key={1} className="countdown__time">
                        <p className="countdown__day time">{leftTime.daysLeft}</p>
                        <span className="countdown__textTime">днів</span>
                    </li>
                    <li key={2} className="countdown__time">
                        <p className="countdown__hours time">{leftTime.hoursLeft}</p>
                        <span className="countdown__textTime">годин</span>
                    </li>
                    <li key={3} className="countdown__time">
                        <p className="countdown__minutes time">{leftTime.minutesLeft}</p>
                        <span className="countdown__textTime">хвилин</span>
                    </li>
                    <li key={4} className="countdown__time">
                        <p className="countdown__second time">{leftTime.secondLeft}</p>
                        <span className="countdown__textTime">секунд</span>
                    </li>
                </ul>
            </div>
        </div>

    )
}