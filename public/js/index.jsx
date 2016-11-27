import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Configuration from './components/configuration';
import Map from './components/map';

export default class App extends Component {
    render() {
        return (
            <div id="wrapper">
                <Configuration />

                <div id="page-content-wrapper">
                    <div className="content-header">
                        <h1>
                            <a id="menu-toggle" href="#" className="btn-menu toggle">
                                <i className="fa fa-bars"></i>
                            </a>
                        </h1>
                    </div>

                    <div className="inset">
                        <Map/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('mainContainer'));