import React, { useState } from 'react';

const Search = () => {

    const [address, setAddress] = useState("")

    const handleOnChange = event => {
        event.preventDefault();
    }

    return(
        <div className="search-bar">
            <form>
                <input 
                    type="text"
                    className="form-entry"
                    placeholder="Your Address Here..."
                    onChange={handleOnChange}
                />
            </form>
        </div>
    )
}

export default Search;