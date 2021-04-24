import React, {Component} from "react";
import {withRouter} from "react-router-dom";


class Post extends Component{
    constructor(props) {
        super(props);

    }



    render() {
        console.log(this.props.match.params.id)
        return(
            <div>
                ваыва
            </div>
        )
    }
}

export default withRouter(Post);