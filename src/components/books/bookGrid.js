import React from 'react';
import Book from './book';
import { Grid } from '@material-ui/core';

const BookGrid = ({ books }) => {
    return (
        <div className = "bookGrid" >
        <Grid container>
        {books.map(book =>
          <Book key={book.ISBN} book={book} />        
        )}
        </Grid>
        </div>
    )
}

export default BookGrid;