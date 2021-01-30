const Button = ({text, bgColor, onClick}) => {

    return (
        <button className="btn" style={{backgroundColor: bgColor}} onClick={onClick}>{text}</button>
    )
}

Button.defaultProps = {
    text: "إرسال",
    backgroundColor: "blue"
}

export default Button
