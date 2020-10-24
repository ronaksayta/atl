import React, { Component } from 'react';
import * as bookActions from '../../actions/bookActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BookDetails from './BookDetails';


class ManageBook extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            book: Object.assign({}, this.props.book)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.book.isbn !== nextProps.book.ISBN) {
            this.setState({ book: Object.assign({}, nextProps.book) })
        }
    }

    render() {
        return (
            <div>
                <BookDetails
                 onSave = {this.saveBook}
                 book = {this.state.book}/>
            </div>
        )
    }
}



function getBookByISBN(books, bookISBN) {
    const book = books.filter(book => book.ISBN == bookISBN);
    if (book.length) {
        return book[0]};
    return null;
}

function mapStateToProps(state, ownProps) {
    const bookISBN = ownProps.match.params.isbn;
    let book = { ISBN: '', title: '', authors: [], imageLink: '', description: '' }

    if (bookISBN && state.books.length > 0) {
        book = getBookByISBN(state.books, bookISBN);
    }

    return {
        book: book
    };
}



function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(bookActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ManageBook);
