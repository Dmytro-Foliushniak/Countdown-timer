import {Link} from "react-router-dom";
import '../styles/root.css'

export default function Root () {

    return (
        <div className='rootView'>
            <div className='rootView__box'>
                <h1 className='rootView__title' >Дізнайтеся скільки залишилось до:</h1>
                <ul className='rootView__list'>
                    <li className='rootView__item'>
                        <Link
                            className='rootView__link rootView__link-birthColor'
                            to={`date`} state={{type: 'birthday'}}>
                            Дня Народження
                        </Link>
                    </li>
                    <li className='rootView__item'>
                        <Link
                            className='rootView__link rootView__link-newYearColor'
                            to={`/date/countdown/`}
                            state={{type: 'newYear', date: 'nextNewYear'}}>
                            Нового року
                        </Link>
                    </li>
                    <li className='rootView__item'>
                        <Link
                            className='rootView__link rootView__link-anniColor'
                            to={`date`}
                            state={{type: 'anniversary'}}>
                            Річниці
                        </Link>
                    </li>
                    <li className='rootView__item'>
                        <Link
                            className='rootView__link rootView__link-wDayColor'
                            to={`/date/countdown/`}
                            state={{type: 'womenDay', date: 'nextWomenDay' }}>
                            8-го березня
                        </Link>
                    </li>
                    <li className='rootView__item'>
                        <Link
                            className='rootView__link rootView__link-otherColor'
                            to={`date`}
                            state={{type: 'others'}}>
                            Іншої дати</Link>
                    </li>
                </ul>
            </div>
        </div>
    )

}