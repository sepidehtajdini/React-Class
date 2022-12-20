import Home from "./Home/Home";
import { useParams } from "react-router-dom";
function SavedTime() {
    const { timer } = useParams();

    return (
        <Home defaultTime={timer} />
    )
}
export default SavedTime;