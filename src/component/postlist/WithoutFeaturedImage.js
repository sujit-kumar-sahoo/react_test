import React, { Component } from 'react'

const WithoutFeaturedImageUrl = "https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d&filter=featured:false";

export class WithoutFeaturedImage extends Component {
    constructor(props){
        super(props)
        console.log("===========inside constructor================")
        this.state={
            withoutfeaturedimage:''
        }
    }

    renderWithoutFeaturedImage = (data) => {
        if(data){
            return data.map((item, index)=> {
                return(
                    <p>
                        {index+1}. {item.title}
                    </p>
                )
            })
        }
    }

    render() {
        return (
            <div>
               {this.renderWithoutFeaturedImage(this.state.withoutfeaturedimage)} 
            </div>
        )
    }

    componentDidMount(){
        console.log("===========inside componentDidMount===========")
        // we get the data and update the state
        fetch(WithoutFeaturedImageUrl, {method:'GET'})
        // return the promise
        .then((res) => res.json())
        // return the data
        .then((data) => {
            console.log("================aaa================")
            console.log(data)
            console.log("================aaa================")
            // set the data in the state
            this.setState({withoutfeaturedimage:data.posts})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export default WithoutFeaturedImage
