import React, { useState } from 'react';

const Search = () => {

    const [address, setAddress] = useState("")

    const handleOnChange = event => {
        event.preventDefault();
        const value = event.target.value;
        setAddress(value);
    }

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