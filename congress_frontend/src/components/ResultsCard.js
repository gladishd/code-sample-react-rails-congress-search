import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const ResultsCard = () => {

    return(
        <div className="results">
            <div className="row">
            <h3>Your District:</h3>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Your Representative:</h5>
                    <p className="card-text">Party:</p>
                    <p className="card-text">Website:</p>
                    <p className="card-text">Address:</p>
                    <p className="card-text">Phone Number:</p>
                    <p className="card-text">Twitter:</p>
                    <p className="card-text">Facebook:</p>
                    <p className="card-text">Youtube:</p>
                    <p className="card-text">Birthday:</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Your Senator:</h5>
                    <p className="card-text">Party:</p>
                    <p className="card-text">Website:</p>
                    <p className="card-text">Address:</p>
                    <p className="card-text">Phone Number:</p>
                    <p className="card-text">Twitter:</p>
                    <p className="card-text">Facebook:</p>
                    <p className="card-text">Youtube:</p>
                    <p className="card-text">Birthday:</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Your Senator:</h5>
                    <p className="card-text">Party:</p>
                    <p className="card-text">Website:</p>
                    <p className="card-text">Address:</p>
                    <p className="card-text">Phone Number:</p>
                    <p className="card-text">Twitter:</p>
                    <p className="card-text">Facebook:</p>
                    <p className="card-text">Youtube:</p>
                    <p className="card-text">Birthday:</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ResultsCard;