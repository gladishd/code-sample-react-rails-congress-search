import React from 'react';

const RepresentativeCard = (props) => {

    const rep = props.rep
    
    const capitalizeFirst = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(
        <div className="card">
            <div className="card-body">
                    <h5 className="card-title">{rep.name}</h5>
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
    )
}

export default RepresentativeCard;