const districtReducer = (state = null, action) => {
    switch(action.type){
        case "SET_DISTRICT":
            return action.district
        default:
            return state
    }
}

export default districtReducer