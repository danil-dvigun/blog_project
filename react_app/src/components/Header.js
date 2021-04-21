import React, {Component} from "react";

import "../styles/Header.css"
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import {Link} from "react-router-dom";

class Header extends Component{
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
                        <LinkContainer to="/addPost">
                            <Button>Add post</Button>
                        </LinkContainer>
                        <LinkContainer to="/NotFound">
                            <Button>Add post</Button>
                        </LinkContainer>
                    </ButtonToolbar>
                </div>

                <div id="rightBlock">
                    <ButtonToolbar className="custom-btn-toolbar">
                        <LinkContainer to="/authorization">
                            <Button>Sing in / Sing up</Button>
                        </LinkContainer>
                    </ButtonToolbar>
                </div>
            </div>
        )
    }
}

export default Header;