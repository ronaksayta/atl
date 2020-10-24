import React, { Component } from 'react';
import StarIcon from  '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { makeStyles } from '@material-ui/core/styles';

class Rating extends Component {
    
    rating = this.props.rating;
    isbn = this.props.isbn;

    render() {
        let stars = [];   
    if (this.rating == undefined) {
        stars.push(<StarBorderIcon color = "primary"/> );
        stars.push(<StarBorderIcon color = "primary"/> );
        stars.push(<StarBorderIcon color = "primary"/> );
        stars.push(<StarBorderIcon color = "primary"/> );
        stars.push(<StarBorderIcon color = "primary"/> );
    return <span>{stars}</span>    
    }
    else 
    {
            for (var j = this.rating; j > 0; j--) {
                if (1 <= j) {
                    stars.push(<StarIcon key = {this.isbn + j} color = "primary"/> );
                } else if (0 < j ){
                    stars.push(<StarHalfIcon key = {this.isbn} color = "primary" />)
                }
            }
            var k = 5 - Math.round(this.rating);
            for (var m = k; m > 0; m--) {
                if (1 <= m) {
                    stars.push(<StarBorderIcon key = {this.isbn + (m - 5)} color = "primary"/> );
                }
            }
            return <span>{stars}</span>;
    }
    
    };
}

export default Rating;