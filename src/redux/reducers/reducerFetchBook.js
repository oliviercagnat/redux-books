import { FETCH_BOOK_LOADING, FETCH_BOOK_SUCCESS, FETCH_BOOK_ERROR } from "../constants";

const initialState = {
    isLoading: false,
    fetchedBooks: [],
    error: ''
}



const reducerFetchBook = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOK_LOADING:
            return {
                // Make a copy of the state, get all the state
                ...state,
                isLoading: true
            }
        case FETCH_BOOK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                fetchedBooks: action.payload,
                error: ''
            }
        case FETCH_BOOK_ERROR:
            return {
                ...state,
                isLoading: false,
                fetchedBooks: [],
                error: action.payload
            }
    
        default:
            return state
    }
}

export default reducerFetchBook;