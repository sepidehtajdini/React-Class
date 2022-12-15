import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css";
function Home() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate("");
    function handleInput(e) {
        setQuery(e.target.value);
    }
    function handleFormSubmit(e) {
        e.preventDefault();
        navigate(`/post/${query}`);
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <h3> فرم جستجو</h3>
            <input placeholder="متن را برای جستجو وارد کنید" onChange={handleInput} autoFocus />
            <Link className="link-btn" to={`/search/${query}`} >جستجو</Link>
        </form>
    )
}
export default Home;