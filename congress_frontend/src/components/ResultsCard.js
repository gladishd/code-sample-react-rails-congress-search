import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDistrict } from '../actions/district.js';

const ResultsCard = () => {

    return(
        <div className="card">
            <h3>Your District:</h3>
            <h4>Your Representative:</h4>
            <p>Party:</p>
            <p>Website:</p>
            <p>Address:</p>
            <p>Phone Number:</p>
            <p>Twitter:</p>
            <p>Facebook:</p>
            <p>Youtube:</p>
            <p>Birthday:</p>
            <h4>Your Senator:</h4>
            <p>Party:</p>
            <p>Website:</p>
            <p>Address:</p>
            <p>Phone Number:</p>
            <p>Twitter:</p>
            <p>Facebook:</p>
            <p>Youtube:</p>
            <p>Birthday:</p>
            <h4>Your Senator:</h4>
            <p>Party:</p>
            <p>Website:</p>
            <p>Address:</p>
            <p>Phone Number:</p>
            <p>Twitter:</p>
            <p>Facebook:</p>
            <p>Youtube:</p>
            <p>Birthday:</p>
        </div>
    )
}

export default ResultsCard;