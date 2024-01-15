import {Link} from "react-router-dom";
import './HomeButton.css'
export function HomeButton() {
    return (
        <div className={`home_box`}>
            <Link className={`home_btn`} to={`/`}>
                <img src='/img/house-solid.svg' alt='img'/>
            </Link>
        </div>

    )
}