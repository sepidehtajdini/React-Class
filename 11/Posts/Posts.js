import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import "./posts.css";
export default function Posts() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json())
        .then((res) => {
                setPost(res)
            })
    })
    if (post === null) return <div className="spinner">Loading... Please wait</div>
    return (
        <div className="post">
            <h2>Post number {id}</h2>
            <h3>title: {post.title}</h3>
            <div>
                <h4>content:</h4>
                <p>{post.body}</p>
            </div>
            <hr />
            <Outlet />
        </div>
    )
}