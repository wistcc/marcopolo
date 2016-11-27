import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Configuration } from './components/configuration';
import Map from './components/map';
import $ from 'jquery';

let inProgressRequest = false;
export default class App extends Component {
    constructor() {
        super();
        $.get('/api/countries').then(data => {
            const countries = Object.keys(data.countries)
                .map(k => ({ id: k, text: data.countries[k].description }));
            this.setState({ countries: countries });
        });
        this.state = {
            countries: [],
            countryCodes: [],
            selectedCountry: ''
        };
    }

    _onSelect(evt) {
        if (inProgressRequest)
            return;

        inProgressRequest = true;
        const country = $(evt.target).val();
        this.state.selectedCountry = country;
        $.get(`/api/requirements/${country}`).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ countryCodes: data.countries });
            }
            inProgressRequest = false;
        });
    }

    render() {
        return (
            <div id="wrapper">
                <Configuration countries={this.state.countries} onSelect={ e => this._onSelect(e)} selectedCountry={this.state.selectedCountry} />

                <div id="page-content-wrapper">
                    <div className="content-header">
                        <h1>
                            <a id="menu-toggle" href="#" className="btn-menu toggle">
                                <i className="fa fa-bars"></i>
                            </a>
                        </h1>
                    </div>

                    <div className="inset">
                        <Map countryCodes={this.state.countryCodes}/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />, document.getElementById('mainContainer'));
