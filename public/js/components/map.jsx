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
                authorHasTraveledTo: "#fa0fa0"
            },
            data: {
                USA: { fillKey: "authorHasTraveledTo" },
                JPN: { fillKey: "authorHasTraveledTo" },
                ITA: { fillKey: "authorHasTraveledTo" },
                CRI: { fillKey: "authorHasTraveledTo" },
                KOR: { fillKey: "authorHasTraveledTo" },
                DEU: { fillKey: "authorHasTraveledTo" },
                DOM: { fillKey: "authorHasTraveledTo" },
            }
        });
    }

    render() {
        return (
            <div className="row">
                <div id="mapContainer"></div>
            </div>
        );
    }
}