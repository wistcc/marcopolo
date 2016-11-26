import React from 'react';
import ReactDOM from 'react-dom';
import Configuration from './components/configuration';
import Map from './components/map';

ReactDOM.render(
    <div className="row">
        <Configuration/>
        <Map/>
    </div>
    , document.getElementById('mainContainer'));