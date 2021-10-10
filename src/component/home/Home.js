import React from 'react';

import TotalPost from './TotalPost'
import LatestPosts from './LatestPosts'

const Home = () => {
    return(
        <div className="panel panel-primary">
            <div className="panel-heading">
                Dashboard
            </div>
            <div className="panel-body">
                <div className="row">
                    <TotalPost/>
                </div>
                <div className="row">
                    <div className="col-md-12">                                
                        <div className="form-group">
                            <div className="col-md-4 panel panel-success">
                                <label>Latest 5 Published posts </label>
                                <LatestPosts/>
                            </div>
                            <div className="col-md-8 panel panel-success">
                                <label>Posts per month</label>
                                
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;