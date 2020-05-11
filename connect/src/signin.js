import React from 'react';
import {NavLink} from 'react-router-dom'
import createReactClass from 'create-react-class'
import {FaGlobe} from 'react-icons/fa'
import {FaHome} from 'react-icons/fa'
// import {FaInstagram} from 'react-icons/fa'
// import {FaFacebook} from 'react-icons/fa'
// import {FaTwitter} from 'react-icons/fa'
import "./signIn.css"

var SignIn = createReactClass({
    render: function(){
        return (
            <div>
            <div className="button_feedcont">
    
      
    <FaGlobe style={{width: "100px",height: "40px"}} /><p className="p" style={{textAlign: "left",fontWeight: "bold", display: "inline-block", color: "black"}}>Job Heist</p>

    <button id="menu1_feedbutton" ><NavLink exact to = "./" style={{textDecoration: "none"}}><FaHome />Home</NavLink></button>

  </div>
            <div className="signincap">
            <div className="signincontainer">
                <h2 className="hh">Sign In</h2>
                <br/>
                <form action="/" method="POST" autocomplete="off">
                
                <input id="signininp1" name="username" className="signininp1" type="text" placeholder = "Enter Username" required/><br/><br/><br/>
               
                <input id="signintoo" name="password" className="signininp" type="password" placeholder = "Enter Password" required/> <br/><br/><br/><br/>
               
                <NavLink exact to = "/signin/userdashboard/dashboard.js" style={{textDecoration: "none"}}><button className="signinbutt" value = "submit">Log In</button></NavLink>
                <br/>
                <NavLink exact to = "./signUp" style={{paddingLeft: "34%"}}>Create New Account</NavLink><br/>
                <NavLink exact to = "./forgetPassword" style={{paddingLeft: "36%"}}>Forget Password?</NavLink>
                </form>
                <br/>
                               
            </div>
            <div className="signinoverlay"></div>
        </div>
        </div>
        )
    }
})

export default SignIn