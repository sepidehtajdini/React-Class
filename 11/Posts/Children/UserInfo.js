import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
export default function UserInfo() {
    const [userInfo, setUserInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json())
            .then((res) => {
                setUserInfo({
                    name: res.name,
                    username: res.username,
                    email: res.email,
                })
                setIsLoading(false);
            })
    }, [id])
    if (isLoading) return (<div className="loading">Loading...</div>)
    return (
        <div>
            Author's info:
            <h3>Name: {userInfo.name}</h3>
            <h3>username: {userInfo.username}</h3>
            <h3>email: {userInfo.email}</h3>
        </div>
    )
}