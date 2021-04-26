import React, {Component} from "react";
import { connect } from "react-redux";
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";

import "../styles/Posts.css"
import axios from "axios";
import {getPosts} from "../js/actions";

const mapStateToProps = state => {
    return { posts: state.posts };
};

function mapDispatchToProps(dispatch) {
    return {
        getPosts: () => dispatch(getPosts())
    };
}

class Posts extends Component{
   /* constructor(props) {
        super(props);
    }*/

    componentDidMount() {
        this.props.getPosts();
        /*axios.get(`api/posts`)
            .then(res => {
                console.log(res)
                console.log(res.data)
                this.setState({
                    posts: res.data
                })
            }).catch(error =>{
                if (error.response) {
                    // client received an error response (5xx, 4xx)
                } else if (error.request) {
                    // client never received a response, or request never left
                } else {
                    // anything else
                }
        })*/
    }

    render(){
       /* console.log("тут")
        console.log(this.props.posts)*/
        let list = <p>No one posts</p>;
        if(this.props.posts.length !== 0){
            list = this.props.posts.map((post, index) =>
                <Card style={{ width: '18rem' }} className="card" key={index}>
                    <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_178f42042cc%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2C%26quot%3BLiberation%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_178f42042cc%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.203125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            {post.description}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            );
        }
        return(
            <div id="content">
                {list}
            </div>
        )
    }
}
const ListOfPosts = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default ListOfPosts;