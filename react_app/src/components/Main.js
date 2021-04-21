import React, {Component} from "react";
import { Switch, Route } from "react-router-dom";
import {Button, Col, Container, Jumbotron, Row} from "react-bootstrap";


import "../styles/Main.css"


import Header from "./Header"
import MyPosts from "./MyPosts";
import AddPost from "./AddPost";
import Posts from "./Posts";


class Main extends Component{

    render(){

        return(
            <div>
                <Container fluid id="container">
                    <Row>
                        <Col id="col">
                            <Header />
                        </Col>
                    </Row>
                    <Row id="main">
                        <Col id="col" xs={2}>
                            1 of 3

                        </Col>
                        <Col id="col">
                            <Switch>
                                <Route exact path="/" component={Posts} />
                                <Route exact path="/myPosts" component={MyPosts} />
                                <Route  exact path="/addPost" component={AddPost} />
                            </Switch>


                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Main;