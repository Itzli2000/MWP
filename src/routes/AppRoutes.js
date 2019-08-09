import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// App containers
import LoginContainer from './../views/login/LoginContainer';
import AppFrame from "./../views/appFrame/AppFrame";

const AppRouter = (props) => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/user" render={() =>
                        <AppFrame
                            {...props}
                        />
                    }
                    />
                    <Route exact path="/" render={() =>
                        <LoginContainer
                            {...props}
                        />
                    } />
                    <Route component={() => "404 not found"} />
                </Switch>
            </div>
        </Router>
    );
}

export default AppRouter;