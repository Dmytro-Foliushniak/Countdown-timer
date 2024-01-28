export const FIRST_HREF = '/set-date'
export const SECOND_HREF = '/countdown'

export const linkProp = [
  {
    name: "Дня Народженння",
    typeName: "birthday",
    classes: "rootView__link-birthColor",
    href: FIRST_HREF,
  },
  {
    name: "Нового Року",
    classes: "rootView__link-newYearColor",
    typeName: "newYear",
    dateName: "nextNewYear",
    href: SECOND_HREF,
  },
  {
    name: "Річниці",
    classes: "rootView__link-anniColor",
    typeName: "anniversary",
    href: FIRST_HREF,
  },
  {
    name: "8-го березня",
    classes: "rootView__link-wDayColor",
    typeName: "womenDay",
    dateName: "nextWomenDay",
    href: SECOND_HREF,
  },
  {
    name: "Іншої дати",
    classes: "rootView__link-otherColor",
    typeName: "others",
    href: FIRST_HREF,
  },
];