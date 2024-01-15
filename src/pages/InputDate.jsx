import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {StyledEngineProvider} from "@mui/material";
import '../styles/InputDate.css'
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import Alert from '@mui/material/Alert';
import {HomeButton} from "../components/HomeButton";


 export default function InputDate ({onChange}) {
     const {state} = useLocation()
     const [date, setDate] = useState(null)
     const [isEmptyInput, setIsEmptyInput] = useState(false);

     const inputChange = (newValue) => {
        onChange(newValue)
         setDate(new Date(newValue))
     }

     const typeInput = {
         birthday: 'Введіть дату народження',
         anniversary: 'Введіть дату початку вашої річниці',
         others: 'Введіть дату'
    }

     const disableFlagFuture = state.type === 'birthday' || state.type === 'anniversary';
     const disableFlagPast = state.type === 'others'

     let disableFlag = false

     const today = new Date().setHours(0, 0, 0, 0)

     const isToday = function (date){
         const inputDate = new Date(date).setHours(0, 0, 0, 0)
         return inputDate === today
     }

     const sendToPage = function (){
         if (!date){
             setIsEmptyInput(true)
         } else {
         setIsEmptyInput(false)
         }
     }

     const transferToPage = date ? '/date/countdown/' : '#';

    return (
        <div className={`inputDate`}>
            <HomeButton/>
            <div className='inputDate__box'>
                <h1 className='inputDate__title'>{typeInput[state.type]}</h1>
                <form className='inputDateForm' action="project/src/components">
                    <StyledEngineProvider injectFirst>

                        {date >= today && (state.type === 'birthday' || state.type === 'anniversary') && (
                            <>
                                {disableFlag = true}
                                <Alert className='inputDate__error' severity="error">Введіть дату меншу за сьогоднішню.</Alert>
                            </>
                        )}

                        {(date <= today && date) && (state.type === 'others') && (
                            <>
                                {disableFlag = true}
                                <Alert className='inputDate__error' severity="error">Введіть дату більшу за сьогоднішню.</Alert>
                            </>
                        )}

                        {!date && isEmptyInput &&(
                            <>
                                <Alert className='inputDate__error' severity="error">Заповніть дату</Alert>
                            </>
                        )}

                        <DatePicker
                            shouldDisableDate={isToday}
                            disableFuture={disableFlagFuture}
                            disablePast={disableFlagPast}
                            className='calendar inputDateForm__box'
                            format = 'DD-MM-YYYY'
                            onChange={inputChange}/>
                    </StyledEngineProvider>
                    <Link
                        onClick={()=> sendToPage()}
                        className={`inputDate__link ${state.type + '-gradient'} ${disableFlag ? 'inputDate__link-disable': null}`}
                        to={transferToPage}
                        state={{type: `${state.type}`, date: 'nextDate'}}>
                        Розрахувати
                    </Link>
                </form>
            </div>
        </div>

    )
}