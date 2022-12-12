import Counters from "./Counters.js";
import Button from "react-bootstrap/Button";
import "./header.css";
function Header({ removeCounter, addCounter, addTodo, removeAll }) {

    return (
        <div className="todo__header">
            <div className="todo__header__counters">
                <Counters text="Tasks" value={addCounter} />
                <Counters text="Removed Tasks" value={removeCounter} />
            </div>
            <div className="todo__header__btns">
                <Button variant="success" onClick={addTodo}>Add task</Button>
                <Button variant="danger" onClick={removeAll}>Remove all</Button>
            </div>
        </div>
    )
}

export default Header