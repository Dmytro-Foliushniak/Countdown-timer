import dayjs from "dayjs";

export const calculateTime = function (selectDate, state) {
  const currentDate = dayjs();

  let newDate = currentDate
    .year(currentDate.year())
    .month(selectDate.month())
    .date(selectDate.date());

  if (currentDate.isAfter(newDate) && state === "nextDate") {
    newDate = newDate.add(1, "year");
  }

  const updateYear = currentDate.isAfter(`03/08/${currentDate.year()}`)
    ? currentDate.add(1, "year")
    : currentDate.year();

  const date = {
    nextDate: newDate,
    nextNewYear: dayjs(`01/01/${currentDate.year() + 1}`),
    nextWomenDay: dayjs(`03/08/${updateYear}`),
  };

  if (
    (state === "nextDate" || state === "nextWomenDay") &&
    currentDate > date[state]
  ) {
    date[state].year(currentDate.year() + 1);
  }

  const waitingTime = Math.floor(date[state].startOf("day") - currentDate);

  const daysLeft = Math.floor(waitingTime / 1000 / 60 / 60 / 24);

  const hoursLeft = Math.floor(waitingTime / 1000 / 60 / 60) % 24;

  const minutesLeft = Math.floor(waitingTime / 1000 / 60) % 60;

  const secondLeft = Math.floor(waitingTime / 1000) % 60;

  return {
    daysLeft,
    hoursLeft,
    minutesLeft,
    secondLeft,
  };
};
