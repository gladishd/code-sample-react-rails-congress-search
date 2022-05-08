import React from 'react';
import { connect } from 'react-redux';
import { updateSearchForm } from '../actions/search';
import { setDistrict } from '../actions/district';

const Search = ({ search, updateSearchForm, setDistrict }) => {
    
    const fetchDistrict = () => {
        fetch(`http://localhost:3001/get_districts?search=${search.value}`)
        .then(resp => resp.json())
         .then(data => {
            if (data.error){
                console.log("Something went wrong.")
            } else {
                 updateSearchForm(data)
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
        setDistrict(search.value)
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