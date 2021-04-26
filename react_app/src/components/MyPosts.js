import React, {Component} from "react";


class MyPosts extends Component{

    componentWillMount() {
        if(localStorage.getItem('Authorization') == null){
            this.props.history.push('/')
        }
    }

    render() {
        return(
            <div>
                MyPosts
            </div>
        )
    }
}

export default MyPosts;