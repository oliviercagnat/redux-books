import { FETCH_BOOK_LOADING, FETCH_BOOK_SUCCESS, FETCH_BOOK_ERROR } from "../constants";
import axios from "axios";

const fetchBookLoading = () => {
    return {
        type: FETCH_BOOK_LOADING
    }
}

const fetchBookSuccess = data => {
    return {
        type: FETCH_BOOK_SUCCESS,
        payload: data

    }
}

const fetchBookError = errorMessage => {
    return {
        type: FETCH_BOOK_ERROR,
        payload: errorMessage
    }
}

const GOOGLE_API_KEY = 'AIzaSyAtyJYUXbgicVAuOnthCUrFIdxdRMxcRZE';

export const fetchBooks = title => {
    return dispatch => {
        dispatch(fetchBookLoading);

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${GOOGLE_API_KEY}&maxResults=20`)
        .then(res => {
            const bookItemsArray = res.data.items;
            dispatch(fetchBookSuccess(bookItemsArray));
        })
        .catch(error => {
            dispatch(fetchBookError(error.message));
        })
    }
}