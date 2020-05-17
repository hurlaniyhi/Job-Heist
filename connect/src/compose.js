import React from 'react';
import {NavLink} from 'react-router-dom'
import createReactClass from 'create-react-class'
// import {FaGlobe} from 'react-icons/fa'
// import {FaSignOutAlt} from 'react-icons/fa'

import "./compose.css"


var Compose = createReactClass({
    render: function(){
        return(
            <div>
                <div style={{backgroundColor: "#EB4844", marginLeft:"7%",width:"86%", marginTop: "90px",height: "45px",marginRight: "7%"}}>
                    <h4 id="ch4" style={{textAlign: "left", color: "whitesmoke",paddingLeft: "7%",paddingTop: "5px"}}>PROVIDE THE MAIL YOU WANT TO BE SENDING</h4>
                </div>
                <div className="outerBlock">
                
                    <br/><br/>
                <div className="formBlock">
                    <br/><br/>
                    <form>
                <h3 style={{textAlign: "center"}}>Compose Mail</h3>
                <br/>
                <input name="MailSubject" className="sub" type="text" placeholder = "Subject" required/> <br/><br/>
                <textarea name="ComposedMail" className="cfn" type="text" required placeholder="Mail Content"></textarea><br/><br/><br/>
                <button className="mupload">Compose</button><br/><br/><br/><br/>
                </form>
                </div>
                <br/><br/>
                </div>
                <br/><br/><br/><br/><br/>
            </div>
        )
    }
})

export default Compose