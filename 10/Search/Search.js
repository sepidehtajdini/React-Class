import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Search.css";
function Search() {
    const [isLoading, setIsLoading] = useState(true);
    const [postBody, setPostBody] = useState([]);
    const [postTitle, setPostTitle] = useState([]);
    const { query } = useParams();
    useEffect(() => {
        const foundPosts = [];
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((res) => {
                res.map((jsonPost) => {
                    if (jsonPost.body.includes(query)) {
                        const highlightedBody = jsonPost.body.replaceAll(query,
                            `<strong style="background-color:red">${query}</strong>`);
                        foundPosts.push(jsonPost.title, highlightedBody);
                        setPostBody((item) => [...item, jsonPost.title, highlightedBody]);
                        setIsLoading(false);
                    }
                    if (jsonPost.title.includes(query)) {
                        const highlightedTitle = jsonPost.title.replaceAll(query,
                            `<strong style="background-color:yellow">${query}</strong>`);
                        foundPosts.push(highlightedTitle);
                        setPostTitle((item) => [...item, highlightedTitle]);
                        setIsLoading(false);
                    }
                })
            })
    })
    if (isLoading) return <div className="spinner">Please Wait...</div>
    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: `${postTitle}` }} />
            <div dangerouslySetInnerHTML={{ __html: `${postBody}` }} />
        </div>
    )
}
export default Search