import "./post.css";
function Post({ title, body, id, bookmarkId, setBookmarkId }) {
    let bookmarkClass
    function ChangeBookmark() {
        setBookmarkId(id)
    }
    if (bookmarkId === id) {
        bookmarkClass = "post__bookmark"
    }
    return (
        <div onClick={ChangeBookmark} className={bookmarkClass}>
            <div>{id}</div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    )
}
export default Post