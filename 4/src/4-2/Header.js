function Header({ text, btn1, btn2, btn3 }) {
    return (
        <div className="header">
            <div className="headName">{text}</div>
            <div className="headBtn">
                <button className="btn">{btn1}</button>
                <button className="btn">{btn2}</button>
                <button className="btn">{btn3}</button>
            </div>
        </div>
    )
}
export default Header