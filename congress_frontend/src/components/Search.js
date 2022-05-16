import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { setDistrict } from '../actions/district';

const Search = ({ district, setDistrict }) => {
    
    const initialMount = useRef(true);

    useEffect(() => {
        if (initialMount.current){
            initialMount.current = false;
        } else {
            fetchDistrict()
        }
    })
    
    
    const fetchDistrict = () => {
        fetch(`http://localhost:3001/get_districts?search=${district}`, {
            mode: "no-cors",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
         .then(data => {
            if (data.error){
                console.log("Something went wrong.")
            } else {
                 console.log(data)
            }
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        const searchValue = event.target[0].value
        setDistrict(searchValue);
    }

    return(
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Your Address Here..."
                    />
                </div>
                <input
                    type="submit"
                    className="btn btn-dark"
                    value="Search"
                />
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        district: state.districtReducer
    }
}

export default connect(mapStateToProps, { setDistrict })(Search);