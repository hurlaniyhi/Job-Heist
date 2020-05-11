import React from 'react';
import {NavLink} from 'react-router-dom'
import createReactClass from 'create-react-class'
// import {FaGlobe} from 'react-icons/fa'
// import {FaSignOutAlt} from 'react-icons/fa'

import "./search.css"


var Search = createReactClass({
    render: function(){
        return(
            <div>
               
                <br/><br/><br/>
                <div className="formBlock">
                    <br/>
                    <form>
                <br/><br/><br/>
                <input name="MailSubject" className="sub" type="search" placeholder = "Qualification" required/> <br/><br/>
                <br/>
                <button className="upload" value="submit">Search</button><br/><br/><br/><br/>
                </form>
                </div>
                <br/><br/>
                
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        )
    }
})

export default Search