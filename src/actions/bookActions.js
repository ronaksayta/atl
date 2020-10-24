import * as types from './actionTypes';
import BookApi from '../apis/mockBookApi';

export function loadBooksSuccess(books) {
    return { type: types.LOAD_BOOKS_SUCCESS, books}
}

export function createBookSuccess(book) {
    return { type: types.CREATE_BOOK_SUCCESS, book}
}

export function loadBooks() {
    return function(dispatch) {
        return BookApi.getAllBooks().then(books => {
            dispatch(loadBooksSuccess(books))
        }).catch(error => {
            throw(error);
        })       
    }
}

export function saveBook(book) {
    return function(dispatch, getState) {
        return BookApi.saveBook(book).then(savedBook => {
             dispatch(createBookSuccess(savedBook));
       }).catch(error => {
            throw(error);
        });
    };
}