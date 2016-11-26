import React, { Component } from 'react';
import Select2 from 'react-select2-wrapper';

export default class Configuration extends Component {
    render() {
        return (
            <div className="col-xs-2">
                <div className="row">
                    <h1>Configurations</h1>
                </div>
                <div className="row">
                    <Select2 multiple data={['bug', 'feature', 'documents', 'discussion']} options={{ placeholder: 'search by tags', }} />
                </div>
            </div>
        );
    }
}