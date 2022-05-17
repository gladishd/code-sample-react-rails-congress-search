const searchReducer = (state = "", action) => {
    switch(action.type){
        case "UPDATE_SEARCH_FORM":
            return action.searchData;
        case "RESET_SEARCH_FORM":
            return state;
        default:
            return state;
    }
}

export default searchReducer;