import React, {Component} from "react";
import { connect } from "react-redux";
import { addPost } from "../js/actions/index";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {withRouter} from "react-router-dom";


function mapDispatchToProps(dispatch) {
    return {
        addPost: post => dispatch(addPost(post))
    };
}

class AddPost extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            description:"",
            text:"",
        }

        this.handleSend = this.handleSend.bind(this);
    }

    componentWillMount() {
        if(localStorage.getItem('Authorization') == null){
            this.props.history.push('/')
        }
    }


    handleSend() {
        /*this.setState({is_sing_in: !this.state.is_sing_in})*/
        let posts = {
            title: this.state.title,
            description: this.state.description,
            text: this.state.text
        }
        this.props.addPost({ title: this.state.title,
            description: this.state.description,
            text: this.state.text });
        axios({
            method: 'post',
            url: '/api/post',
            data: {
                title: this.state.title,
                description: this.state.description,
                text: this.state.text
            },
            headers:{
                Authorization: localStorage.getItem('Authorization')
            }

        }).then(res =>{
            console.log(res)
            this.props.history.push('/')
            /*localStorage.setItem('user', res.data.user);
            localStorage.setItem('Authorization', res.headers.Authorization);
            this.props.history.push('/')*/
            /*let user = res.data.user;
            let token = res.headers.token;
            console.log(user)
            console.log(token)*/
        })
            .catch(error =>{
                if (error.response) {
                    // client received an error response (5xx, 4xx)
                    alert(error.response.status + " : " + (error.response.data.error === undefined ? error.response.statusText : error.response.data.error))
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

    render() {
        return(
            <div>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" onChange={(e) => this.setState({title:e.target.value})}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" onChange={(e) => this.setState({description:e.target.value})}/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Text</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={(e) => this.setState({text:e.target.value})}/>
                    </Form.Group>
                </Form>
                <Button variant="primary" onClick={this.handleSend}>
                    Submit
                </Button>
            </div>
        )
    }
}

const AddForm = connect(
    null,
    mapDispatchToProps
)(AddPost);

export default withRouter(AddForm);