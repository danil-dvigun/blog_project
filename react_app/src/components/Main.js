import React, {Component} from "react";
import { Switch, Route } from "react-router-dom";
import {Button, Col, Container, Jumbotron, Row} from "react-bootstrap";


import "../styles/Main.css"


import Header from "./Header"
import MyPosts from "./MyPosts";
import AddPost from "./AddPost";
import Posts from "./Posts";
import Post from "./Post"
import {getUser} from "../js/actions";
import {connect} from "react-redux";


function mapDispatchToProps(dispatch) {
    return {
        getUser: () => dispatch(getUser())
    };
}

class Main extends Component{

    componentWillMount() {
        this.props.getUser();
    }

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
                                <Route exact path="/posts/:user" component={MyPosts} />
                                <Route  exact path="/addPost" component={AddPost} />
                                <Route  exact path="/post/:id" component={Post} />
                            </Switch>


                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const UserForm = connect(
    null,
    mapDispatchToProps
)(Main);

export default UserForm;