import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import {Form} from "react-bootstrap";
import {withRouter} from "react-router-dom";


import "../styles/Authorization.css"


import axios from "axios";


/*function AuthForm (props){
    console.log(props)
    if (props.is_sing_in) {
        return (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" onClick={this.handleChange}>
                    Submit
                </Button>
            </Form>
        );
    }
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" onChange={(e) => props.this.setState({name:e.target.value})}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick={this.handleChange}>
                Submit
            </Button>
        </Form>
    );
}*/


class Authorization extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            name:"",
            password:"",
            is_sing_in: true,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSend = this.handleSend.bind(this);
    }
    handleChange(event) {
        this.setState({is_sing_in: !this.state.is_sing_in})
    }

    handleSend() {
        let url = '/api/registration';
        if(this.state.is_sing_in){
            url = '/api/login'
        }
        axios({
            method: 'post',
            url: url,
            data: {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }
        })
            .then(res =>{
                console.log(res)
                localStorage.setItem('user', res.data.user);
                localStorage.setItem('Authorization', res.headers.authorization);
                this.props.history.push('/')
                /*let user = res.data.user;
                let token = res.headers.token;
                console.log(user)
                console.log(token)*/
            })
            .catch(error =>{
                if (error.response) {
                    // client received an error response (5xx, 4xx)
                    alert(error.response.status + " : " + error.response.data.error)
                } else if (error.request) {
                    alert(error)
                    console.log(error)
                } else {
                    // anything else
                    alert(error)
                    console.log(error)
                }
            })
    }


    render(){
        let authForm = ""
        if(this.state.is_sing_in){
            authForm = <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.setState({email:e.target.value})}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => this.setState({password:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" onClick={this.handleSend}>
                    Submit
                </Button>
                <Button variant="primary" onClick={this.handleChange}>
                    I wont sing up
                </Button>
            </Form>

        }
        else{
            authForm = <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.setState({email:e.target.value})}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={(e) => this.setState({name:e.target.value})}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => this.setState({password:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" onClick={this.handleSend}>
                    Submit
                </Button>
                <Button variant="primary" onClick={this.handleChange}>
                    I wont to sing in
                </Button>
            </Form>
        }
        return(
            <div id="contentAuth">
                {authForm}
            </div>
        )
    }
}
export default withRouter(Authorization);