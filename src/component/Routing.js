import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './home/Home';
import PostList from './postlist/PostList';
import PageList from './pagelist/PageList';


const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/postlist" component={PostList}/>
            <Route path="/pagelist" component={PageList}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;
