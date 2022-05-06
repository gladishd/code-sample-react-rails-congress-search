export const setDistrict = district => {
    return {
        type: "SET_DISTRICT",
        district
    }
}

export const getDistrict = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/get_districts", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(response => {
            if(response.error) {
                alert(response.error)
            } else {
                dispatch(setDistrict(response.data))
            }
        })
        .catch(console.log)
    }
}