import React from 'react';
import { NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Rating from '../common/Rating';

const Book = ({ book }) => {

    return (
        <Grid item xs = {12} sm = {4} md = {3} lg = {2}>
            <div className = "bookTile">
            <NavLink to={'/book/' + book.ISBN}>
                <Card>
                    <CardActionArea>
                    <CardMedia>
                    <img src={book.imageLink} alt = "book.title"/>
                    </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h6" noWrap>
                                <Box fontSize = {14}>
                                {book.title}
                                </Box>
                            </Typography>
                            
                            <Typography variant="subtitle1" color="textSecondary"  noWrap>
                                <Box fontSize = {13}>
                                {
                                    book.authors && book.authors.map((author, index) => {
                                        return (<span key={index}>{(index ? ', ' : ' ') + author}</span>
                                        )
                                    })
                                }
                                {
                                    !book.authors && <span className="disabled">No authors found for this book.</span>
                                }
                                </Box>
                                </Typography>
                                <Rating rating = {book.rating} isbn = {book.ISBN}/>
                            
                        </CardContent>
                    </CardActionArea>
                </Card>
            </NavLink>
            </div>
        </Grid>
    )
}

export default Book;