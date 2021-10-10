import React from 'react';
import WithoutMetaDesc from './WithoutMetaDesc';
import TooLongMetaDesc from './TooLongMetaDesc';
import TooLongUrl from './TooLongUrl'
import WithoutFeaturedImage from './WithoutFeaturedImage'
import TooShortPosts from './TooShortPosts'
import TooLongPosts from './TooLongPosts'



const PostList = (props) => {
    
    return(
        <div className="panel panel-success">
            <div className="panel-heading">
                Post List
            </div>
            <div className="panel-body">
                <div className="row">
                    <div className="col-md-12">                                
                        <div className="form-group">
                            <div className="col-md-4 panel panel-success">
                                <label> Without Meta Description</label>
                                <WithoutMetaDesc/>
                            </div>
                            <div className="col-md-4 panel panel-success">
                                <label>Too long Meta Description</label>
                                <TooLongMetaDesc/>
                            </div>
                            <div className="col-md-4 panel panel-success">
                                <label>Too long URL, more than 100 chars</label>
                                <TooLongUrl/>
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">                                
                        <div className="form-group">
                            <div className="col-md-4 panel panel-success">
                                <label>List of Posts without Featured Image</label>
                                <WithoutFeaturedImage/>
                            </div>
                            <div className="col-md-4 panel panel-success">
                                <label>Too Short Posts, Below 250 words</label>
                                <TooShortPosts/>
                            </div>
                            <div className="col-md-4 panel panel-success">
                                <label>Too Long Posts, More than 1500 words</label>
                                <TooLongPosts/>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostList;