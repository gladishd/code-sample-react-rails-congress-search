import React from 'react';

const RepresentativeCard = (props) => {

    const rep = props.rep
    console.log(rep)
    const capitalizeFirst = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(
        <div className="card">
            <div className="card-body">
                    <h5 className="card-title">{capitalizeFirst(rep.type)} {rep.name}</h5>
                    <p className="card-text">{rep.party}</p>
                    <p className="card-text"><a href={rep.url}>Website</a></p>
                    <p className="card-text">{rep.address}</p>
                    <p className="card-text">{rep.phone}</p>
                    <p className="card-text">Twitter: {rep.twitter}</p>
                    <p className="card-text">Facebook: {rep.facebook}</p>
                    <p className="card-text">Youtube: {rep.youtube}</p>
                    <p className="card-text">Birthday: {rep.birthday}</p>
                </div>
        </div>
    )
}

export default RepresentativeCard;