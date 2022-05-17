import React from 'react';
import { connect } from 'react-redux';
import RepresentativeCard from './RepresentativeCard.js';

const ResultsCard = ({ district }) => {
    
    const repsCards = district[0].current_legislators.length > 0 ? 
        district[0].current_legislators.map(rep => <RepresentativeCard key={rep.id} rep={rep} />) : <div />
    
    return(
        <div className="results">
            <div className="row">
                <h3>{district[0].name}</h3>
                { repsCards }
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