import { useEffect, useState } from "react"
import { useParams, Outlet } from "react-router-dom";
import "./style.css";
export default function Comments() {
    const [comments, setComments] = useState([]);
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const foundComments = [];
        fetch("https://jsonplaceholder.typicode.com/comments").then((res) => res.json())
            .then((res) => {
                setComments(res);
                for (const comment of comments) {
                    if (comment.postId == id) {
                        foundComments.push({
                            name: comment.name,
                            email: comment.email,
                            body: comment.body
                        });
                        setComments(foundComments);
                        setIsLoading(false);
                    }
                }
            })
    })
    if (isLoading) return <div className="loading">Loading...</div>
    return (
        <div>
            {comments.map((comment) => {
                <div className="main">
                    <div>{comment.name}</div>
                    <div>{comment.email}</div>
                    <div>{comment.body}</div>
                </div>
            })
            }
        </div>
    )
}