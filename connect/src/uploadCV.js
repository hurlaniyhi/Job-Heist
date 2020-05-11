import React from 'react';
import {NavLink} from 'react-router-dom'
import createReactClass from 'create-react-class'
// import {FaGlobe} from 'react-icons/fa'
// import {FaSignOutAlt} from 'react-icons/fa'

import "./uploadCV.css"


var UploadCV = createReactClass({
    render: function(){
        return(
            <div>
                <div style={{backgroundColor: "#EB4844", marginLeft:"7%",width:"86%", marginTop: "90px",height: "45px",marginRight: "7%"}}>
                    <h4 style={{textAlign: "left", color: "whitesmoke",paddingLeft: "7%",paddingTop: "5px"}}>UPLOAD CV</h4>
                </div>
                <div className="outerBlock">
                
                    <br/><br/>
                <div className="formBlock">
                    <br/><br/>
                    <form>
                <h3 style={{textAlign: "center"}}>CV Upload</h3>
                <br/><br/><br/>
                
                <input name="CV" className="ufn" type="file" required/><br/><br/><br/>
                <button className="upload">Upload</button><br/><br/><br/><br/>
                </form>
                </div>
                <br/><br/>
                </div>
                <br/><br/><br/><br/><br/>
            </div>
        )
    }
})

export default UploadCV