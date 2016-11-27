import React, { Component } from 'react';
import Select2 from 'react-select2-wrapper';

export const Configuration = ({countries, onSelect}) => <div id="sidebar-wrapper">
    <ul className="nav">
        <li>
            <h3 className="selectTitle">Choose your passport</h3>
            <Select2 onSelect={onSelect}
                data={countries} options={{ placeholder: 'Choose' }} />
        </li>
    </ul>
</div>;
