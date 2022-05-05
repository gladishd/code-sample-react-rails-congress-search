import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateSearchForm } from '../actions/search';

const Search = ({ search, updateSearchForm }) => {

    useEffect(() => {
        fetch(`http://localhost:3001/get_districts?address=${search}`)
        .then(resp => resp.json())
         .then(data => {
            if (data.error){
                console.log("Something went wrong.")
            } else {
                 console.log(data)
            }
        })
    },[search])

    const handleOnChange = event => {
        event.preventDefault();
        const value = event.target.value;
        const updatedData = {
            ...search,
            value
        };
        updateSearchForm(updatedData);
    }

    return(
        <div className="search-bar">
            <form>
                <input 
                    type="text"
                    className="form-entry"
                    placeholder="Your Address Here..."
                    onChange={handleOnChange}
                    value={search.value}
                />
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        search: state.searchReducer
    }
}

export default connect(mapStateToProps, { updateSearchForm})(Search);