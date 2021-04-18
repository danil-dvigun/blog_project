import React, {Component} from "react";
import {LinkContainer} from "react-router-bootstrap";
import {Button, Col, Container, Row} from "react-bootstrap";
import "../styles/Main.css"

class Main extends Component{

    render(){
        return(
            <div>
                <Container fluid>
                    <Row id="row">
                        <Col id="col">1 of 3</Col>

                    </Row>
                    <Row id="row">
                        <Col id="col">1 of 3</Col>
                        <Col id="col">2 of 3 (wider)</Col>
                    </Row>
                </Container>
                {/*<div>
                    Main
                </div>

                <h1>
                    Me React App!
                    <LinkContainer to="/authorization">
                        <Button>Home</Button>
                    </LinkContainer>
                </h1>*/}
            </div>
        )
    }
}
export default Main;