import React, { Component } from 'react';
import * as bookActions from '../../actions/bookActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BookForm from './BookForm';
// import { ToastContainer } from 'react-toastify';
// import { toast } from 'react-toastify';

class AddBook extends Component {

    constructor(props, context) {
        super(props, context);
        
        this.state = {
            book: Object.assign({}, this.props.book),
            errors: {}
        }

        this.updateBookState = this.updateBookState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    updateBookState(event) {
        const field = event.target.name;
        let book = this.state.book;
        book[field] = event.target.value;
        return this.setState({book: book});
    }

    redirect() {
        // toast.success('Book Saved!');
    }

    saveCourse(event) {
        event.preventDefault();
        let authors = this.state.book.authors.split(', ');
        let categories = this.state.book.categories.split(', ');
        let book = this.state.book;
        book.authors = authors;
        book.categories = categories;
        this.setState({book: book});
        this.props.actions.saveBook(this.state.book).then(
            () => {
                this.redirect();
            }
        ).catch((error) => {
            // toast.error(error);
        });
    }

    render() {
        return(
            <div>
                {/* <ToastContainer /> */}
                <BookForm book = {this.state.book} onSave = {this.saveCourse} onChange = {this.updateBookState} errors = {this.state.errors}/>
            </div>
        )
    }
    
}

function mapStateToProps(state, ownProps) {

    let book = {ISBN : '', title: '', authors: '', rating: '', ratingCount: '' , categories: '', imageLink: '', description: ''}

    return {
        book: book,
    };
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(bookActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);