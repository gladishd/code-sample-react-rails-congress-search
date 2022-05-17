import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { updateSearchForm } from '../actions/search';
import { setDistrict } from '../actions/district';

const Search = ({ search, updateSearchForm, district, setDistrict }) => {
    
    const initialMount = useRef(true);

    useEffect(() => {
        const fetchDistrict = () => {
            fetch(`http://localhost:3001/get_districts?search=${search}`, {
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
                    setDistrict(data)
                }
            })
        }

        if (initialMount.current){
            initialMount.current = false;
        } else {
            fetchDistrict()
        }
    }, [fetchDistrict])

    const handleSubmit = event => {
        event.preventDefault();
        const searchValue = event.target[0].value
        updateSearchForm(searchValue);
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
        search: state.searchReducer,
        district: state.districtReducer
    }
}

export default connect(mapStateToProps, { setDistrict, updateSearchForm })(Search);