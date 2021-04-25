import React, {Component} from "react";

import "../styles/Header.css"
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return { userName: state.userName };
};

class Header extends Component{
    constructor(props) {
        super(props);

        this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck() {
        if(localStorage.getItem('Authorization') == null){
            alert("You must be logged in to add posts!")
        }
        else{
            this.props.history.push('/addPost')
        }
    }

    render(){
        return(
            <div id="header">
                <div id="leftBlock">
                    <ButtonToolbar className="custom-btn-toolbar">
                        <LinkContainer to="/">
                            <Button>Home</Button>
                        </LinkContainer>
                        <LinkContainer to="/myPosts">
                            <Button>My posts</Button>
                        </LinkContainer>
                        <Button onClick={this.handleCheck}>Add post</Button>
                        <LinkContainer to="/post/1">
                            <Button>My</Button>
                        </LinkContainer>
                        {/*<LinkContainer to="/NotFound">
                            <Button>Add post</Button>
                        </LinkContainer>*/}
                    </ButtonToolbar>
                </div>

                <div id="rightBlock">

                    <ButtonToolbar className="custom-btn-toolbar">
                        <span>Hello, {this.props.userName}</span>
                        <LinkContainer to="/authorization">
                            <Button>Sing in / Sing up</Button>
                        </LinkContainer>
                    </ButtonToolbar>
                </div>
            </div>
        )
    }
}

const UserData = connect(mapStateToProps)(Header);

export default withRouter(UserData);