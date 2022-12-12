import Cards from "./Cards.js";
import Table from "./Table.js";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Jodie from "../../img/jodie-2.jfif";
import Anthony from "../../img/anthony.jfif";
import Scott from "../../img/scott glenn.jfif";
import Ted from "../../img/ted levine.jfif";
import "./content.css";
function Content() {
    return (
        <div className="sketch__content">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Artists</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Pictures</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Table className="sketch__table" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Cards title="Jodie Foster" text="Clarice Starling" pic={Jodie} />
                                <Cards title="Anthony Hopkins" text="Dr. Hannibal Lecter" pic={Anthony} />
                                <Cards title="Scott Glenn" text="Jack Crawford" pic={Scott} />
                                <Cards title="Ted Levine" text="Jame 'Buffalo Bill' Gumb" pic={Ted} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}
export default Content