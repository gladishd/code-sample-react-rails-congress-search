export const updateSearchForm = searchData => {
    return {
        type: "UPDATE_SEARCH_FORM",
        searchData
    }
} 

export const resetSearchForm = () => {
    return {
        type: 'RESET_SEARCH_FORM'
    }
}