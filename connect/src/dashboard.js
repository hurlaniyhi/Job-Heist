import React from 'react';
import {NavLink} from 'react-router-dom'
import createReactClass from 'create-react-class'
// import {FaGlobe} from 'react-icons/fa'
// import {FaSignOutAlt} from 'react-icons/fa'

import "./dashboard.css"


var Dashboard = createReactClass({
    render: function(){
        return(
            <div>
                <div style={{backgroundColor: "#EB4844", marginLeft:"7%",width:"86%", marginTop: "90px",height: "45px",marginRight: "7%"}}>
                    <h4 style={{textAlign: "left", color: "whitesmoke",paddingLeft: "7%",paddingTop: "5px"}}>WELCOME TO JOB HEIST</h4>
                </div>
                <div className="outerBlock">
                
                    <br/><br/>
                <div className="formBlock">
                    <br/><br/>
                    <form>
                <h2 style={{textAlign: "center"}}>Instruction</h2>
                <br/><br/>
                
                    <p className="ifn1"><strong>1.</strong> Please select Edit Profile and provide the required information</p>
                    <p className="ifn1"><strong>2.</strong> Please select each of the menu with upload icon to upload documents</p>
                    <p className="ifn1"><strong>3.</strong> Select Preview To Review the information you provided</p>
                    <p className="ifn1"><strong>4.</strong> Click on the logo at the top left corner to upload profile picture</p>
                    
                
                
                <br/><br/><br/><br/>
                </form>
                </div>
                <br/><br/>
                </div>
                <br/><br/><br/><br/><br/><br/>
            </div>
        )
    }
})

export default Dashboard