import React, { useState } from 'react';

const Search = () => {

    const [address, setAddress] = useState("")

    return(
        <div className="search-bar">
            <form>
                <input 
                    type="text"
                    className="form-entry"
                    placeholder="Your Address Here..."
                />
            </form>
        </div>
    )
}

export default Search;