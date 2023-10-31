const iconTypes = {
    "check": (color) => <i className={`fa-sharp fa-solid ${color} fa-check`}></i>,
    "delete": (color) => <i className={`fa-sharp fa-solid ${color} fa-xmark`}></i>
}
function TodoIcon ({ type, onClick, color}) {
    return (
        <span 
            onClick={onClick}
            className={`icon-${type}`}
            >
            {iconTypes[type](color)}
        </span>
    )
}
export { TodoIcon }