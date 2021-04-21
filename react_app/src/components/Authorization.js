import React, {Component} from "react";
import {LinkContainer} from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";


class Authorization extends Component{

    render(){
        return(
            <div>
                Authorization
                <ButtonToolbar className="custom-btn-toolbar">
                    <LinkContainer to="/">
                        <Button>back</Button>
                    </LinkContainer>
                </ButtonToolbar>
            </div>
        )
    }
}
export default Authorization;