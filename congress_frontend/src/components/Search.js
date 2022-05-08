import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { updateSearchForm } from '../actions/search';
import { setDistrict } from '../actions/district';

const Search = ({ search, district, updateSearchForm, setDistrict }) => {
    
    const initialMount = useRef(true);

    useEffect(() => {
        if (initialMount.current){
            initialMount.current = false;
        } else {
            console.log(district)
        }
    })
    
    
    const fetchDistrict = () => {
        fetch(`http://localhost:3001/get_districts?search=${district}`)
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
                <input 
                    type="text"
                    className="form-entry"
                    placeholder="Your Address Here..."
                />
                <input
                    type="submit"
                    value="Search"
                />
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        search: state.searchReducer,
        district: state.districtReducer
    }
}

export default connect(mapStateToProps, { updateSearchForm, setDistrict })(Search);