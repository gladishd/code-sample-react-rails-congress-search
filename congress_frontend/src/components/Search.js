import React, { useState, useEffect } from 'react';

const Search = () => {

    const [address, setAddress] = useState("1600 Pennsylvania Ave.")

    const handleOnChange = event => {
        event.preventDefault();
        const value = event.target.value;
        setAddress(value);
    }

    useEffect(() => {
        fetch(`http://localhost:3001/get_districts?address=${address}`)
        .then(resp => resp.json())
        .then(data => {
            if (data.error){
                console.log("Something went wrong.")
            } else {
                setAddress(data)
            }
        })
    },[address])

    return(
        <div className="search-bar">
            <form>
                <input 
                    type="text"
                    className="form-entry"
                    placeholder="Your Address Here..."
                    onChange={handleOnChange}
                    value={address.value}
                />
            </form>
        </div>
    )
}

export default Search;