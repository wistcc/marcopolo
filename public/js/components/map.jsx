import React, { Component } from 'react';
import Select2 from 'react-select2-wrapper';
import Datamap from 'datamaps';
let _map = {};

export default class Map extends Component {    
    componentDidMount() {
        _map = new Datamap({
            element: document.getElementById('mapContainer'),
            fills: {
                defaultFill: "#ABDDA4",
                visaNotRequired: "#fa0fa0"
            },
            data: this.props.countryCodes
        });
    }

    componentDidUpdate() {
        _map.updateChoropleth(null, {reset: true});
        _map.updateChoropleth(this.props.countryCodes);
    }

    render() {
        return (
            <div className="row">
                <div id="mapContainer"></div>
            </div>
        );
    }
}