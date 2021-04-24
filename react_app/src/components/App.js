import React, {Component} from "react";

import "../styles/App.css";
import {Button} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useParams,
    HashRouter,
} from "react-router-dom";

import Authorization from "./Authorization";
import Main from "./Main";
import MyPosts from "./MyPosts";
import AddPost from "./AddPost";
import NoMatch from "./NoMatch";
import Post from "./Post";

class App extends Component{
    render(){
        return(

            <BrowserRouter>
                <div>
                    <Switch>
                        {/*<Route exact path="/">
                            <Main />
                        </Route>*/}
                        <Route path="/authorization">
                            <Authorization />
                        </Route>
                        <Route path="/NotFound">
                            <NoMatch />
                        </Route>
                        <Route path="/">
                            <Main />
                        </Route>
                        <Route path="/post/:id">
                            <Post />
                        </Route>
                        {/*<Route  path="/" render={() => (
                            <div>
                                <Route  path="/" component={Main} />
                                <Route  path="/myPosts" component={MyPosts} />
                                <Route  path="/addPost" component={AddPost} />
                            </div>
                        )}/>*/}

                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
