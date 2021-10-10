import React, { Component } from 'react'

const TooLongUrlUrl = "https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d&limit=all";

class TooLongUrl extends Component {
    constructor(props){
        super(props)
        console.log("===========inside constructor================")
        this.state={
            toolongurl:''
        }
    }

    renderTooLongUrl = (data) => {
        if(data){
            return data.map((item, index)=> {
                if(item.url.length>100){
                    return(
                        <p>
                            {index+1}. {item.title}
                        </p>
                    )
                }
            })
        }
    }

    render() {
        return (
            <div>
               {this.renderTooLongUrl(this.state.toolongurl)} 
            </div>
        )
    }

    componentDidMount(){
        console.log("===========inside componentDidMount===========")
        // we get the data and update the state
        fetch(TooLongUrlUrl, {method:'GET'})
        // return the promise
        .then((res) => res.json())
        // return the data
        .then((data) => {
            console.log("================aaa================")
            console.log(data)
            console.log("================aaa================")
            // set the data in the state
            this.setState({toolongurl:data.posts})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export default TooLongUrl
