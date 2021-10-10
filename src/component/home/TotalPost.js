import React, { Component } from 'react'

const PostsUrl = "https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d&limit=all&authors=count.posts";
const PagesUrl = "https://ghost-blog.ipxp.in/ghost/api/v3/content/pages/?key=8196190b08906dda0ebf6e6f5d&limit=all&authors=count.posts";
const TotalAuthorsUrl = "https://ghost-blog.ipxp.in/ghost/api/v3/content/authors/?key=8196190b08906dda0ebf6e6f5d&limit=all&authors=count.posts";
const TotalTagsUrl = "https://ghost-blog.ipxp.in/ghost/api/v3/content/tags/?key=8196190b08906dda0ebf6e6f5d&limit=all&authors=count.posts";

class TotalPost extends Component {
    constructor(props){
        super(props)
        console.log("===========inside constructor================")
        this.state={
            totalposts:'',
            totalpages:'',
            totalauthors:'',
            totaltags:''
        }
    }


    render() {
        return (
            <div>
                <div className="col-md-12">                                
                    <div className="form-group">
                        <div className="col-md-3 panel panel-success jumbotron">
                            <label> Total Posts </label>
                            <h1>{this.state.totalposts}</h1>
                        </div>
                        <div className="col-md-3 panel panel-success jumbotron">
                            <label> Total Pages </label>
                            <h1>{this.state.totalpages}</h1>
                        </div>
                        <div className="col-md-3 panel panel-success jumbotron">
                            <label> Total Authors </label>
                            <h1>{this.state.totalauthors}</h1>
                        </div>
                        <div className="col-md-3 panel panel-success jumbotron">
                            <label> Total Tags </label>
                            <h1>{this.state.totaltags}</h1>
                        </div>
                    </div>    
                </div>
            </div>
        )
    }

    componentDidMount(){
        console.log("===========inside componentDidMount===========")
        // we get the data and update the state
        fetch(PostsUrl, {method:'GET'})
        // return the promise
        .then((res) => res.json())
        // return the data
        .then((data) => {
            console.log("================aaa================")
            console.log(data)
            console.log("================aaa================")
            // set the data in the state
            this.setState({totalposts:data.meta.pagination.total})
        })
        .catch((err) => {
            console.log(err)
        })

        fetch(PagesUrl, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({totalpages:data.meta.pagination.total})
        })
        .catch((err) => {
            console.log(err)
        })

        fetch(TotalAuthorsUrl, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({totalauthors:data.meta.pagination.total})
        })
        .catch((err) => {
            console.log(err)
        })

        fetch(TotalTagsUrl, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({totaltags:data.meta.pagination.total})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export default TotalPost
