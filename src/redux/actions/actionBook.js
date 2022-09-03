import { ADD_BOOK, DELETE_BOOK, DELETE_ALL_BOOKS } from "../constants";

export const actionAddBook = data => {
    return {
        type: ADD_BOOK,
        payload: data // object with title and author
    }
}

export const actionDeleteBook = id => {
    return {
        type: DELETE_BOOK,
        payload: id // book id
    }
}

export const actionDeleteAllBooks = data => {
    return {
        type: DELETE_ALL_BOOKS,
        payload: data
    }
}