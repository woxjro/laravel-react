import React from "react";
import ReactDOM from "react-dom";

export default function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            あああーーーーー！！！
                        </div>

                        <div className="card-body">hi!!!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
