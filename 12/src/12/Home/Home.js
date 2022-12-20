import { useState } from "react";
import Body from "../Body/Body";
import Header from "../Header/Header";
import "./home.css";
function Home({ defaultTime }) {
    const [time, setTime] = useState(defaultTime ? defaultTime : 0);
    return (
        <div className="container">
            <Header time={time} />
            <Body setTime={setTime} time={time} />
        </div>
    )
}
export default Home