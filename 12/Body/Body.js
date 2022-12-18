import Button from "../Button/Button";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./body.css";
export default function Body({ setTime }) {
    const interval = useRef(null);
    const userPrompt = useRef(0);
    const navigate = useNavigate();
    function handleStart() {
        clearInterval(interval.current);
        interval.current = setInterval(() => {
            setTime((time) => {
                if (time === 0) {
                    clearInterval(interval.current);
                    return 0
                }
                return time - 1;
            })
        }, 1000)
    }
    function handleChange() {
        userPrompt.current = prompt("Enter the number!");
        setTime(userPrompt.current)
    }
    function handleRestart() {
        setTime(userPrompt.current);
        handleStart();
    }
    function handleShare() {
        navigate(`/time/${userPrompt.current}`);
    }
    return (
        <div className="container">
            <Button text="Start" onClick={handleStart} className="green-btn" />
            <Button text="Change" onClick={handleChange} className="black-btn" />
            <Button text="Pause" onClick={() => clearInterval(interval.current)} className="black-btn" />
            <Button text="Reset" onClick={() => setTime(0)} className="red-btn" />
            <Button text="Share" onClick={handleShare} className="black-btn" />
            <Button text="Restart" onClick={handleRestart} className="black-btn" />
        </div>
    )
}