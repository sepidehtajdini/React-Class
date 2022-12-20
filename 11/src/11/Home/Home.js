import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
export default function Home() {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [type, setType] = useState(null);
    function handleFormSubmit(e) {
        e.preventDefault();
        if (type === null || id === "") {
            return
        }
        else {
            navigate(`/posts/${id}/${type}/${id}`);
        }
    }
    function handleInput(e) {
        const regExp = /^[0-9]*$/.test(e.target.value);
        if (regExp) {
            setId(e.target.value);
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <h3>صفحه جستجو</h3>
            <input onChange={handleInput} value={id} type="number" placeholder="مورد نظر را وارد کنید id" />
            <div>
                <label htmlFor="userInfos">Search in User-infos</label>
                <input checked={type === "userInfos" ? true : false} type="radio" name="userInfos" value="userInfos" onChange={() => setType("userInfos")} />
            </div>
            <div>
                <label htmlFor="comments"> Search in Comments</label>
                <input checked={type === "comments" ? true : false} type="radio" name="comments" value="comments" onChange={() => setType("comments")} />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}