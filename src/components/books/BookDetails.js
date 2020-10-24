import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Rating from '../common/Rating';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        marginTop: 30
    }
}));

const BookDetails = ({ book }) => {
    const classes = useStyles();
    return (
        <div class = "book-details">
        <Container maxWidth="lg">
            <Paper className={classes.root}>
                <Grid container>
                    <Grid item lg={3} xl={3} sm={6} md={4} xs={12}>
                        <div class = "book-image">
                        <img src={book.imageLink} alt="book.title" />
                        </div>
                    </Grid>
                    <Grid item lg={9} xl={9} sm={6} md={8} xs={12}>
                        <Typography variant = "h3">
                            {book.title}
                        </Typography>
                            { !book.rating && <div className="disabled">There is no ratings for this book</div>}
                            { book.rating &&
                            <div className="bookRating">
                                <Typography>
                                    <Rating className = {classes.icons} rating = {book.rating} isbn = {book.ISBN} />&nbsp;
                                    <span>({book.ratingCount})</span>
                                </Typography>
                            </div>
                            }
                            <Typography variant = "body1" className="bookDescription">
                            <span><b>ISBN: </b></span>
                            <span>{book.ISBN}</span>
                        </Typography>
                        <Typography variant = "subtitle1">
                            <span className="bookLabel"><b>Category : </b></span>
                            {book.categories && book.categories.map((category, index) => {
                                return (<span key={index}>{(index ? ', ' : ' ') + category}</span>
                                )
                            })}
                            {!book.categories && <span className="disabled">There is no category specified</span>}
                        </Typography>
                        <Typography variant = "subtitle1">
                            <span className="bookLabel"><b>Authors: </b></span>
                            {
                                book.authors && book.authors.map((author, index) => {
                                    return (<span key={index}>{(index ? ', ' : ' ') + author}</span>
                                    )
                                })
                            }
                            {
                                !book.authors && <span className="disabled">No authors found for this book.</span>
                            }
                        </Typography>
                        <Typography variant = "body1" className="bookDescription">
                            <div className="bookLabel"><b>Description: </b></div>
                            <span className="card-text">{book.description}</span>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
        </div>
    )
}

export default BookDetails;