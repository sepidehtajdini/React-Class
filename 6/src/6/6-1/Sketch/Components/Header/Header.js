import Nav from "react-bootstrap/Nav";
import "./header.css";
function Header() {
    return (
        <div className="sketch__header">
            <Nav variant="pills" dir="rtl" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">The silence of the lambs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>Legends of the Fall</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>War and Peace</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>The Revenant</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}
export default Header