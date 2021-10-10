import React, { Component } from 'react'

const TooLongPostsUrl = "https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d&formats=html,plaintext";

export class TooLongPosts extends Component {
    constructor(props){
        super(props)
        console.log("===========inside constructor================")
        this.state={
            toolongposts:''
        }
    }

    renderTooShortPosts = (data) => {
        if(data){
            let i = 1
            return data.map((item, index)=> {
                if(item.plaintext.split(' ').length>1500){
                    return(
                        <p>
                            {i++}. {item.title}
                        </p>
                    )
                }
            })
        }
    }

    render() {
        return (
            <div>
               {this.renderTooShortPosts(this.state.toolongposts)} 
            </div>
        )
    }

    componentDidMount(){
        console.log("===========inside componentDidMount===========")
        // we get the data and update the state
        fetch(TooLongPostsUrl, {method:'GET'})
        // return the promise
        .then((res) => res.json())
        // return the data
        .then((data) => {
            console.log("================aaa================")
            console.log(data)
            console.log("================aaa================")
            // set the data in the state
            this.setState({toolongposts:data.posts})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export default TooLongPosts
