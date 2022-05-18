const searchReducer = (state = "", action) => {
    switch(action.type){
        case "UPDATE_SEARCH_FORM":
            return action.searchData;
        default:
            return state;
    }
}

export default searchReducer;