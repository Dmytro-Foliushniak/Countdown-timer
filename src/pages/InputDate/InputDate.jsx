import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { StyledEngineProvider } from "@mui/material";
import Alert from "@mui/material/Alert";
import dayjs from "dayjs";
import { HomeButton } from "../../components/HomeButton";
import "./InputDate.css";

export default function InputDate() {
  const { state } = useLocation();
  const [date, setDate] = useState(null);
  const [isEmptyInput, setIsEmptyInput] = useState(false);
  const navigate = useNavigate();

  const inputChange = (newValue) => {
    setDate(dayjs(newValue).format("YYYY/MM/DD"));

    setIsEmptyInput(false);
  };

  const typeInput = {
    birthday: "Введіть дату народження",
    anniversary: "Введіть дату початку вашої річниці",
    others: "Введіть дату",
  };

  const disableFlagFuture = state.type === "birthday" || state.type === "anniversary";
  const disableFlagPast = state.type === "others";

  const isToday = function (date) {
    const dateInCalendar = dayjs(date).startOf("day");
    const today = dayjs().startOf("day");
    return today.isSame(dateInCalendar);
  };

  const [errorText, setErrorText] = useState("");
  const checkDateBeforeTransfer = function (e) {
    e.preventDefault();
    const newToday = dayjs().format("YYYY/MM/DD");
    if (
      date >= newToday &&
      (state.type === "birthday" || state.type === "anniversary")
    ) {
      setIsEmptyInput(true);
      setErrorText("Введіть дату меншу за сьогоднішню.");
    } else if (date <= newToday && date && state.type === "others") {
      setIsEmptyInput(true);
      setErrorText("Введіть дату більшу за сьогоднішню.");
    } else if (!date) {
      setIsEmptyInput(true);
      setErrorText("Заповніть дату");
    } else {
      navigate(`/set-date/countdown?date=${date}`, {
        state: { type: state.type, date: "nextDate" },
      });
    }
  };

  return (
    <div className={`inputDate`}>
      <HomeButton />
      <div className="inputDate__box">
        <h1 className="inputDate__title">{typeInput[state.type]}</h1>
        <form className="inputDateForm" action="project/src/components">
          <StyledEngineProvider injectFirst>
            {isEmptyInput && (
              <>
                <Alert className="inputDate__error" severity="error">
                  {errorText}
                </Alert>
              </>
            )}
            <DatePicker
              shouldDisableDate={isToday}
              disableFuture={disableFlagFuture}
              disablePast={disableFlagPast}
              className="calendar inputDateForm__box"
              format="DD-MM-YYYY"
              onChange={inputChange}
            />
          </StyledEngineProvider>
          <button
            type={"submit"}
            className={`inputDate__link ${state.type + "-gradient"}`}
            onClick={checkDateBeforeTransfer}
          >
            Розрахувати
          </button>
        </form>
      </div>
    </div>
  );
}
