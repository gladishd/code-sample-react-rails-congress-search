import React from 'react';
import { connect } from 'react-redux';
import { updateSearchForm } from '../actions/search';
import { setDistrict } from '../actions/district';

const Search = ({ search, district, updateSearchForm, setDistrict }) => {
    
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

    const handleOnChange = event => {
        event.preventDefault();
        const value = event.target.value;
        const updatedData = {
            ...search,
            value
        };
        updateSearchForm(updatedData);
    }

    const handleSubmit = event => {
        event.preventDefault();
        setDistrict(search.value);
        //fetchDistrict();
    }

    return(
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    className="form-entry"
                    placeholder="Your Address Here..."
                    onChange={handleOnChange}
                    value={search.value}
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