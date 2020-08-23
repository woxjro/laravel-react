import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import About from "./About";
import User from "./User";
import Top from "./Top";

export default function App() {
    return (
        <Router>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">react-router-dom</div>
                            <div className="card-body">
                                <div className="column">
                                    <Link to="./about">
                                        <li>about</li>
                                    </Link>
                                    <Link to="./user">
                                        <li>user</li>
                                    </Link>
                                </div>

                                <Switch>
                                    <Route path="/" exact component={Top} />
                                    <Route path="/about" component={About} />
                                    <Route path="/user" component={User} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
