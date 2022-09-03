import { ADD_BOOK, DELETE_BOOK, DELETE_ALL_BOOKS } from "../constants"
import { v4 as uuidv4 } from 'uuid'

const initialState = {
    books: []
}

// We use helperAddData to give id and allocate the data properly
const helperAddData = action => {
    return {
        // We generate unique id
        id: uuidv4(),
        title: action.payload.title,
        author: action.payload.author
    }
}

// We use removeDataById and filter the state array and keep all different id
const removeDataById = (state, id) => {
    const books = state.filter(book => book.id !== id);
    return books;
}

const reducerBook = ( state = initialState.books, action ) => {

    // We check if we already have data in localStorage
    if (localStorage.getItem('booksData')) {
        state = JSON.parse(localStorage.getItem('booksData'));
    }

    switch (action.type) {
        case ADD_BOOK:
            // We call helperAddData and allocate the data in the state
            state = [...state, helperAddData(action)];
            // We save a copy in localStorage as well
            localStorage.setItem('booksData', JSON.stringify(state));
            return state;

        case DELETE_BOOK:
            // We call removeDataById to remove the book from the state
            state = removeDataById(state, action.payload);
            localStorage.setItem('booksData', JSON.stringify(state));
            return state;

        case DELETE_ALL_BOOKS:
            state = [];
            localStorage.setItem('booksData', JSON.stringify(state));
            return state;

        default:
            return state;
    }
}

export default reducerBook;