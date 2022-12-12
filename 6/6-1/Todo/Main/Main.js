import Button from "react-bootstrap/Button";
import "./main.css";
function Main({ removeTodo, tasks }) {
    return (
        <div className="todo__main">
            <ul>{
                tasks.map((allTasks) => <li>
                    <div className="todo__main__tasks">
                        {allTasks} <Button variant="secondary" onClick={() =>
                            removeTodo(allTasks)}>Remove</Button>
                    </div>
                </li>)
            }</ul>
        </div>
    )
}
export default Main