import { Link } from "react-router-dom";
import { linkProp } from "./data";
import "./root.css";

export default function Root() {
  return (
    <div className="rootView">
      <div className="rootView__box">
        <h1 className="rootView__title">Дізнайтеся скільки залишилось до:</h1>
        <ul className="rootView__list">
          {linkProp.map(({ name, classes, typeName, dateName, href },index) => (
            <li key={index} className="rootView__item">
              <Link
                className={`rootView__link ${classes}`}
                to={href}
                state={{ type: typeName, date: dateName }}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
