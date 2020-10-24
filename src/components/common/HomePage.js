import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookActions from '../../actions/bookActions';
import BookGrid from '../books/bookGrid';
import Container from '@material-ui/core/Container';


class HomePage extends Component {
    
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { books } = this.props;
        return(
        <Container maxWidth="xl">   
                <BookGrid books = {books}/>
      </Container>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(bookActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);