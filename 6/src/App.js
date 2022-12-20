import { useState, useEffect } from "react";
import Todo from "./6/6-1/Todo/Todo.js";
import Sketch from "./6/6-1/Sketch/Sketch.js";
import Post from "./6/6-2/Post.js";
function App() {
  const [postList, setPostList] = useState([]);
  const [bookmarkId, setBookmarkId] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json()).then((response) => {
      setPostList(response);
    })
  })
  return (
    <div>
      <Todo />
      <Sketch />
      <hr />
      <br />
      <div>
        {postList.map((post) =>
          <Post
            id={post.id}
            title={post.title}
            body={post.body}
            bookmarkId={bookmarkId}
            setBookmarkId={setBookmarkId}
          />)}
      </div>
    </div>
  );
}
export default App;