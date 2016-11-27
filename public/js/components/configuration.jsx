import React, { Component } from 'react';
import Select2 from 'react-select2-wrapper';

export default class Configuration extends Component {
    render() {
        return (
            <div id="sidebar-wrapper">
                <ul className="nav">
                    <li>
                        <h3 className="selectTitle">Choose your passport</h3>
                        <Select2 data={['bug', 'feature', 'documents', 'discussion']} options={{ placeholder: 'search by tags', }} />
                    </li>
                </ul>
            </div>
        );
    }
}