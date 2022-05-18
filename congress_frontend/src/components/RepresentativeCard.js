import React from 'react';

const RepresentativeCard = (props) => {

    const rep = props.rep
    const capitalizeFirst = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{capitalizeFirst(rep.type)} {rep.name}</h5>
                    <p className="card-text">{rep.party}</p>
                    <p className="card-text"><i>Birthdate:</i> {rep.birthday}</p>
                    <p className="card-text">
                        <i>Phone:</i> 
                        <br /> 
                        {rep.phone}
                    </p>
                    <p className="card-text">
                        <i>Address:</i>
                        <br />
                        {rep.address}
                    </p>
                    <p className="card-text"><a href={rep.url} className="text-decoration-none link-info">Website</a></p>
                    <p className="card-text">Twitter: {rep.twitter}</p>
                    <p className="card-text">Facebook: {rep.facebook}</p>
                    <p className="card-text">Youtube: {rep.youtube}</p>
                    <button className="btn btn-primary">
                        <i class="bi bi-facebook"> </i>
                    </button>
                    <button className="btn btn-warning">
                        <i class="bi bi-twitter"> </i>
                    </button>
                    <button className="btn btn-success">
                        <i class="bi bi-youtube"> </i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RepresentativeCard;