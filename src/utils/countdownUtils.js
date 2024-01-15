export const calculateTime = function (selectDate, state){
    const currentDate = new Date()
    const inputDate = new Date(selectDate)

    const date = {
        nextDate: new Date (currentDate.getFullYear(), inputDate.getMonth(), inputDate.getDate()),
        nextNewYear: new Date(`01-01-${currentDate.getFullYear()+1}`),
        nextWomenDay: new Date(`03-08-${currentDate.getFullYear()}`),
    }

    if ((state === 'nextDate' || state === 'nextWomenDay') && currentDate > date[state]){
        date[state].setFullYear(currentDate.getFullYear() + 1)
    }

    const waitingTime = Math.floor(date[state] - currentDate)

    const daysLeft = Math.floor(waitingTime / 1000 / 60 / 60/ 24);

    const hoursLeft = Math.floor(waitingTime / 1000 / 60 / 60) % 24;

    const minutesLeft = Math.floor(waitingTime / 1000 / 60) % 60;

    const secondLeft = Math.floor(waitingTime / 1000) % 60;

    return {
        daysLeft,
        hoursLeft,
        minutesLeft,
        secondLeft,
    }
}
