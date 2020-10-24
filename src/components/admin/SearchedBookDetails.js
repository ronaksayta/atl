import React from 'react';

const SearchedBookDetails = ({ title, authors, imageLink, description, categories, rating, ratingCount, saveBook }) => {
    return (
        <div className="container">
            <div className="card bookCard">
                <div className="row">
                    <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                        <img className="card-img-top bookImage" src={imageLink} alt = "book.title"/>
                    </div>
                    <div className="col-lg-8 col-xl-8 col-md-6 col-sm-12 col-xs-12">
                        <div className="bookData">
                            <h5>{title}</h5>
                            <div className="ratings">
                                {!rating && <span className = "disabled">There is no ratings for this book</span>}
                                {rating && <span className = "bookRating">
                                    <span className = "ratingChip">{rating}&nbsp;<i className = "fa fa-star"></i></span>
                                    &nbsp;Ratings&nbsp;{ratingCount}</span>}
                            </div>
                            <div className="bookCategories">
                                <span className = "bookLabel">Category : </span>
                                {categories && categories.map((category, index) => {
                                        return (<span key={index}>{(index ? ', ' : ' ') + category}</span>
                                        )
                                    })}
                                {!categories && <span className = "disabled">There is no category specified</span>}
                            </div>
                            <div className="bookAuthors">
                                <span className = "bookLabel">Authors: </span>
                                {
                                    authors && authors.map((author, index) => {
                                        return (<span key={index}>{(index ? ', ' : ' ') + author}</span>
                                        )
                                    })
                                }
                                {
                                    !authors && <span className = "disabled">No authors found for this book.</span>
                                }
                            </div>
                            <div className="bookDescription">
                                <span className = "bookLabel">Description: </span>
                                <span className="card-text">{description}</span>
                            </div>
                            <br />
                            <div>
                                <button type = "button" onClick = {saveBook} className = "small-success-button">
                                    <i className = "fa fa-plus"></i>&nbsp;Add Book
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchedBookDetails;