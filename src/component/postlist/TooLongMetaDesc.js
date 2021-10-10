import React, { Component } from 'react'

const TooLongMetaDescUrl = "https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d&filter=meta_description:-null";

class TooLongMetaDesc extends Component {
    constructor(props){
        super(props)
        console.log("===========inside constructor================")
        this.state={
            toolongmetadesc:''
        }
    }

    renderTooLongMetaDesc = (data) => {
        if(data){
            return data.map((item, index)=> {
                if(item.meta_description.length>100){
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
               {this.renderTooLongMetaDesc(this.state.toolongmetadesc)} 
            </div>
        )
    }

    componentDidMount(){
        console.log("===========inside componentDidMount===========")
        // we get the data and update the state
        fetch(TooLongMetaDescUrl, {method:'GET'})
        // return the promise
        .then((res) => res.json())
        // return the data
        .then((data) => {
            console.log("================aaa================")
            console.log(data)
            console.log("================aaa================")
            // set the data in the state
            this.setState({toolongmetadesc:data.posts})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export default TooLongMetaDesc
