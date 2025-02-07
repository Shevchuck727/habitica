import "./Button.css"

function Button({text, type, onClick, tType}){
    return <button className={type} type={tType} onClick={onClick}>{text}</button>;
}

export default Button;