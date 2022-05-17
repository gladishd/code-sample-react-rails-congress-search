import React from 'react';
import { connect } from 'react-redux';
import RepresentativeCard from './RepresentativeCard.js';

const ResultsCard = () => {

    return(
        <div className="results">
            <div className="row">
            <h3>Your District:</h3>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        district: state.districtReducer
    }
}

export default connect(mapStateToProps)(ResultsCard);