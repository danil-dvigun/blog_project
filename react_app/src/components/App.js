import React, {Component} from "react";

import "../styles/App.css";
import {Button} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import {BrowserRouter} from "react-router-dom";
import { Switch, Route } from 'react-router';
import Authorization from "./Authorization";
import Main from "./Main";

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route
                            exact
                            path='/'
                            render={(props) => <Main {...props}/>}
                        />
                        <Route path='/authorization' component={Authorization}/>
                    </Switch>
                </div>
            </BrowserRouter>

        )
    }
}

export default App;
