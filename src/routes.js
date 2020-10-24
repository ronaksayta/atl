import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/common/HomePage';
import FindBook from './components/admin/FindBook';
import ManageBook from './components/books/ManageBook';

const RoutingConfig = () => {
    return (
        <div>
            <Route exact path="/" component={HomePage} />
            <Route path = "/findBook" component={FindBook} />
            <Route path="/book/:isbn" component={ManageBook} />
        </div>
    )
}

export default RoutingConfig;
