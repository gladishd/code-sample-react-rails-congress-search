const initState = {
    address: ""
}

const districtReducer = (state = initState, action) => {
    switch(action.type){
        case "SET_DISTRICT":
            return action.district
        default:
            return state
    }
}

export default districtReducer