import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { calculateTime } from "./calculateTime";
import dayjs from "dayjs";
import { HomeButton } from "../../components/HomeButton";
import "./Countdown.css";

export default function Countdown() {
  const { state } = useLocation();
  const location = useLocation();
  const getParams = new URLSearchParams(location.search).get("date");
  const inputDate = dayjs(getParams);

  const [leftTime, setLeftTime] = useState(
    calculateTime(inputDate, state.date),
  );

  const currentYear = {
    birthday: Math.round(dayjs().diff(inputDate, "year", true)),
    newYear: dayjs().year() + 1,
    anniversary: Math.round(dayjs().diff(inputDate, "year", true)),
  };

  const title = {
    birthday: "до Дня Народження залишилось:",
    newYear: "до Нового року залишилось:",
    anniversary: "до Річниці залишилось:",
    womenDay: "до 8-го березня залишилось:",
    others: "до Дати залишилось",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftTime(calculateTime(inputDate, state.date));
    }, 1000);
    return () => clearInterval(interval);
  }, [inputDate, state.date]);

  return (
    <div className={`countdown ${"countdown__" + state.type + "-background"}`}>
      <HomeButton />
      <div className={`countdown__box`}>
        <h1 className="countdown__title">{title[state.type]}</h1>
        <div id="year" className="year">
          {currentYear[state.type]}
        </div>
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
  );
}
