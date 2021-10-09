import React from 'react';
import {Link, withRouter} from 'react-router-dom'

const Header = (props) => {
    console.log("header props>>>>",props)
    return(
        <>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button className="navbar-toggle" data-toggle="collapse" data-target="#developernav">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">
                            Sujit Test
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="developernav">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Dashboard</Link></li>
                            <li><Link to="/postlist">Posts List</Link></li>
                            <li><Link to="/pagelist">Pages List</Link></li>
                        </ul>
                        
                    </div>
                    
                </div>
            </nav>

        </>
    )
}

export default withRouter(Header);