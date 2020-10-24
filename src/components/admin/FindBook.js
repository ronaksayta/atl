import React, { Component } from 'react';
import * as bookActions from '../../actions/bookActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchedBookDetails from './SearchedBookDetails';
import axios from 'axios';
// import { ToastContainer } from 'react-toastify';
// import { toast } from 'react-toastify';
import AddBook from './AddBook';


class FindBook extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = { value: '', book: {}, loading: false }
        this.getBookData = this.getBookData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getBookDataApi = this.getBookDataApi.bind(this);

        this.redirect = this.redirect.bind(this);
        this.saveBook = this.saveBook.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    saveBook(event) {
        event.preventDefault();
        this.props.actions.saveBook(this.state.book).then(
            () => {
                this.redirect();
            }
        ).catch((error) => {
            // toast.error(error);
        });
    }

    redirect() {
        // toast.success('Book Saved!');
        this.props.history.push('/');
    }

    getBookData(event) {
        event.preventDefault();
        this.getBookDataApi(this.state.value);
    }

    getBookDataApi(bookISBN) {
        const bookISBNValue = bookISBN.replace(/-/g, '');
        axios.get("https://www.googleapis.com/books/v1/volumes?q=isbn:" + bookISBNValue).then((response) => {
            if (response.data.items !== undefined) {
                const bookDetails = response.data.items[0].volumeInfo;
                let book = {
                    ISBN: Number(bookISBNValue),
                    title: bookDetails.title,
                    authors: bookDetails.authors,
                    imageLink: bookDetails.imageLinks.thumbnail,
                    description: bookDetails.description,
                    categories: bookDetails.categories,
                    rating: bookDetails.averageRating,
                    ratingCount: bookDetails.ratingsCount
                }

                this.setState({ book: book });
                this.setState({ loading: true });
            } else {
                // toast.error('Sorry no book found for this ISBN!');
            }
        });
    }

    render() {
        return (
            <div className="findBook container-fluid">
                {/* <ToastContainer /> */}
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#isbn">ISBN</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#manually">Manually</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div id="isbn" className="tab-pane container in active">
                        <br />
                        <h1>Find a book using ISBN</h1>
                        <br />
                        <form onSubmit={this.getBookData}>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Book ISBN : </label>
                                <div className="col-sm-10">
                                    <input type="text" value={this.state.value} className="form-control" onChange={this.handleChange} placeholder="Enter book ISBN" />
                                </div>
                            </div>
                            <br />
                            <input type="submit" className="primary-button" value="Get Details" />
                        </form>
                        <br />
                        {this.state.loading && <SearchedBookDetails
                            title={this.state.book.title}
                            authors={this.state.book.authors}
                            imageLink={this.state.book.imageLink}
                            description={this.state.book.description}
                            categories={this.state.book.categories}
                            rating={this.state.book.averageRating}
                            ratingCount={this.state.book.ratingsCount}
                            saveBook={this.saveBook} />}
                    </div>
                    <div id="manually" className="tab-pane fade container">
                        <br />
                        <AddBook />
                    </div>
                </div>

            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(bookActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(FindBook);