import React from 'react';
import TextInput from '../common/TextInput';

const BookForm = ({book, onSave, onChange, errors}) => {
    return(
        <form>
            <h1>Add Book</h1>
            
            <TextInput 
            name = "ISBN"
            label = "ISBN"
            value = {book.ISBN}
            onChange = {onChange}
            error = {errors.ISBN} />

            <TextInput 
            name = "title"
            label = "Title"
            value = {book.title}
            onChange = {onChange}
            error = {errors.title} />

            <TextInput 
            name = "authors"
            label = "Author"
            value = {book.authors}
            onChange = {onChange}
            error = {errors.title} />

            <TextInput 
            name = "categories"
            label = "Category"
            value = {book.categories}
            onChange = {onChange}
            error = {errors.categories} />

            <TextInput 
            name = "rating"
            label = "Rating"
            value = {book.rating}
            onChange = {onChange}
            error = {errors.title} />

            <TextInput 
            name = "ratingCount"
            label = "Rating Count"
            value = {book.ratingCount}
            onChange = {onChange}
            error = {errors.title} />

            <TextInput 
            name = "imageLink"
            label = "Image Link"
            value = {book.imageLink}
            onChange = {onChange}
            error = {errors.title} />

            <TextInput 
            name = "description"
            label = "Description"
            value = {book.description}
            onChange = {onChange}
            error = {errors.title} />

            <input 
            type = "submit"
            className = "small-success-button"
            onClick = {onSave} />
 
        </form>
    );
}

export default BookForm;